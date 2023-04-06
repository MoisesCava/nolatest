import React, { useEffect, useState } from 'react'
import {user as defaultPhoto} from '../../assets'
import IconButton from '../common/IconButton'
import { TiGroup } from 'react-icons/ti'
import { TbCircleDashed } from 'react-icons/tb'
import { HiDotsVertical } from 'react-icons/hi'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import ChatFilter from './ChatFilter'
import useMobileVisibility from '../../hooks/useMobileVisibility'
import ChatCardList from './ChatCardList'
import { chatsToUse } from '../../contexts/ChatsContext'
import fetchChats from '../../services/chatService';
import { mobileBreakpoint } from '../../utils/customBreakPoints'
import { profileToUse } from '../../contexts/ProfileContext'

const ChatList = ({onProfile}) => {
  const [filter, setFilter] = useState(false);
  
  const isMobile = useMobileVisibility(mobileBreakpoint);

  const [filterChats, setFilterChats] = useState([])

  const { saveChats, getChats } = chatsToUse();

  const { profile } = profileToUse();

  useEffect(() => {
      const doFecthChats = async () => {
        const data = await fetchChats();
        saveChats(data)
      };
      doFecthChats();
  }, []);

  const chats = getChats();

  

  const handleFilter = (destinatary) => {
    if (destinatary === "") {
      setFilterChats([]);
    } else {
      const filteredChats = chats.filter((chat) => chat.destinaraty.toLowerCase().includes(destinatary.toLowerCase()));
      setFilterChats(filteredChats);
    }

    if(filter && filterChats.length)
      setFilterChats([]);


    setFilter(!filter)
  }

  return (
    <div id="main-list" className="flex flex-col border-r border-zinc-700 w-full h-screen">
      {/* profile */}
      <div className="flex justify-between items-center bg-[#202c33] h-[60px] p-3">
        {/* photo */}
        {/* Atribyendo al autor de la foto por defecto <a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Pixel perfect - Flaticon</a> */}
        <div className="flex items-center">
          <img src={defaultPhoto} alt="user-photo" className="rounded-full w-[40px]" onClick={onProfile}/>
          <div className="pl-6">
            <h4 className="text-white font-medium">{profile.username}</h4>
          </div>
        </div>

        {/* options */}
        <div className="flex justify-end w-[175px] sm:justify-between">
          <IconButton hiddeIcon={true} icon={<TiGroup />}/>
          <IconButton hiddeIcon={true} icon={<TbCircleDashed/>}/>
          <IconButton hiddeIcon={true} icon={<BsFillChatLeftTextFill/>}/>
          <IconButton icon={<HiDotsVertical/>}/>
        </div>
      </div>
      {/* search bar*/}
      <div>
        <div className={`${
          isMobile ? 
          "flex justify-between items-center h-[60px] p-2" 
          : 
          "hidden sm:block"}`
          }>
          {/* Search input */}
            <ChatFilter filter={filter} onFilter={handleFilter}/>
        </div>
      </div>
      {/* list of chats */}
      <ChatCardList chats={filterChats.length ? filterChats : chats}/>
    </div>
  )
}

export default ChatList