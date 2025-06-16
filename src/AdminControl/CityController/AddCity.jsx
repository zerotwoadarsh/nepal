import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddCity = () => {

    const { register, handleSubmit, formState, reset } = useForm()
    const { errors } = formState;

    async function onSubmit(data) {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "http://localhost:5174/api/city/add-city",
                 data,
                 {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
            alert("City added successfully!");
            console.log(response.data);
            reset(); // Reset form fields after successful submission
        } catch (error) {
            alert(error.response?.data?.message || "City addition failed!");
            console.error(error);
        }
    }
    return (
        <div>
            <form
                className="w-full"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="">
                    <label htmlFor="city" className=""></label>
                    <input
                        type="text"
                        id="city"
                        placeholder="City"
                        className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
                        {...register("city", { required: "City is required" })}
                    />
                    <p className="text-red-500 text-sm">{errors.city?.message}</p>
                </div>
                <button
                        type='submit'
                        className="w-full py-2 px-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 mt-8"
                    >
                        Add
                    </button>
            </form>
        </div>
    )
}

export default AddCity