import React from 'react'
import PropertyCard from '../../../components/shared/PropertyCard'
import { locations } from '../../../assets/constants'
import { MdChevronRight } from "react-icons/md";

function Section2() {
  return (
    <>
      <div className='flex flex-col gap-y-3 px-3 my-5 md:flex md:flex-row md:items-center md:justify-center md:my-7 md:gap-x-5 lg:gap-x-12 lg:my-10 xl:gap-x-24'>
        <div className='text-white text-xs flex items-center justify-end gap-x-1 cursor-pointer lg:hidden'>
          <p>View all</p>
          <MdChevronRight className='-mt-1' size={15} />
        </div>
        {locations.map((location) => {
          return (
            <PropertyCard key={location.id} property={location} />
          )
        })}
      </div>
      <div className='flex items-center justify-center px-3 md:px-0'>
        <button className='bg-sectext text-white py-2 w-full max-w-[400px] rounded-sm mb-10 md:py-3.5 md:rounded-2xl active:opacity-75'>View More Communities</button>
      </div>
    </>
  )
}

export default Section2