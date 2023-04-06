import React, { useEffect, useState } from 'react'
import ChatList from '../components/chat/ChatList'
import ChatDetail from '../components/chat/ChatDetail'
import { mobileBreakpoint } from '../utils/customBreakPoints';
import useMobileVisibility from '../hooks/useMobileVisibility';
import { showChatDetailToUse } from '../contexts/MobileContext';
import ProfileWrapper from '../components/profile/ProfileWrapper';


const MainWrapper = () => {
  const [showProfile, setShowProfile] = useState(false)
  const isMobile = useMobileVisibility(mobileBreakpoint);
  const { saveShowChatDetail, getShowChatDetail, getChatClicked } = showChatDetailToUse();
  const showChatDetail = getShowChatDetail();
  const chatClicked = getChatClicked();

  useEffect(() => {
    saveShowChatDetail(isMobile);
  }, [isMobile, showChatDetail, saveShowChatDetail]);

  const handleShowProfile = () => {
    setShowProfile(!showProfile)
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
        <div className="h-screen flex justify-start bg-[#111b21]">
          {
            showProfile ? 
            <ProfileWrapper onProfile={handleShowProfile}/>
            :
            <>
              <div className={`w-full h-full max-w-[640px] 
             bg-[#111b21]
              ${!isMobile && chatClicked ? "hidden" : "sm:block"}
              `}>
                <ChatList onProfile={handleShowProfile}/>
              </div>
              <div className={`w-full h-full min-w-[420px] max-w-[1500px]
             bg-[#0b141a] 
             ${!isMobile && !chatClicked ? "hidden" : "sm:block"}
              `}>
                <ChatDetail />
              </div>
            </>
          }
        </div>
    </div>
  )
}

export default MainWrapper