import React, {useState} from 'react'
import contex from './datacontext'
const Data = ({children}) => {
    const [allData,setAllData]=useState([]);
  return (
    <contex.Provider value={{allData,setAllData}}>
        {children}
    </contex.Provider>
  )
}

export default Data
