import { useContext, useEffect } from "react";
import {getAllUser,addUser} from "../api/messages";
import contex from "../components/context/datacontext";
const useMessage=()=>{
    const {setAllMessage}=useContext(contex);
    // const [msg,setMsg]=useState({})
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
    },[setAllMessage])
    // useEffect(()=>{
       
        // },[msg])
    const getAll=async()=>{
            return 0;
    }
    getAll();
    const putUser=async(val)=>{
        const res=await addUser(val);
        return res;
    }
   
    return {getAll,putUser}
}
export default useMessage