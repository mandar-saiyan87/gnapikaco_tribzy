import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'

function Homepage() {
  return (
    <>
      <div className='lg:px-7 lg:py-9'>
        <Section1 />
        <Section2 />
      </div>
    </>
  )
}

export default Homepage