import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './Firebase';
import './Login.css';

function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState(""); 
    const[profilePic, setProfilePic] = useState("");
    const dispatch =useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: profilePic

            })
        );
        })
        .catch((error)=> alert(error));

    };
    const register= () => {
        if(!name)
        {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=> {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => 
            {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }));
            });
        })
        .catch((error)=> alert(error));
    };

  return (
    <div className='login'>
         <h2>You're not logged in</h2>  
         <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" /> 

    <form>
        <input value={name} onChange={e=> setName(e.target.value)} type="text" placeholder=" type full name"/>

        <input value={profilePic} onChange={e=> setProfilePic(e.target.value)} type="text" placeholder=" Insert photo url"/>

        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder=" abc@hotmail.com"/>

        <input value={password} onChange= {e =>setPassword(e.target.value)} type="password" placeholder=" Password"/>

        <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>

    <p>Not a member?{" "}
        <span className='login__register' onClick={register}>Register Nowww</span>
    </p>
    </div>
  )
}

export default Login