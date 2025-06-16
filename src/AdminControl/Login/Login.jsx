import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { register, handleSubmit, formState, reset } = useForm ()
    const { errors } = formState;
    const navigate = useNavigate ();

    async function onSubmit(data) {
        try {
            const response = await axios.post("http://localhost:5174/api/auth/login", data);
            localStorage.setItem("token", response.data.token);
            navigate('/admin/dashboard')
            alert("Login successful!");
            console.log(response.data);
            reset(); 
        } catch (error) {
            alert(error.response?.data?.message || "Login failed!");
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen ">
            <div className=" md:w-1/5 flex flex-col items-center justify-center  rounded-md">

                <h1 className="font-medium  mb-8">
                    You made it to this page!<br/> Please login to continue.
                </h1>
                <form
                    className="w-full"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="">
                        <label htmlFor="uid" className=""></label>
                        <input
                            type="text"
                            id="uid"
                            placeholder="UID"
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
                            {...register("uid", { required: "UID is required" })}
                        />
                        <p className="text-red-500 text-sm">{errors.uid?.message}</p>
                    </div>
                    <div className="">
                        <label htmlFor="password" className=""></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
                            {...register("password", { required: "Password is required" })}
                        />
                        <p className="text-red-500 text-sm">{errors.password?.message}</p>
                    </div>
                    <button
                        type='submit'
                        className="w-full py-2 px-2 bg-violet-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 mt-8"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login