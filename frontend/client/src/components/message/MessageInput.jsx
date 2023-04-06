import React, { useRef, useState } from 'react'
import IconButton from '../common/IconButton';
import { BiHappy } from 'react-icons/bi'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { MdSend } from 'react-icons/md'
import { BsFillMicFill } from 'react-icons/bs'

const MessageInput = () => {
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  return (
    
    <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">

        <input
        type="text"
        placeholder="Type a something"
        className="bg-[#2c3943] rounded-lg outline-none 
        text-sm text-neutral-200 w-4/5 h-full px-3 placeholder:text-sm 
        placeholder:text-[#8796a1]"
        onChange={handleInputChange}
        ref={inputRef}
        />

        <span className="ml-2">
        {typing ? (
            <IconButton icon={<MdSend />} />
        ) : (
            <IconButton icon={<BsFillMicFill />} />
        )}
        </span>
  </div>
  )
}

export default MessageInput