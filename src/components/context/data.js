import React, {useState} from 'react'
import contex from './datacontext'
const Data = ({children}) => {
    const [allData,setAllData]=useState([]);
      const [allMessage,setAllMessage]=useState([{
    message:'',author:'start'
  }]); 
  return (
    <contex.Provider value={{allData,setAllData,allMessage,setAllMessage}}>
        {children}
    </contex.Provider>
  )
}

export default Data
