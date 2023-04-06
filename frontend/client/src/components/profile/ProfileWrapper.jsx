import React, { Children } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaSave } from 'react-icons/fa'
import IconButton from '../common/IconButton'
import ProfileForm from './ProfileForm'

const ProfileWrapper = ({onProfile}) => {
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
            <IconButton icon={<FaSave/>}/>
          </div>
        </div>
        <ProfileForm/>
    </div>
  )
}

export default ProfileWrapper;