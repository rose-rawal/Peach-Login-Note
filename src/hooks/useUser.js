import { useContext, useEffect, useState } from 'react'
import { getAllUser, addUser } from '../api/users';
import context from '../components/context/maincontext';
const useUser = () => {
  const [user,setUser]=useState([]);
  const {setUsers}=useContext(context)
  useEffect(()=>{
    getAllUser().then((res)=>{
        console.log("object: ",res);
    setUser(res);
    setUsers(res);
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    
  
  const addUsers=async(data)=>{
    const res=await addUser(data);
    return res;
  } 

  return {user,addUsers};
}

export default useUser