import React from 'react'
import PageInfo from '../pageinfo'

const About = () => {
  return (
    <PageInfo>
    <div className='w-3/4 self-center'>
    <h1 className='text-center text-3xl font-mono font-bold pt-10'>Peach Note</h1><br />
      Hello This is my first chat app project that relies solely on database connectivity without use of tools such as firebase and Socket. 
      This app has client side authentication during login as authentication mechanism as a sole CIA mechanism.
      Simply SignUp/Login and enter the website then we can send and recieve text message anonymously without knowing who sent the
      following message. <br /><br />
      <span className=' block text-end'>-Kuro</span>
    </div>
    </PageInfo>
  )
}

export default About
