import React from "react";
import AvatarProfile from "../profile/AvatarProfile";
import formatDate from "../../utils/formatDate";

function ChatCard({ destinatary, date }) {
  return (
    <div
      className="flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33]"
    >
        {/* Profile avatar */}
        <AvatarProfile destinatary={destinatary}/>
    
        {/* Chat preview */}
        <div className="flex justify-between border-t border-zinc-700 flex-grow py-3">
            
            <div className="flex flex-col justify-between flex-grow text-white">
                {/* Destinatary name */}
                <h2 className="font-medium mb-1">{destinatary}</h2>

                {/* Message */}
                <p className="text-sm text-neutral-400">
                    Lorem ipsum dolor sit amet, consectetur.
                </p>
            </div>

            {/* Time and number of messages*/}
            <div className="flex flex-col justify-between items-end h-100 text-xs">
                {/* Time */}
                <p className="text-emerald-500 min-w-[55px]">{formatDate(date)}</p>
            </div>
        </div>
    
    </div>
  );
}

export default ChatCard;