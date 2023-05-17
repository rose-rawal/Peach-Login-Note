import React, { useState,useContext } from 'react'
import PageInfo from '../pageinfo'
import Input from './formdetails/Input'
import contex from '../context/datacontext'

const Home = () => {
  const {dat}=useContext(contex)
  console.log(dat)
  const [data,setData]=useState({
    name:'',
    comment:''
  })
  const handleChange=(what,change)=>{
    console.log(what,change)
      setData({...data,[what]:change})
    
    console.log(data)
  }
  return (
    <PageInfo>
      <form className='m-auto block mx-10 mt-10'>
        <label htmlFor="name" className='my-5'>Name:</label><br /><input type="text" className='border-2 border-black rounded mb-5' value={data.name} onChange={(e)=>{handleChange("name",e.target.value)}}/>
        <label htmlFor="comment text-center inline" className='block'>Comment:</label><textarea id="comment" className='border-2 border-black rounded w-7/12 h-40' value={data.comment} onChange={(e)=>{handleChange("comment",e.target.value)}}></textarea>

      </form>
    </PageInfo>
  )
}

export default Home