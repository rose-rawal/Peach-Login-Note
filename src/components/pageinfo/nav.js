import React from 'react'

const Nav = () => {
  return (
    <div className='nav py-7 bg-black text-white'>
      <h1 className='inline px-10 text-3xl font-serif hover:text-red-200 cursor-pointer'>Peach</h1>
      <ul className='flex float-right px-20 text-lg'>
        <li className='px-5 hover:text-red-200 cursor-pointer'>Home</li>
        <li className='px-5 hover:text-red-200 cursor-pointer'>About</li>
        <li className='px-5 hover:text-red-200 cursor-pointer'>Error</li>
      </ul>
    </div>
  )
}

export default Nav
