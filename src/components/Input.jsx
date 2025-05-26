import React from 'react'

const Input = ({id,label,type,placeholder,}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder}/>
    </div>
  )
}

export default Input
