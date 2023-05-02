import context from "./maincontext";
import React from 'react'
import {useState} from 'react'
const Context = ({children}) => {
    const [loggedIn,setLoggedIn]=useState(false)
    const [users,setUsers]=useState([{
      Name:'1',
      Email:'1',
      Password:'1'
    }])
    
  return (
    <context.Provider value={{loggedIn,setLoggedIn,
    setUsers,users
    }}>
        {children}
    </context.Provider>
  )
}

export default Context
