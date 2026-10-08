import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async(data) => {
    console.log("Register data:", data);
    // if (onRegister) onRegister(data);
    const res=await axios.post('http://localhost:3000/api/users/register',{
     firstname:data.firstName,
     lastname:data.lastName,
     username:data.username,
     email:data.email,
     password:data.password,
     dob:data.dob,
     profilepic:data.profilePic
    });
    console.log(res.data);
  };

  return (
    <div className="max-w-full mx-auto bg-white shadow rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">

        <div className="grid grid-cols-2 gap-7">
          <div>
        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "First Name is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "Last Name is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Username */}
        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        
         </div>
         <div>  
        {/* Date of Birth */}
        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            {...register("dob", { required: "Date of Birth is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block mb-1 font-medium">Profile Picture</label>
          <input
          placeholder="Upload your profile picture"
            type="file"
            accept="image/*"
            {...register("profilePic", { required: "Profile Picture is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.profilePic && (
            <p className="text-red-500 text-sm">{errors.profilePic.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
            })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
        
        </div>
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <p type="button" 
        //
          className="text-blue-600 hover:underline"
        >
            <Link to='/login'>
          Login
         </Link>
        </p>
      </p>
    </div>
  );
};

export default Register;
