import React, { useState, useLayoutEffect } from 'react'
import { appimages } from '../../assets/constants'
import { navtabs } from '../../assets/constants'
import { AiFillCloseCircle } from "react-icons/ai";


function Navbar() {

  const [active, setActive] = useState("")
  const [mobilenav, setMobileNav] = useState(false)
  const [nav, setNav] = useState(true)


  useLayoutEffect(() => {
    function handleNavScroll() {
      if (window.scrollY >= 30) {
        setNav(false)
      } else {
        setNav(true)
      }
    }
    window.addEventListener('scroll', handleNavScroll)

    return () => {
      window.removeEventListener('scroll', handleNavScroll)
    }
  }, [])

  return (
    <>
      <nav className={`w-full max-w-[1848px] flex justify-between bg-herobg mx-auto ${nav ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className='flex justify-between lg:w-[73%] cursor-pointer'>
          <img src={appimages.logomain} alt="applogo" className='w-24 ml-4 lg:w-32 lg:ml-10' />
          <ul className='hidden lg:flex items-center lg:gap-x-10 xl:gap-x-20 2xl:gap-x-24'>
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
          <div className='bg-mainbg rounded-bl-xl px-4 py-5' onClick={() => setMobileNav(true)}>
            <img src={appimages.hamburgermenu} alt="hmmenu" className='w-4' />
          </div>
        </div>
        <div className='hidden lg:flex gap-x-7 pl-5 pb-5 bg-mainbg'>
          <button className='text-white py-3 px-6 bg-mainbg border-white border-2 rounded-md text-sm leading-4 active:opacity-75'>Log in</button>
          <button className='bg-sectext text-white py-3 px-6 rounded-md text-sm active:opacity-75'>Sign up</button>
        </div>
      </nav>
      {/* Mobile Navbar Modal */}
      <div className={mobilenav ? 'lg:hidden fixed flex w-screen h-screen bg-black/45 top-0 left-0 z-20' : 'hidden'} onClick={() => setMobileNav(false)}>
        <div className={mobilenav ? 'fixed h-full w-[65%] bg-white top-0 right-0 z-30 px-5 py-5 flex flex-col items-start justify-start md:w-[40%]' :
          'fixed -right-100 top-0'}>
          <div className='w-full justify_between'>
            <div className='w-20 cursor-pointer'>
              <img src={appimages.logomain} alt="logo" className='w-full h-full object-fill' />
            </div>
            <AiFillCloseCircle size={20} onClick={() => setMobileNav(false)} />
          </div>
          <div>
            <ul className='flex flex-col gap-y-7 mt-10'>
              {navtabs.map((tab, index) => {
                return (
                  <li key={index} className={active === tab ? 'text-sm text-primetext font-bold cursor-pointer' : 'text-sm text-primetext cursor-pointer'} onClick={() => setActive(tab)}>{tab}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Scrolllable Nabar */}
      <div className={`w-full max-w-[1920px] fixed top-0 left-0 right-0 mx-auto lg:px-7 ${nav ? 'navbar-hidden' : 'navbar-visible'}`}>
        <nav className='w-full flex justify-between bg-herobg max-w-[1848px] mx-auto'>
          <div className='flex justify-between lg:w-[73%] cursor-pointer'>
            <img src={appimages.logomain} alt="applogo" className='w-24 ml-4 lg:w-32 lg:ml-10' />
            <ul className='hidden lg:flex items-center lg:gap-x-10 xl:gap-x-20 2xl:gap-x-24'>
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
            <div className='bg-mainbg rounded-bl-xl px-4 py-5' onClick={() => setMobileNav(true)}>
              <img src={appimages.hamburgermenu} alt="hmmenu" className='w-4' />
            </div>
          </div>
          <div className='hidden lg:flex items-center gap-x-7 pl-5 py-5 bg-mainbg'>
            <button className='text-white py-3 px-6 bg-mainbg border-white border-2 rounded-md text-sm leading-4 active:opacity-75'>Log in</button>
            <button className='bg-sectext text-white py-3 px-6 rounded-md text-sm active:opacity-75'>Sign up</button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar