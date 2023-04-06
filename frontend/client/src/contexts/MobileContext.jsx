import React, { createContext, useContext, useState } from 'react';

const MobileContext = createContext();

const MobileProvider = ({ children }) => {
  const [showChatDetail, setShowChatDetail] = useState(false);
  const [chatClicked, setChatClicked] = useState(false);

  const saveShowChatDetail = (isShowChatDetail) => {
    setShowChatDetail(isShowChatDetail);
  };

  const getShowChatDetail = () => {
    return showChatDetail;
  };

  const saveChatClicked = (isChatClicked) => {
    setChatClicked(isChatClicked);
  };

  const getChatClicked = () => {
    return chatClicked;
  };

  return (
    <MobileContext.Provider value={{ saveShowChatDetail, getShowChatDetail, saveChatClicked, getChatClicked }}>
      {children}
    </MobileContext.Provider>
  );
};

const showChatDetailToUse = () => {
  const { saveShowChatDetail, getShowChatDetail, saveChatClicked, getChatClicked } = useContext(MobileContext);

  return { saveShowChatDetail, getShowChatDetail, saveChatClicked, getChatClicked } ;
};

export { MobileProvider, showChatDetailToUse };