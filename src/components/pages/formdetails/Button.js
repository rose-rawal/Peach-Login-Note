import React from 'react'

const Button = ({name,handle}) => {
  
  return (
      <div className='set not_Center'><button className='bg-black text-white p-2 rounded-3xl mt-5 mb-3' onClick={handle}>{name}</button></div>
  )
}

export default Button
