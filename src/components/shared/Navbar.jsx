import React, { useState } from 'react'
import { appimages } from '../../assets/constants'
import { navtabs } from '../../assets/constants'


function Navbar() {

  const [active, setActive] = useState("")

  return (
    <>
      <nav className='w-full flex justify-between'>
        <div className='flex justify-between lg:w-[73%]'>
          <img src={appimages.logomain} alt="applogo" className='w-24 ml-4 lg:w-32 lg:ml-10' />
          <ul className='hidden lg:flex items-center gap-x-24'>
            {navtabs.map((tab, index) => {
              return (
                <li key={index} className={active === tab ? 'text-sm text-primetext font-bold cursor-pointer' : 'text-sm text-primetext cursor-pointer'} onClick={() => setActive(tab)}>{tab}</li>
              )
            })}
          </ul>
        </div>
        <div className='justify_center gap-x-2 lg:hidden'>
          <div className='w-16'>
            <img src={appimages.loginresp} alt="loginresp" className='w-full h-full object-fill' />
          </div>
          <div className='bg-mainbg rounded-bl-xl p-4'>
            <img src={appimages.hamburgermenu} alt="hmmenu" className='w-4' />
          </div>
        </div>
        <div className='hidden lg:flex gap-x-7 pl-5 pb-5 bg-mainbg'>
          <button className='text-white py-3 px-6 border-white border-2 rounded-md text-sm leading-4'>Log in</button>
          <button className='bg-sectext text-white py-3 px-6 rounded-md text-sm'>Sign up</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar