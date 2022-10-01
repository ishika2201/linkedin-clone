import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"; 
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser);


const recentItem = (topic)=> (
    <div className="sidebar_recentItem">
        <p><span className='sidebar_hash'>#</span>
        {topic}</p>
    </div>
)

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img className="coverpic" src="https://envoy.com/wp-content/uploads/2021/02/Blog-feature-What-is-workplace-experience..png" alt="" />
            <Avatar src={user.photoUrl} className='sidebar_avatar'>
                 {user.displayName[0]} </Avatar>

            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed your profile</p>
                <p className='sidebar_statNumber'>2500</p>
            </div>
            <div className="sidebar_stat">
                <p>Connections</p>
                <p className='sidebar_statNumber'>138</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p className='recent'>Recent</p>
            {recentItem('yashloser')}
            {recentItem('geyseron')}
            {recentItem('pubg')}
            {recentItem('bjp')}
            {recentItem('prettycool')}
        </div>

    </div>
  )
}

export default Sidebar;