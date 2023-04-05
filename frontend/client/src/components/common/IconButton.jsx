import React from 'react'

const IconButton = ({icon, onDoClick, hiddeIcon = false}) => {
  return (
    <button 
    className={`
    text-[#aebac1] text-xl p-2 rounded-full bg-transparent 
    focus:outline-none ${hiddeIcon ? 'sm:block hidden' : ''}`}
    onClick={onDoClick}
    >
      {icon}
    </button>
  )
}

export default IconButton