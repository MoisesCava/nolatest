import React, { createContext, useState, useEffect } from "react";

const ProfileContext = createContext({
  name: "",
  photo: "",
  theme: false,
  setName: () => {},
  setPhoto: () => {},
  setTheme: () => {},
});

const ProfileProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));

    if (profile) {
      setName(profile.name);
      setPhoto(profile.photo);
      setTheme(profile.theme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "profile",
      JSON.stringify({ name: name, photo: photo, theme: theme })
    );
  }, [name, photo, theme]);

  return (
    <ProfileContext.Provider
      value={{ name, photo, theme, setName, setPhoto, setTheme }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };