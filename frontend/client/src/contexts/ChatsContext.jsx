import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);

  const saveChats = (data) => {
    setChats(data);
  };

  const getChats = () => {
    return chats;
  };

  return (
    <ChatContext.Provider value={{ saveChats, getChats }}>
      {children}
    </ChatContext.Provider>
  );
};

const chatsToUse = () => {
  const { saveChats, getChats } = useContext(ChatContext);

  return { saveChats, getChats };
};

export { ChatProvider, chatsToUse };