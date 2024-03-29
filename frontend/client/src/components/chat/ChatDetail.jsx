import React, { useCallback } from 'react'
import { chatsToUse } from '../../contexts/ChatsContext';
import AvatarProfile from '../profile/AvatarProfile';
import { MdSearch } from "react-icons/md";
import { HiDotsVertical } from 'react-icons/hi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import IconButton from '../common/IconButton';
import MessageSection from '../message/MessageSection';
import useMobileVisibility from '../../hooks/useMobileVisibility';
import { mobileBreakpoint } from '../../utils/customBreakPoints';
import { showChatDetailToUse } from '../../contexts/MobileContext';
import MessageInput from '../message/MessageInput';

const ChatDetail = () => {
  const isMobile = useMobileVisibility(mobileBreakpoint);
  const { saveChatClicked } = showChatDetailToUse();
  const { getCurrentChat } = chatsToUse();
  const current = getCurrentChat()

  const handleSaveChatClicked = useCallback(
    () => {
      saveChatClicked(false)
    },
    [saveChatClicked]
  );
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between bg-[#f0f2f5] dark:bg-[#202d33] min-h-[60px] max-h-[60px] p-3">
        {
          current.destinatary && 
          (
            <div className="flex items-center">
              <div className={`${isMobile ? "hidden" : "sm:block"}`}>
                <IconButton onDoClick={handleSaveChatClicked} icon={<AiOutlineArrowLeft />} />
              </div>
              {/* Profile avatar */}
              <AvatarProfile destinatary={current.destinatary}/>

              {/* Profile preview */}
              <div className="flex flex-col">
                {/* Destinatary */}
                <h3 className="text-[#54656f] dark:text-white font-medium">{current.destinatary}</h3>

                {/* Status */}
                <p className="text-[#54656f] dark:text-[#8796a1] text-xs">online</p>
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

      <MessageSection />

      <MessageInput />

    </div>
  )
}

export default ChatDetail