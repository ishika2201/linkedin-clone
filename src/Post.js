import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import "./InputOption";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import InputOption from './InputOption';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar src={photoUrl}> {name[3]} </Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpIcon} title="Like"/>
            <InputOption Icon={ChatBubbleIcon} title="Comment"/>
            <InputOption Icon={ShareIcon} title="Share"/>
            <InputOption Icon={SendIcon} title="Send"/>
        </div>
        
    </div>
  )
}

export default Post