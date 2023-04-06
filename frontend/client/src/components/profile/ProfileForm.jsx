import React, { useEffect, useState } from 'react'
import {user as defaultPhoto} from '../../assets'
import { BiSun } from 'react-icons/bi'
import { BiMoon } from 'react-icons/bi'
import IconButton from '../common/IconButton'
import useDarkMode from '../../hooks/useDarkMode'

const ProfileForm = ({name, photo, handleInputChange, handleImageChange}) => {
    const { isDarkMode, toggleTheme } = useDarkMode();

    return (
        <div
        className="bg-[#f0f2f5] dark:bg-[#0a131a] bg-contain overflow-hidden h-full"
        >
            <div 
            className="h-screen flex flex-col 
            items-center justify-start
            pt-10
            space-y-6
            ">
                {/* Profile photo */}
                <label htmlFor="profile-photo">
                    <img 
                    src={photo ? photo : defaultPhoto} 
                    alt="user-photo" className="rounded-full w-[150px] h-[150px]" 
                    />
                </label>
                <input type="file" id="profile-photo" 
                    onChange={handleImageChange} style={{display: 'none'}} 
                    accept="image/png, image/jpeg"
                />
            
                {/*Name input*/}
                <div className="bg-white dark:bg-[#202c33] w-full h-[70px]">
                    <div className="flex flex-col justify-center items-start pl-7 h-full">
                        <span className="text-[#54656f] dark:text-white font-bold text-sm">Your name</span>
                        <input
                        type="text"
                        placeholder="Name"
                        className="rounded-lg bg-white dark:bg-[#202d33] 
                        dark:text-[#8796a1] text-sm font-light 
                        text-[#54656f]
                        outline-none px-4 py-2 w-full 
                        h-[35px] placeholder:text-[#8796a1] 
                        placeholder:text-sm placeholder:font-light"
                        value={name}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Switch theme */}
                {
                    isDarkMode?
                    <>
                        <span className="text-white font-bold text-sm">Change to light mode</span>
                        <IconButton icon={<BiSun/>} onDoClick={toggleTheme}/>
                    </>
                    
                    :
                    <>
                        <span className="text-[#54656f] font-bold text-sm">Change to dark mode</span>
                        <IconButton icon={<BiMoon/>} onDoClick={toggleTheme}/>
                    </>
                }
            
            </div>
        </div>
    )
}

export default ProfileForm