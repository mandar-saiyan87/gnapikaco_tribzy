import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Navbar from '../../components/shared/Navbar'

function Homepage() {
  return (
    <>
      <div className=''>
        {/* <Navbar /> */}
        <Section1 />
        <Section2 />
      </div>
    </>
  )
}

export default Homepage