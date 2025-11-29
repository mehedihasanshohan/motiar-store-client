import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: riders=[] } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSecure.get('/riders');
      return res.data;
    }
  })

  const handleApproval = rider => {
     updateRiderStatus(rider, 'approved');
  }

  const updateRiderStatus = (rider, status) => {
      const updateInfo = {status: status, email: rider.riderEmail}
      axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
      .then(res => {
        if(res.data.modifiedCount){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider status is set to ${status}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleRejection = rider => {
    updateRiderStatus(rider, 'rejected')
  }


  return (
    <div>
      <h2>Riders Pending Approval: {riders.length}</h2>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Rider Name</th>
        <th>Email</th>
        <th>District</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        riders.map((rider, index) =>  <tr>
        <th>{index+1}</th>
        <td>{rider.riderName}</td>
        <td>{rider.riderEmail}</td>
        <td>{rider.district}</td>
        <td>
          <p className={`${rider.status === 'approved' ?
            'text-green-500' : 'text-orange-500'
          }`}>{rider.status}</p>
        </td>
        <td>
          <button
            onClick={() => handleApproval(rider)}
            className='btn text-teal-600 '>
            <FaUserCheck></FaUserCheck>
          </button>
          <button
            onClick={() => handleRejection(rider)}
            className='btn text-red-600 ml-2 mr-2'>
            <IoPersonRemoveSharp></IoPersonRemoveSharp>
          </button>
          <button className='btn text-red-400'>
            <FaTrashCan></FaTrashCan>
          </button>
        </td>
      </tr>)
      }


    </tbody>
  </table>
</div>
    </div>
  )
}

export default ApproveRiders