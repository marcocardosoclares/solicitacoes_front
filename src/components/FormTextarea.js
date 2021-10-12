import React from 'react'

const FormTextarea = ({label, name, setValue, ...props}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <textarea className="form-control" id={name} name={name} rows="3" {...props} />
    </div>
  )
}

export default FormTextarea
