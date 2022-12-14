import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({avatar, Icon, title, onClick}) {
    const user= useSelector(selectUser);
    return ( 
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className='headerOption_icon'/>}
            {avatar && (
            <Avatar className="headerOption__icon"/>

            )}

            <h6 className='headerOption_title'>{title}</h6>
            
        </div>
    );
}

export default HeaderOption;