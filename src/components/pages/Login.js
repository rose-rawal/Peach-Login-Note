import React, { useContext,useState } from 'react'
import Input from './formdetails/Input'
import Button from './formdetails/Button'
import context from '../context/maincontext'
const Login = () => {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('')
  const [user,setUser]=useState({
    Name:'',
    Email:'',
    Password:''
  })
  const handleClick=(e)=>{
    e.preventDefault();
  }
  const [login,setLogin]=useState(true)
  return (
    <div >
        {login && <form action="get" className='pt-5'>
            <Input name="Name" type="text" func={name} set={setName}/>
            
            <Input name="Password" type="password" func={password} set={setPassword}/>
            <Button name='Log in'/><br />
            <input type='button' value="Create Account"onClick={(e)=>{e.preventDefault(); setLogin(false)}}></input>
        </form>}

        {!login && <form action="get" className='pt-5'>
            <Input name="Name" type="text" func={user.Name} set={setUser}/>
            <Input name="Email" type="email" func={user.Name} set={setUser}/>
            <Input name="Password" type="password" func={user.Password} set={setUser}/>
            <Button name='SignUp'/>
            <input type='button' value="Already Have Account"onClick={(e)=>{e.preventDefault(); setLogin(true)}}></input>
        </form>
        }
    </div>
  )
}

export default Login
