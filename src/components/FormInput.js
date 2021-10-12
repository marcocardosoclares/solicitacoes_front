import React from 'react'

const FormInput = ({type, label, name, value, setValue, onChange, colSize, marginZero, ...props}) => {
  return (
    <div className={`${colSize ? colSize : ''} col-12 ${!marginZero && "mb-3"}`}>
      {!marginZero && <label htmlFor={name} className="form-label">{label}</label>}
      <input type={type} className="form-control" id={name} name={name} value={value} onChange={onChange} {...props} />
    </div>
  )
}

export default FormInput
