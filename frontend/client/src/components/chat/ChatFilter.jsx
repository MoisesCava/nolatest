import React, { useState } from 'react'
import { BiFilter } from "react-icons/bi";

const ChatFilter = ({filter, onFilter}) => {
  const [destinatary, setDestinatary] = useState("");

  const handleInputChange = (e) => {
    setDestinatary(e.target.value);
  };


  return (
    <React.Fragment>
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="rounded-lg bg-[#f0f2f5] dark:bg-[#202d33] 
          text-[#8796a1] text-sm font-light 
          outline-none px-4 py-2 w-[500px] 
          h-[35px] placeholder:text-[#8796a1] 
          placeholder:text-sm placeholder:font-light"
          value={destinatary}
          onChange={handleInputChange}
        />

        {/* Filter button */}
        <button
          className={`text-2xl m-2 p-1 rounded-full 
          outline-none 
          ${
            filter
              ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
              : " text-[#54656f] dark:text-[#8796a1] dark:bg-[#111b21] hover:bg-[#f0f2f5] dark:hover:bg-[#3c454c]"
          }`}
          onClick={() => onFilter(destinatary)}
        >
          <BiFilter />
        </button>
    </React.Fragment>
  )
}

export default ChatFilter