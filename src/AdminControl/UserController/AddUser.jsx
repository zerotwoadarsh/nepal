import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
  
      const formData = new FormData();
      const payload = {
        name: data.name,
        city: data.city,
        age: data.age,
        gender: data.gender,
        type: data.type,
        height: data.height,
        weight: data.weight,
        description: data.description,
        price: data.price,
        image1: data.image1,
        image2: data.image2,
        image3: data.image3,
        image4: data.image4,
        image5: data.image5,
        image6: data.image6,
      };
      
      const response = await axios.post("http://localhost:5174/api/user/add-user", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      

      alert("User added successfully!");
      console.log(response.data);
      reset();
    } catch (error) {
      alert(error.response?.data?.message || "User addition failed!");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New User</h2>
      <form className="w-full" noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("name", { required: "Name is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.name?.message}</p>

        {/* City */}
        <input
          type="text"
          placeholder="City"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("city", { required: "City is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.city?.message}</p>

        {/* Age */}
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("age", { required: "Age is required", min: 1 })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.age?.message}</p>

        {/* Gender */}
        <select
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("gender", { required: "Gender is required" })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p className="text-red-500 text-sm mb-6">{errors.gender?.message}</p>

        {/* Type */}
        <input
          type="text"
          placeholder="Type"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("type", { required: "Type is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.type?.message}</p>

        {/* Height */}
        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("height", { required: "Height is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.height?.message}</p>

        {/* Weight */}
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("weight", { required: "Weight is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.weight?.message}</p>

        {/* Description */}
        <textarea
          placeholder="Description"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("description", { required: "Description is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.description?.message}</p>

        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("price", { required: "Price is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.price?.message}</p>
        {/* Image URLs */}
        {[1, 2, 3, 4, 5, 6].map((num) => (
  <div key={num}>
    <input
      type="url"
      placeholder={`Image ${num} URL`}
      className="w-full p-2 border border-gray-400 rounded-md mb-2"
      {...register(`image${num}`, {
        required: num === 1 ? `Image ${num} is required` : false,
      })}
    />
    <p className="text-red-500 text-sm mb-6">{errors[`image${num}`]?.message}</p>
  </div>
))}


        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 mt-6"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
