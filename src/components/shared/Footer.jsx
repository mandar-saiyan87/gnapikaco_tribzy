import React from 'react'
import { appimages } from '../../assets/constants'


function Footer() {
  return (
    <>
      {/* Large Screen Footer */}
      <div className='hidden md:block w-full bg-footerbg px-14 py-10'>
        <div className='flex items-start justify-start gap-x-[450px]'>
          <div className='flex items-start justify-center gap-x-32'>
            {/* footer-1 */}
            <div className='w-full max-w-[50%] flex flex-col gap-y-5'>
              <div className='w-full max-w-[140px]'>
                <img src={appimages.footerlogo} alt="footerlogo" className='w-full h-full object-fill' />
              </div>
              <div>
                <p className='text-footertext text-sm font-normal leading-7'>Your New Home And Community Await With Tribsy</p>
              </div>
              <div className='flex items-center justify-start gap-x-9'>
                <img src={appimages.twitter} alt="twitter" className='w-4' />
                <img src={appimages.facebook} alt="facebook" className='w-2' />
                <img src={appimages.instagram} alt="instagram" className='w-4' />
                <img src={appimages.linkedin} alt="linkedin" className='w-4' />
              </div>
            </div>
            {/* footer-2 */}
            <div>
              <ul className='text-footertext flex flex-col gap-y-6 text-sm'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Features</li>
                <li className='cursor-pointer'>How it works</li>
                <li className='cursor-pointer'>Career</li>
              </ul>
            </div>
          </div>
          {/* footer-3 */}
          <div className=''>
            <ul className='text-footertext flex flex-col gap-y-6 text-sm'>
              <li className='cursor-pointer'>Contact Us</li>
              <li className='cursor-pointer'>FAQs</li>
              <li className='cursor-pointer'>Blogs</li>
            </ul>
          </div>
        </div>
        <hr className='border-[#E4E4E7] opacity-15 my-10' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center text-sm text-footertext gap-x-9'>
            <p>Community Standards</p>
            <div className='h-5 border-[1px] border-[#CECECE]' />
            <p>Privacy Policy</p>
            <div className='h-5 border-[1px] border-[#CECECE]' />
            <p>Terms</p>
            <div className='h-5 border-[1px] border-[#CECECE]' />
            <p>Cookie Policy</p>
          </div>
          <div className='flex items-center justify-center text-sm text-footertext'>
            <p>© 2024 Tribsy. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className='w-full bg-footerbg flex flex-col py-8 px-5 gap-y-8 md:hidden'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col items-start justify-start gap-y-2'>
            <p className='text-xl font-medium text-footertext'>Quick Links</p>
            <ul className='flex flex-col gap-y-2 text-base font-normal text-footertext'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>About Us</li>
              <li className='cursor-pointer'>How It Works</li>
              <li className='cursor-pointer'>Contact Us</li>
              <li className='cursor-pointer'>FAQ’s</li>
              <li className='cursor-pointer'>Blogs</li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-start gap-y-2'>
            <p className='text-xl font-medium text-footertext'>Follow Us</p>
            <ul className='flex flex-col gap-y-5 text-base font-normal text-footertext'>
              <div className='flex text-base text-footertext gap-x-2'>
                <img src={appimages.twitter} alt="twitter" className='w-[18px]' />
                <p>Twitter</p>
              </div>
              <div className='flex text-base text-footertext gap-x-2'>
                <img src={appimages.instagrammobile} alt="twitter" className='w-[18px]' />
                <p>Instagram</p>
              </div>
              <div className='flex text-base text-footertext gap-x-2'>
                <img src={appimages.linkedin} alt="twitter" className='w-[18px]' />
                <p>Linkedin</p>
              </div>
              <div className='flex text-base text-footertext gap-x-2'>
                <img src={appimages.facebook} alt="twitter" className='w-[10px]' />
                <p>Facebook</p>
              </div>
            </ul>
          </div>
        </div>
        <div className='w-[85%] flex flex-wrap items-center justify-start text-xs text-footertext gap-x-5 leading-7'>
          <p>Community Standards</p>
          <div className='h-4 border-[1px] border-[#CECECE]' />
          <p>Privacy Policy</p>
          {/* <div className='h-4 border-[1px] border-[#CECECE]' /> */}
          <p>Terms</p>
          <div className='h-4 border-[1px] border-[#CECECE]' />
          <p>Cookie Policy</p>
        </div>
        <div className='flex items-center justify-center text-xs text-footertext'>
          <p>© 2024 Tribsy. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer