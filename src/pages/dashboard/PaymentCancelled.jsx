import React from 'react'
import { Link } from 'react-router'

const PaymentCancelled = () => {
  return (
    <div>
      <h2 className='text-red-500 text-4xl text-center font-semibold'>PaymentCancelled</h2>
      <Link to='/dashboard/my-parcels'>
        <button className='btn btn-error'>Try Again</button>
      </Link>
    </div>
  )
}

export default PaymentCancelled