import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import context from '../context/maincontext'

const Nav = () => {
  const {loggedIn,setLoggedIn}=useContext(context)
  const [toggle,setToggle]=useState(false);
  const handleToggle=()=>{
    setToggle(!toggle);
  }
  const handleReq=(e)=>{
    e.preventDefault();
    setLoggedIn(false);
  }
  return (
    <div className='nav py-7 bg-black text-white'>
      <h1 className='inline px-10 text-3xl font-serif hover:text-red-200 cursor-pointer'>Peach</h1>
      
      {!loggedIn?<></>:<>
      <div className={`toggleBar `} onClick={handleToggle}>
        <div className='bar'></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`flex float-right px-20 text-lg navcontrol ${toggle?"togtrue":"togfalse"}`}>
        <li className='px-5 hover:text-red-200 cursor-pointer'><Link to='/'>Home</Link></li>
        <li className='px-5 hover:text-red-200 cursor-pointer'><Link to='/about'>About</Link></li>
        <li className='px-5 hover:text-red-200 cursor-pointer'>{!!loggedIn?<button onClick={handleReq}>Log Out</button>:<Link to='/error'>Error</Link>}</li>
      </ul>
      </>
      }
    </div>
  )
}

export default Nav
