import React from 'react'
import Navbar from '../../../components/shared/Navbar'
import { appimages } from '../../../assets/constants'

function Section1() {
  return (
    <div className='w-full max-w-[1848px] bg-herobg mx-auto'>
      <Navbar />
      <div className='justify_center py-10 gap-10'>
        <div className='w-full max-w-[920px] px-12'>
          <img src={appimages.heropng} alt="heroimg" className='w-full h-full object-fill' />
        </div>
        <div className='flex flex-col items-center text-center'>
          <div className='text-center max-w-[75%]'>
            <p className='text-5xl text-primetext font-bold leading-[80px]'>Your New <span className='bg-[#EF9748] px-1'>Home</span> And <span className='bg-[#FFD600] px-1'>Community</span> Await with</p>
          </div>
          <p className='text-6xl text-sectext font-bold italic'>Tribsy</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='bg-mainbg max-w-max px-36 pt-7 rounded-t-xl'>
          <p className='text-5xl italic font-bold text-white'>Communities</p>
        </div>
      </div>
    </div>
  )
}

export default Section1