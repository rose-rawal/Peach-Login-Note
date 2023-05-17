import context from "./maincontext";
import React, { useEffect } from 'react'
import {useState} from 'react'
const Context = ({children}) => {
    const [loggedIn,setLoggedIn]=useState(false)
    const [users,setUsers]=useState([{
      Name:'Rose Rawal',
      Password: 'admin1234',
      Email: 'rooserwl@gmail.com'
    }])
    
    
    
    const checkSignUp=({Name,Password,Email})=>{
      const response={err:'Success',text:'Success'};
      const pattern=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      if(!Name & !Email & !Password)
      {
        response.err="All"
        response.text="Please Enter Name Email and Password";
        return response;
      }
      if(Name.length<4 | Name.length>16)
      {
        response.err="Name"
        response.text="Name length should be between 4-16"
        return response;
      }
      
      if(!Email.match(pattern))
      {
        response.err="Email"
        response.text="Pease enter email in requested format abc@abc.com"
        return response;
      }
      if(Password.length<8 | Password.length>16)
      {
        response.err="Password"
        response.text="Length of Password should be 8-16"
      }
      return response
    }
    const checkLogin=(Name,Password)=>{
        const response={};
        let flag=0;
        users.map((n)=>{
          if(n===null){
            
          }
          else if(n.Name===Name && n.Password===Password)
          {
            flag=1
            setLoggedIn(true)
          }
        })
        if(flag===0)
          {
            response.err="No Account"
            response.text="Name and Password Error";
          }
          return response
    }
  return (
    <context.Provider value={{loggedIn,setLoggedIn,
    setUsers,users,checkSignUp,checkLogin
    }}>
        {children}
    </context.Provider>
  )
}

export default Context
