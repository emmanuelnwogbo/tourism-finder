import React from 'react';

import '../scss/components/form.scss';

const Input = (props) => {
  return (
    <div className={'form__area'}>
      <input className={'form__area--input'}/>
    </div>
  )
}

const Form = ({ inputs, btnLabel }) => {
  const renderInputs = () => {
    return inputs.map(input => {
      return <Input key={input}/>
    })
  }

  return (
    <div className={'form'}>
      {renderInputs()}
      <span>{btnLabel}</span>
    </div>
  )
}

export default Form;