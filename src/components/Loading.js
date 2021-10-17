import React from 'react'

const Loading = ({content}) => {
  return (
    <>
    {content && <span className="text-muted">{content} </span>}
    <span className="spinner-border spinner-border-sm text-muted" role="status" aria-hidden="true"></span>
    </>
  )
}

export default Loading
