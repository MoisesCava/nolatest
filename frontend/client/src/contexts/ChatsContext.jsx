import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState({});

  const saveChats = (data) => {
    setChats(data);
  };

  const getChats = () => {
    return chats;
  };

  const saveCurrentChat = (newCurrentChat) => {
    setCurrentChat(newCurrentChat);
  }

  const getCurrentChat = () => {
    return currentChat
  }

  return (
    <ChatContext.Provider value={{ saveChats, getChats, saveCurrentChat, getCurrentChat }}>
      {children}
    </ChatContext.Provider>
  );
};

const chatsToUse = () => {
  const { saveChats, getChats, saveCurrentChat, getCurrentChat } = useContext(ChatContext);

  return { saveChats, getChats, saveCurrentChat, getCurrentChat } ;
};

export { ChatProvider, chatsToUse };