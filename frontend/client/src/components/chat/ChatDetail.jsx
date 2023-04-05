import React from 'react'
import { chatsToUse } from '../../contexts/ChatsContext';
import AvatarProfile from '../profile/AvatarProfile';
import { MdSearch } from "react-icons/md";
import { HiDotsVertical } from 'react-icons/hi'
import IconButton from '../common/IconButton';

const ChatDetail = () => {
  const { getCurrentChat } = chatsToUse();
  const current = getCurrentChat()
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
        {
          current.destinatary && 
          (
            <div className="flex items-center">
              {/* Profile avatar */}
              <AvatarProfile destinatary={current.destinatary}/>

              {/* Profile preview */}
              <div className="flex flex-col">
                {/* Destinatary */}
                <h3 className="text-white font-medium">{current.destinatary}</h3>

                {/* Status */}
                <p className="text-[#8796a1] text-xs">online</p>
              </div>
            </div>
          )
        }

        {/* Chat options*/}
        {
          current.destinatary && 
          (
            <div className="flex justify-between items-center w-[85px]">
              <IconButton icon={<MdSearch />} />
              <IconButton icon={<HiDotsVertical />} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ChatDetail