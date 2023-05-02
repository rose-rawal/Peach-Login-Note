import React, { useContext,useState } from 'react'
import Input from './formdetails/Input'
import Button from './formdetails/Button'
import context from '../context/maincontext'
import Error from '../pageinfo/Error'
const Login = () => {
  const {setUsers,users,setLoggedIn}=useContext(context);
  const [loguser,setLoguser]=useState({
    Name:'',
    Password:''
  })
  const [error,setError]=useState(false)
  const [user,setUser]=useState({
    Name:'',
    Email:'',
    Password:''
  })
  const handleSignUp=(e)=>{
    e.preventDefault();
    setUsers(n=>{
      const save=[...n,user]
      console.log(save)
      return save
    })
  }

  const handleLogin=(e)=>{
    e.preventDefault();
    users.map(n=>{
      if(n.Name===loguser.Name && n.Password===loguser.Password){
        setLoggedIn(true)
      }
    })
  }
  const [login,setLogin]=useState(true)
  return (
    <div >
        {login && <form action="get" className='pt-5 '>
            <Input name="Name" type="text" func={loguser.Name} set={setLoguser}/>
            
            <Input name="Password" type="password" func={loguser.Password} set={setLoguser}/>
            <Button name='Log in' handle={handleLogin}/><br />
            <input type='button' className='setter' value="Create Account"onClick={(e)=>{e.preventDefault(); setLogin(false)}}></input>
        </form>}

        {!login && <form action="get" className='pt-5'>
            <Input name="Name" type="text" func={user.Name} set={setUser}/>
            <Input name="Email" type="email" func={user.Email} set={setUser}/>
            <Input name="Password" type="password" func={user.Password} set={setUser}/>
            <Button name='SignUp' handle={handleSignUp}/>
            <input type='button' className='setter' value="Already Have Account"onClick={(e)=>{e.preventDefault(); setLogin(true)}}></input>
        </form>
        }
         
    </div>
  )
}

export default Login
