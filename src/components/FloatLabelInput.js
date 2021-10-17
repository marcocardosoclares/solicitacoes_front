import React from 'react'

const FloatLabelInput = ({type, name, placeholder, label, defaultValue, ...props}) => {

  const [value, setValue] = React.useState(defaultValue || '')

  function handleChange({target}) {
    setValue(target.value);
  }

  return (
    <div className="form-floating mb-3">
      <input type={type} className="form-control" id={name} name={name} value={value} onChange={handleChange} placeholder={placeholder} {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default FloatLabelInput
