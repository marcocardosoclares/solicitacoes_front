import React from 'react'

const FormInput = ({type, label, name, colSize, getvalue, marginZero, ...props}) => {

  const [value, setValue] = React.useState(getvalue || '')

  function handleChange({target}) {
    setValue(target.value);
  }

  return (
    <div className={`${colSize ? colSize : ''} col-12 ${!marginZero && "mb-3"}`}>
      {!marginZero && <label htmlFor={name} className="form-label">{label}</label>}
      <input type={type || "text"} className="form-control" id={name} name={name} value={value} onChange={handleChange} {...props} />
    </div>
  )
}

export default FormInput
