import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
        <div className='space-y-3 shadow-xl w-full rounded-md p-5 border'>
            <p className='font-semibold'>{address?.firstName + " " + address?.lastName}</p>
            <p className='space-y-1 font-semibold'>{address?.state},{address?.streetAddress},{' pin-code :' +" " + address?.zipCode}</p>
            <div>
                <p>Phone Number</p>
                <p>{address?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard