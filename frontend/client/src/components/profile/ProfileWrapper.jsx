import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaSave } from 'react-icons/fa'
import IconButton from '../common/IconButton'
import ProfileForm from './ProfileForm'
import { updateConfig } from '../../services/profileService'
import { profileToUse } from '../../contexts/ProfileContext'

const ProfileWrapper = ({onProfile}) => {

  const { updateProfile, profile } = profileToUse();
  const [name, setName] = useState(profile.username || "");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleUpdateProfile = async () => {
    const newProfile = {
      "username": name ? name : profile.username,
      "photo": ""
    }
    updateProfile(newProfile);
    const response = await updateConfig(newProfile);

    onProfile();
  }

  return (
    <div className="flex flex-col h-screen w-screen">
        <div className="flex justify-between bg-[#202d33] h-[65px] p-3">
          <div className="flex items-center">
            <div className="pr-2">
              <IconButton onDoClick={onProfile} icon={<AiOutlineArrowLeft />} />
            </div>
            <div >
              {/* Profilename */}
              <h3 className="text-white font-medium">Profile</h3>
            </div>
          </div>
          <div className="flex justify-center items-center w-[85px]">
            <IconButton icon={<FaSave/>} onDoClick={handleUpdateProfile}/>
          </div>
        </div>
        <ProfileForm
          name={name}
          photo={profile.photo}
          handleInputChange={handleInputChange}
        />
    </div>
  )
}

export default ProfileWrapper;