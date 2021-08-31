import React from 'react'
import {MdChatBubbleOutline} from "react-icons/md"
import Button from './Reusables/Button/Button'



const ChatSection = () => {
    return (
        <div className="chat-section" style={{backgroundColor: '#1C2A34', margin: '0', width: '100%', textAlign: 'center'}}>
            
                <h1>What are you working on?</h1>
                <p>Let’s have a conversation! I’d love to hear about what you’re <br/> working on and find a way to work together.</p>
                <p><Button className="chat-button" style={{backgroundColor: '#83F9A2', color: '#111A20', border: 'none', fontWeight: '800'}} logo={<MdChatBubbleOutline color="#111A20"/>} title="Chat"/></p>
            
        </div>
    )
}

export default ChatSection
