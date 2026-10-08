import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const Login = () => {


    const[data,setData] = useState([])
    const navigate = useNavigate()




 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();





  const onSubmit = async(data) => {
    console.log(data); // 

   const res = await axios.post('http://localhost:3000/api/users/login'
  ,{
    username:data.username,
    password:data.password
   });
    console.log(res.data);
    setData(res.data)
    setTimeout(() => navigate('/user-list'), 2000);

 
  };

  
  

  return (
    <div className='w-full h-screen flex justify-end items-start '>
     
    <div className="w-[360px] mr-15 mt-12 max-w-sm  bg-white shadow rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-4">
        {/* Username / Email */}
        <div>
          <label className="block mb-1 font-medium">Username / Email</label>
          <input
            type="text"
            {...register("username", { required: "Username or Email is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className=" bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Don’t have an account?{" "}
        <button
         
          className="text-blue-600 hover:underline"
        >
          <Link to='/register'>
          Register
       </Link> </button>
      </p>
    </div>
     </div>

  )
}

export default Login
