import React from 'react'

const Input = ({
    name,type,func,set
}) => {
 
 
  return (
    <div className='pl-5 margin-auto pt-2 w-96 setting flexing '>
      
    <label htmlFor={name} className='pr-5'>{name}</label>
    <input type={type} id={name} value={func} 
    onChange={(e)=>{ 
      
       set((prev)=>{return {...prev, [name]: e.target.value}});
        }} 
        className='border-black border-2 rounded-lg float-right fix_width'/>
   
    </div>
  )
}

export default Input
