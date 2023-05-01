import React from 'react'

const Button = ({name,handle}) => {
  
  return (
      <button className='bg-black text-white p-2 rounded-3xl ml-10 mt-5' onClick={handle}>{name}</button>
  )
}

export default Button
