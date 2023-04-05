import React from 'react'
import { chatsToUse } from '../../contexts/ChatsContext';

const ChatDetail = () => {
  const { getCurrentChat } = chatsToUse();
  const current = getCurrentChat()
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">

      </div>
    </div>
  )
}

export default ChatDetail