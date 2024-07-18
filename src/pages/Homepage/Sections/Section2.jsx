import React from 'react'
import PropertyCard from '../../../components/shared/PropertyCard'
import { locations } from '../../../assets/constants'

function Section2() {
  return (
    <>
      <div className='flex gap-x-24 my-10'>
        {locations.map((location) => {
          return (
            <PropertyCard key={location.id} property={location} />
          )
        })}
      </div>
      <div className='flex items-center justify-center'>
        <button className='bg-sectext text-white py-3.5 px-[75px] rounded-2xl'>View More Communities</button>
      </div>
    </>
  )
}

export default Section2