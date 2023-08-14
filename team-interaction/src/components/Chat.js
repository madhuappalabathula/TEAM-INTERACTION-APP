import React from 'react';
import "./Chat.css";
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Chat() {
    const {roomId}=useParams();
  return (
    <div className='chat'>
        <h2>{roomId}</h2>
        <div className='chat_header'>
          <div className='chat_headerLeft'>
            <h4 className='chat_channelName'>
              <strong>
                #Genaral
                <StarBorderOutlinedIcon/>
              </strong>
            </h4>
          </div>
          <div className='chat_headerRight'>
            <p>
              <InfoOutlinedIcon/>Details
            </p>
          </div>

        </div>

    </div>
  )
}

export default Chat