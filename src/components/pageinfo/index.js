import React, { useContext } from 'react'
import Nav from './nav'
import context from '../context/maincontext';
import Login from '../pages/Login';
const PageInfo = ({children}) => {
    const {loggedIn}=useContext(context);
    
  return (
    <div>
    <Nav/>
    {loggedIn?children:<Login/>}
    </div>
  )
}

export default PageInfo
