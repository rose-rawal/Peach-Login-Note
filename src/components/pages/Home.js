import React, { useState,useContext, useEffect } from 'react'
import PageInfo from '../pageinfo'

import contex from '../context/datacontext'
import useMessage from '../../hooks/useMessage'
import context from '../context/maincontext'

const Home = () => {
 
  const [message,setMessage]=useState();
  const {getAll,putUser}=useMessage();
  
const {currentUser}=useContext(context);
const {setAllMessage,allMessage}=useContext(contex);
useEffect(()=>{
  // getAll();
  
  const happen=async()=>{
    await getAll();
    // !abc[0]?setAllMessage(msg=>{
    //   return [...msg,...data]
    // }):console.log("not ready");
    
  }
    happen();
  
},[getAll])


  const handleClick=(e)=>{
    e.preventDefault();
    setAllMessage(msg=>{
      return [...msg,{message,author:currentUser.Name}]
    })
    putUser({message,author:currentUser.Name});
    // console.log(allMessage)
  
  }
  
  




  return (
    <PageInfo>
      <h1 className='text-center text-2xl font-mono'>MyChat : {currentUser.Name }</h1><br />
      <div className='flex flex-col items-center h-screen'>
        <div className='flex-grow border-2 sm:w-full md:w-2/3 h-72 text-center overflow-auto flex flex-col change'>
        <div className='pt-5'></div>
        {allMessage[allMessage.length-1].message===''?"Empty message":allMessage.map(msg=>{
          return(
            <div key={Math.random()} className={' mb-2 p-2 px-5 rounded-md mx-2 '+ (msg.author===currentUser.Name?"text-end self-end bg-amber-200":msg.author!=='start'?"text-start self-start bg-red-200":'p-0')}>{msg.message}</div>
        )}
        )}


        </div>
        
        <div className='flex justify-between sm:w-full md:w-2/3 change'>
          <input type="text" className='flex-grow border-2 p-2' value={message} onChange={(e)=>{
            setMessage(e.target.value);
            console.log(message);
          }}/><button className='py-2 px-5 bg-slate-500 text-white' onClick={handleClick}>Send</button>
        </div>
      </div>
    </PageInfo>
  )
}

export default Home