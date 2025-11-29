import React from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });

  return (
    <div>
      <h2 className='text-4xl text-teal-500'>Manage Users: {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>

                {/* Photo */}
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photoURL || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                        alt="user avatar"
                      />
                    </div>
                  </div>
                </td>

                {/* Name */}
                <td>{user.name}</td>

                {/* Email */}
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default UserManagement;
