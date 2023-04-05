import React from 'react'
import ChatList from '../components/chat/ChatList'
import ChatDetail from '../components/chat/ChatDetail'


const MainWrapper = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
        <div className="h-screen flex justify-start bg-[#111b21]">
            <div className={`w-full h-full max-w-[640px] 

            bg-[#111b21]`}>
                <ChatList />
            </div>
            <div className="w-full h-full min-w-[420px] max-w-[1500px]
             bg-[#0b141a] sm:block hidden">
                <ChatDetail />
            </div>
        </div>
    </div>
  )
}

export default MainWrapper