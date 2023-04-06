import React, { useEffect } from 'react'
import ChatCard from './ChatCard';

const ChatCardList = ({chats}) => {

    return (
        <div className="flex flex-col overflow-y-scroll cursor-pointer h-full">
        {/* Chat cards */}
        {chats.map((chat) => {
            return <ChatCard key={chat.chatId} destinatary={chat.destinaraty} date={chat.lastMessage}/>
        })}
        </div>
    )
}

export default ChatCardList;