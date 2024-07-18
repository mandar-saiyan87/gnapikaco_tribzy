import React, { useState } from 'react'
import { appimages } from '../../assets/constants'
import { navtabs } from '../../assets/constants'


function Navbar() {

  const [active, setActive] = useState("")

  return (
    <>
      <nav className='w-full flex justify-between'>
        <div className='w-[73%] flex justify-between'>
          <img src={appimages.logomain} alt="applogo" className='w-32 ml-10' />
          <ul className='flex items-center gap-x-20'>
            {navtabs.map((tab, index) => {
              return (
                <li key={index} className={active === tab ? 'text-sm text-primetext font-bold cursor-pointer' : 'text-sm text-primetext cursor-pointer'} onClick={() => setActive(tab)}>{tab}</li>
              )
            })}
          </ul>
        </div>
        <div className='bg-mainbg flex gap-x-7 pl-5 pb-5'>
          <button className='text-white py-3 px-6 border-white border-2 rounded-md text-sm leading-4'>Log in</button>
          <button className='bg-sectext text-white py-3 px-6 rounded-md text-sm'>Sign up</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar