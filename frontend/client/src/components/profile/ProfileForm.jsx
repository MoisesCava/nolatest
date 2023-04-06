import React from 'react'
import {user as defaultPhoto} from '../../assets'

const ProfileForm = ({name, photo, handleInputChange, handleImageChange}) => {

    return (
        <div
        className="bg-[#0a131a] bg-contain overflow-hidden h-full"
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
                <div className="bg-[#202c33] w-full h-[70px]">
                    <div className="flex flex-col justify-center items-start pl-7 h-full">
                        <span className="text-white font-bold text-sm">Your name</span>
                        <input
                        type="text"
                        placeholder="Name"
                        className="rounded-lg bg-[#202d33] 
                        text-[#8796a1] text-sm font-light 
                        outline-none px-4 py-2 w-[500px] 
                        h-[35px] placeholder:text-[#8796a1] 
                        placeholder:text-sm placeholder:font-light"
                        value={name}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileForm