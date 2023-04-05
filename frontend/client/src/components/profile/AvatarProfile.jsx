import React from 'react';
import randomcolor from 'randomcolor';

const AvatarProfile = ({ destinatary }) => {
  const color = randomcolor();
  const initials = destinatary.slice(0, 2).toUpperCase();

  return (
    <div
      className="w-[40px] h-[40px] 
      mr-5 rounded-full flex items-center 
      justify-center"
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-bold text-lg">{initials}</span>
    </div>
  );
};

export default AvatarProfile;