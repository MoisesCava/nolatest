import React from 'react'
import {bgDark} from '../../assets'

const MessageSection = () => {
  return (
    <div
    className="bg-[#0a131a] bg-contain overflow-y-scroll h-full"
    style={{ 
        padding: "12px 7%",
        backgroundImage: `url(${bgDark})`,
    }}
    >
        hola
  </div>
  )
}

export default MessageSection