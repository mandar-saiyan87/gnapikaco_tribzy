import React from 'react'
import Navbar from '../../../components/shared/Navbar'
import { appimages } from '../../../assets/constants'

function Section1() {
  return (
    <div className='w-full max-w-[1848px] bg-herobg mx-auto'>
      <Navbar />
      <div className='flex flex-col-reverse my-10 md:gap-y-10 lg:justify_center lg:flex-row lg:gap-10'>
        <div className='w-full max-w-[920px] px-12'>
          <img src={appimages.heropng} alt="heroimg" className='w-full h-full object-fill' />
        </div>
        <div className='flex flex-col items-center text-center'>
          <div className='text-center max-w-[75%]'>
            <p className='text-base font-semibold leading-7 text-primetext md:text-3xl md:leading-[50px] lg:text-5xl lg:font-bold lg:leading-[80px]'>Your New <span className='bg-[#EF9748] px-1'>Home</span> And <span className='bg-[#FFD600] px-1'>Community</span> Await with</p>
          </div>
          <p className='text-lg leading-10 text-sectext font-bold italic md:text-4xl lg:text-6xl'>Tribsy</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='bg-mainbg max-w-max rounded-t-xl px-14 pt-2 md:pt-4 md:px-28 lg:px-36 lg:pt-7'>
          <p className='text-xl italic font-bold text-white md:text-3xl lg:text-5xl'>Communities</p>
        </div>
      </div>
    </div>
  )
}

export default Section1