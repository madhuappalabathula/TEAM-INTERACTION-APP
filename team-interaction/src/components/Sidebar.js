import db from './firebase';
import React, { useState ,useEffect} from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAlticon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandlessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';




function Sidebar() {
const [channels,setChannels]=useState([]);

useEffect(()=>{
  db.collection('room').onSnapshot((snapshot) =>
    setChannels(
      snapshot.docs.map(doc =>({
        id:doc.id,
        name:doc.data().name
      }))
    )
  )
})


  return (
    <div className='sidebar'>
     <div className='sidebar_header'>
      <div className='sidebar_info'>
      <h2>Team Interaction</h2>
      <h3>
        <FiberManualRecordIcon/>
        MADHU
      </h3>
      </div>
      <CreateIcon/>
    </div>  
    <SidebarOption Icon={InsertCommentIcon} title={"Thread"} />     
    <SidebarOption Icon={InboxIcon} title={"Mentions & Reactions"}/>
    <SidebarOption Icon={DraftsIcon}title={"Saved Items"}/>
    <SidebarOption Icon={BookmarkBorderIcon}title={"Channel browser"}/>
    <SidebarOption Icon={PeopleAlticon}title={"People & user groups"}/>
    <SidebarOption Icon={AppsIcon}title={"Apps"}/>
    <SidebarOption Icon={FileCopyIcon}title={"File browser"}/>
    <SidebarOption Icon={ExpandlessIcon}title={"Show less"}/>
    <hr/>
    <SidebarOption Icon={ExpandMoreIcon}title={"channels"}/>
    <hr/>
    <SidebarOption Icon={AddIcon}title={"Add Channels" } addChannelOption/>
    {channels.map((channel)=>(
     <SidebarOption title={channel.name}id={channel.id}/>
    ))}
    </div>
  )
}

export default Sidebar