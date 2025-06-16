import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const DeleteUser = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete user with ID: ${data.userId}?`);
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:5174/api/user/delete-user/${data.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("User deleted successfully.");
      reset();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "User deletion failed!");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Delete User</h2>
      <form className="w-full" noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* User ID */}
        <input
          type="text"
          placeholder="Enter User ID"
          className="w-full p-2 border border-gray-400 rounded-md mb-2"
          {...register("userId", { required: "User ID is required" })}
        />
        <p className="text-red-500 text-sm mb-6">{errors.userId?.message}</p>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-2 bg-red-600 text-white rounded-md hover:bg-red-700 mt-6"
        >
          Delete User
        </button>
      </form>
    </div>
  );
};

export default DeleteUser;
