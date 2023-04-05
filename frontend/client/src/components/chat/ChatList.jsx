import React from 'react'
import {user as defaultPhoto} from '../../assets'
import IconButton from '../common/IconButton'
import { TiGroup } from 'react-icons/ti'
import { TbCircleDashed } from 'react-icons/tb'
import { HiDotsVertical } from 'react-icons/hi'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import ChatFilter from './ChatFilter'
import useMobileVisibility from '../../hooks/useMobileVisibility'

const ChatList = () => {
  
  const isMobile = useMobileVisibility(640);

  return (
    <div id="main-list" className="flex flex-col border-r border-zinc-700 w-100 h-screen">
      {/* profile */}
      <div className="flex justify-between items-center bg-[#202c33] h-[60px] p-3">
        {/* photo */}
        {/* Atribyendo al autor de la foto por defecto <a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Pixel perfect - Flaticon</a> */}
        <img src={defaultPhoto} alt="user-photo" className="rounded-full w-[40px]"/>

        {/* options */}
        <div className="flex justify-end w-[175px] sm:justify-between">
          <IconButton hiddeIcon={true} icon={<TiGroup />}/>
          <IconButton hiddeIcon={true} icon={<TbCircleDashed/>}/>
          <IconButton hiddeIcon={true} icon={<BsFillChatLeftTextFill/>}/>
          <IconButton icon={<HiDotsVertical/>}/>
        </div>
      </div>
      {/* search */}
      <div>
        <div className={`${isMobile ? "flex justify-between items-center h-[60px] p-2" : "hidden sm:block"}`}>
          {/* Search input */}
            <ChatFilter />
        </div>
      </div>
      {/* list of chats */}
    </div>
  )
}

export default ChatList