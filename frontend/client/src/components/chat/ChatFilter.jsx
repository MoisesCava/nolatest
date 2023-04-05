import React from 'react'
import { BiFilter } from "react-icons/bi";

const ChatFilter = () => {
  return (
    <React.Fragment>
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="rounded-lg bg-[#202d33] 
          text-[#8796a1] text-sm font-light 
          outline-none px-4 py-2 w-[500px] 
          h-[35px] placeholder:text-[#8796a1] 
          placeholder:text-sm placeholder:font-light"
        />

        {/* Filter button */}
        <button
          className="text-2xl m-2 p-1 rounded-full 
          text-[#8796a1] hover:bg-[#3c454c]
          bg-transparent focus:outline-none"
          onClick={() => {}}
        >
          <BiFilter />
        </button>
    </React.Fragment>
  )
}

export default ChatFilter