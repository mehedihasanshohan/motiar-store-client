import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { PiFileMagnifyingGlass } from 'react-icons/pi';
import { FaTrashCan } from 'react-icons/fa6';

const MyParcel = () => {
  const {user}= useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: parcels = [] } = useQuery({
    queryKey: ['myParcel', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    }
  })
  return (
    <div>
      <h2>All of my parcels: {parcels.length}</h2>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Cost</th>
        <th>Payment Status</th>
      </tr>
    </thead>
    <tbody>
      {
        parcels.map((parcel, index)=>  <tr>
        <th>{index + 1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>
          <button className='btn btn-square hover:bg-primary'>
            <PiFileMagnifyingGlass></PiFileMagnifyingGlass>
          </button>
          <button className='btn btn-square hover:bg-primary'>
            <FiEdit></FiEdit>
          </button>
          <button className='btn btn-square hover:bg-primary'>
            <FaTrashCan></FaTrashCan>
          </button>
        </td>
      </tr>
      )}

    </tbody>
  </table>
</div>
    </div>
  )
}

export default MyParcel