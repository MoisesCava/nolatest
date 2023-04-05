import React from 'react'
import ChatList from '../components/ChatList'
import ChatDetail from '../components/ChatDetail'

const MainWrapper = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
        <div className="h-screen flex justify-start bg-[#111b21]">
            <div className="w-full h-full min-w-[330px] max-w-[520px] bg-[#111b21]">
                <ChatList />
            </div>
            <div className="w-full h-full min-w-[420px] max-w-[1500px] bg-[#202c33] hidden md:block">
                <ChatDetail />
            </div>
        </div>
    </div>
  )
}

export default MainWrapper