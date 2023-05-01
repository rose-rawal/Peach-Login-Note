import context from "./maincontext";
import React from 'react'
import {useState} from 'react'
const Context = ({children}) => {
    const [loggedIn,setLoggedIn]=useState(false)
    
    
  return (
    <context.Provider value={{loggedIn,setLoggedIn,
    
    }}>
        {children}
    </context.Provider>
  )
}

export default Context
