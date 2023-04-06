import React, { createContext , useContext, useState } from 'react';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    username: '',
    photo: '',
  });

  const updateProfile = (profile) => {
    setProfile(profile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const profileToUse = () => {
  const { profile, updateProfile } = useContext(ProfileContext);

  return { profile, updateProfile } ;
};

export {ProfileProvider, profileToUse}
