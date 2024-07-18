import React from 'react'

function PropertyCard({ property }) {
  return (
    <>
      <div className='w-full max-w-[875px] max-h-[500px] bg-white p-5 rounded-xl'>
        <div>
          <img src={property.image} alt="locationimage" className='w-full h-full object-fill' />
        </div>
        <div>
          <p className='text-[#061B2E] text-3xl font-bold my-5'>{property.name}</p>
          <p className='text-[#6F7276] text-2xl font-normal'>{property.address}</p>
        </div>
        <div className='w-full flex justify-end mt-24'>
          <p className='text-xl font-bold text-sectext cursor-pointer'>Learn More</p>
        </div>
      </div>
    </>
  )
}

export default PropertyCard