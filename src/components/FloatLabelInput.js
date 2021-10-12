import React from 'react'

const FloatLabelInput = ({type, name, placeholder, label, setValue, ...props}) => {
  return (
    <div className="form-floating mb-3">
      <input type={type} className="form-control" id={name} name={name} placeholder={placeholder} {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default FloatLabelInput
