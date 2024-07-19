import React from 'react'

function PropertyCard({ property }) {
  return (
    <>
      <div className='flex w-full max-w-[875px] h-36 bg-white rounded-xl gap-x-3 md:flex-col md:p-5 md:h-full'>
        <div className='w-[60%] md:hidden'>
          <img src={property.respimg} alt="locationresp" className='w-full h-full object-fill rounded-l-xl' />
        </div>
        <div className='hidden md:block'>
          <img src={property.image} alt="locationimage" className='w-full h-full object-fill' />
        </div>
        <div className='flex flex-col'>
          <div className='w-[80%] md:w-[90%]'>
            <p className='text-[#061B2E] text-base font-bold my-2 flex-wrap md:text-3xl md:my-5'>{property.name}</p>
            <p className='text-[#6F7276] text-sm font-normal md:text-2xl'>{property.address}</p>
          </div>
          <div className='w-full flex mt-8 md:mt-24 md:justify-end'>
            <p className='text-xs font-medium text-sectext cursor-pointer md:text-xl md:font-bold'>Learn More</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyCard