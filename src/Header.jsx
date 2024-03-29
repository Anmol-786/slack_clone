import React from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from './StateProvider';
import './header.css'


const Header = ()=>{
    const [ {user} ] = useStateValue();
    return(
        <>
        <div className="header">
            <div className="header_left">
                <IconButton><Avatar
                    className="header_avatar"
                    src={user?.photoURL}
                    alt = {user?.displayName}
                />
                </IconButton>
                <AccessTimeIcon/>
            </div>
            <div className="header_search">
                <SearchIcon/>
                <input placeholder="Search" />
            </div>
            <div className="header_right">
                <HelpOutlineIcon/>
            </div>
        </div>
        </>
    )
}
export default Header;