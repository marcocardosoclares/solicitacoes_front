import React from 'react'

const useForm = () => { //type

  const [value,setValue] = React.useState('');

  function onChange({target}) {
    // if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
  }
}

export default useForm
