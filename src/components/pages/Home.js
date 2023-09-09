import React, { useState,useContext, useEffect } from 'react'
import PageInfo from '../pageinfo'
import Input from './formdetails/Input'
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
  
},[])


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
      <h1 className='text-center'>ChatBox</h1><br />
      <div className='flex flex-col items-center'>
        <div className='border-2 w-2/3 h-72 text-center overflow-auto flex flex-col'>
        {allMessage[allMessage.length-1].message===''?"Empty message":allMessage.map(msg=>{
          return(
            <div key={Math.random()} className={'w-2/3 mb-2 p-2 rounded-md mx-2 '+ (msg.author===currentUser.Name?"text-start bg-red-200":msg.author!=='start'?"text-end self-end bg-amber-200":'p-0')}>{msg.message}</div>
        )}
        )}


        </div>
        
        <div className=''>
          <input type="text" className='border-2' value={message} onChange={(e)=>{
            setMessage(e.target.value);
            console.log(message);
          }}/><button onClick={handleClick}>Send</button>
        </div>
      </div>
    </PageInfo>
  )
}

export default Home