import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import WorkIcon from '@material-ui/icons/Work';
import HeaderOption from './HeaderOption';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';


function Header() {


   const dispatch =useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return ( 
        <div className='Header'>
            
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />

                <div className="header_search">
                <SearchIcon/>  
                <input type="text" />
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={PeopleIcon} title='MyNetwork'/>
                <HeaderOption Icon={WorkIcon} title='Job' />
                <HeaderOption Icon={MessageIcon} title='Messages'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                
                <HeaderOption avatar={true} title="Logout"
                onClick={logoutOfApp}/>
            </div>

        </div>
    );
}

export default Header;