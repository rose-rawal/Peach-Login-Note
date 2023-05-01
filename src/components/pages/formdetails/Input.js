import React, { useContext, useState } from 'react'


const Input = ({
    name,type,func,set
}) => {
  const [abc,setAbc]=useState('0');
  return (
    <div className='pl-5 margin-auto pt-2 w-96'>
    <label htmlFor={name} className='pr-5'>{name}</label>
    <input type={type} id={name} value={func} 
    onChange={(e)=>{ 
      setAbc(e.target.value);
       set((prev)=>{return {...prev, [name]: e.target.value}});
        }} 
        className='border-black border-2 rounded-lg float-right'/>
    </div>
  )
}

export default Input
