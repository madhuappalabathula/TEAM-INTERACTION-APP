import React from 'react';
import "./SidebarOption.css";
import {useNavigate} from 'react-router-dom';
import db from './firebase';

function SidebarOption({Icon,title,id,addChannelOption}) {

  const history=useNavigate();
  const selectChannel=()=>{
    if (id){
      history.replace('/room/${id')
    }
    else{
      history.push(title)
    }
  }
  const addChannel=()=>{
    const channelName =prompt("please enter channel name ")
    if (channelName){
      db.collection('room').add({
        name:channelName
      })
    }
  }

    return (
    <div className='sidebaroption' onClick={addChannelOption ?addChannel:selectChannel} >

    {Icon&&<Icon className="sidebaroption__icon"/>}
    {Icon ?(<h3>{title}</h3>):
    (
        <h3>
           < span className="sidebaroption__hash">#</span>{title}{" "}
        </h3>
    )}
    </div>
  )
}

export default SidebarOption