import React from 'react'

const alertIcons = {
  "success" : "check",
  "info" : "info",
  "warning" : "exclamation",
  "danger" : "x",
}

const Error = ({content, theme = "danger"}) => {
  return (
    <div className={`alert alert-${theme} py-1`} role="alert">
      <i className={`bi bi-${alertIcons[theme]}-circle fs-5`}></i> {content}
    </div>
  )
}

export default Error
