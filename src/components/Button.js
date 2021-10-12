import React from 'react'

const Button = ({color, children, type, extraClass, ...props}) => {
  return (
    <button type={type || "button"} className={`btn btn-${color} ${extraClass}`} {...props}>{children}</button>
  )
}

export default Button
