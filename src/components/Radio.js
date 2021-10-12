import React from 'react'

const Radio = ({name,id,label,resposta, ...props}) => {
  const checked = +resposta === props.value ? true : false;
  const defaultAttributes = {"className":"form-check-input", "type":"radio", name, id};
  return (
    <div className="form-check">
      {checked 
        ? <input {...defaultAttributes} defaultChecked {...props} />
        : <input {...defaultAttributes} {...props} />
      }
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio
