import React from 'react'

const FormTextarea = ({label, name, getvalue, ...props}) => {

  const [value, setValue] = React.useState(getvalue || '')

  function handleChange({target}) {
    setValue(target.value);
  }

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <textarea className="form-control" id={name} name={name} rows="3" value={value} onChange={handleChange} {...props} />
    </div>
  )
}

export default FormTextarea
