import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {


  const [users,setUsers]=useState([])

  const fetchdata=async()=>{
     const res=await axios.get('http://localhost:3000/api/users/getAllUsers')

    setUsers(res.data);
  }
  useEffect(()=>{
    fetchdata();
    
  },[])

  const onEdit=async(id)=>{
    const res=await axios.get(`http://localhost:3000/api/users/${id}`)


  };
  const onDelete=async(id)=>{
   const res=await axios.delete(`http://localhost:3000/api/users/${id}`);
   console.log(res.data)

  }
   console.log(users);

  return (
    <div className="p-6  shadow rounded ">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Date of Birth</th>
            <th className="border p-2">Profile Picture</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.firstname}</td>
              <td className="border p-2">{user.lastname}</td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.dob}</td>
              <td className="border p-2">
                <img
                  src={user.profilePic}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => onEdit(user)}
                  className="text-blue-600 hover:underline"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-yellow-600 hover:underline"
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
