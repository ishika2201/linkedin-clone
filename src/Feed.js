import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import "./Firebase";
import "./InputOption";
import "./Feed.css";
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';
import Post from './Post';
import { db } from './Firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import InputOption from './InputOption';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {

  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot)=> 
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
     
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
  };

  
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
            <CreateIcon />
            <form >
                <input value={input} onChange={e => setInput(e.target.value)} className="typer" type="text" />
                <button onClick={sendPost} type='submit'>Post</button>
            </form>

            </div>

            <div className="feed_inputOptions">
                <InputOption Icon={PhotoIcon} title='Photo'/>
                <InputOption Icon={VideoLibraryIcon} title='Video'/>
                <InputOption Icon={EventIcon} title='Event'/>
                <InputOption Icon={AssignmentIcon} title='Write article'/>
                
            </div>

        </div>

{/*posts */}
        {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
        

    </div>
  );
}

export default Feed;