import { useContext, useEffect, useState } from "react";
import {getAllUser,addUser} from "../api/messages";
import contex from "../components/context/datacontext";
const useMessage=()=>{
    const {allMessage,setAllMessage}=useContext(contex);
    const [msg,setMsg]=useState({})
    useEffect(()=>{
        const getz=async()=>{
        const res=await getAllUser();
        // console.log(res);
        // setMsg(res);
          setAllMessage(n=>{
        return [...res];
    })
        console.log("waiting for message")
    }
    setInterval(()=>{
        getz()
    },3000)
    },[])
    // useEffect(()=>{
       
        // },[msg])
    const getAll=async()=>{
            return msg;
    }
    getAll();
    const putUser=async(val)=>{
        const res=await addUser(val);
    }
   
    return {getAll,putUser}
}
export default useMessage