import React from 'react'

const Loading = ({content}) => {
  return (
    <>
    {content && <span>{content}</span>}
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    </>
  )
}

export default Loading
