import React from 'react'
import { bgDark, bgLight } from '../../assets'

const MessageSection = () => {
  return (
    <div
      className={`bg-contain overflow-y-scroll h-full ${
        localStorage.getItem('theme') === 'dark' ? 'bg-dark' : 'bg-light'
      }`}
      style={{ backgroundImage: `url(${localStorage.getItem('theme') === 'dark' ? bgDark : bgLight})` }}
    >
      <div style={{ padding: '12px 7%' }} />
    </div>
  )
}

export default MessageSection