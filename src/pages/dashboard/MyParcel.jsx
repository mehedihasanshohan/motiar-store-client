import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyParcel = () => {
  const {user}= useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: parcel = [] } = useQuery({
    queryKey: ['myParcel', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    }
  })
  return (
    <div>
      <h2>All of my parcels: {parcel.length}</h2>
    </div>
  )
}

export default MyParcel