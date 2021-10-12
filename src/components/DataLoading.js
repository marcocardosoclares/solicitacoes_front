import React from 'react'

const DataLoading = ({text = "Carregando dados... "}) => {
  return (
    <div className="text-center text-muted mt-5 animeLeft">
      {text}
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default DataLoading
