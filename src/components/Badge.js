import React from 'react'

const Badge = ({content, bgColor}) => {
  return (
    <span className={`badge bg-${bgColor}`}>{content}</span>
  )
}

export default Badge
