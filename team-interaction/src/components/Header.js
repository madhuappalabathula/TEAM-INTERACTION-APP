import React from 'react';
import './Header.css';
import {Avatar} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <Avatar 
            className="header_avatar"
            alt=''
            src=''
            />
            <AccessTimeIcon/>
            {/*Avatar for logged in user*/}
            {/*time icon*/}
        </div>
        <div className='header_search'>
            <SearchIcon/>
            <input placeholder="serch something here"/>
            {/*Serach icon*/}
            {/*input*/}
        </div>
        <div className='header_right'>
            <HelpOutlineIcon/>
            {/*help icon*/}
        </div>

    </div>
  )
}

export default Header