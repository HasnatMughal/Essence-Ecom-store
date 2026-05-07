import React from 'react'

function Input({
  type,className, placeholder , value, onChangeFn, name,
}) {
  return (
    <>
    <input type={type} onChange={onChangeFn} value={value} placeholder={placeholder} name={name} className={`${className}  w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500`} />
    </>
  )
}

export default Input