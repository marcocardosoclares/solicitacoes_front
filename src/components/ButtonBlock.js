import React from 'react'

const ButtonBlock = ({children, color, extraClass, ...props}) => {
  return (
    <div className="d-grid">
      <button className={`btn btn-${color} ${extraClass}`} {...props}>{children}</button>
    </div>
  )
}

export default ButtonBlock
