import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCity from './CityController/AddCity';
import DeleteCity from './CityController/DeleteCity';
import AddUser from './UserController/AddUser';
import DeleteUser from './UserController/DeleteUser';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'add-city': return <AddCity />;
      case 'delete-city': return <DeleteCity />;
      case 'add-user': return <AddUser />;
      case 'delete-user': return <DeleteUser />;
      default: return <p className="text-gray-500">Select an option to manage</p>;
    }
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Redirect to login or home page
    navigate('/login'); 

  }

  return (
    <div className="p-8 mx-auto max-w-4xl bg-violet-50 min-h-screen rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold mb-8 text-center text-violet-800">Admin Dashboard</h1>

  <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mb-8">
    {/* Manage City */}
    <div className="bg-white border border-violet-200 p-6 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-violet-700 mb-4">Manage City</h2>
      <button
        onClick={() => setActiveTab('add-city')}
        className="w-full p-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg mb-3 transition"
      >
        ➕ Add City
      </button>
      <button
        onClick={() => setActiveTab('delete-city')}
        className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
      >
        🗑️ Delete City
      </button>
    </div>

    {/* Manage User */}
    <div className="bg-white border border-violet-200 p-6 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-violet-700 mb-4">Manage User</h2>
      <button
        onClick={() => setActiveTab('add-user')}
        className="w-full p-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg mb-3 transition"
      >
        ➕ Add User
      </button>
      <button
        onClick={() => setActiveTab('delete-user')}
        className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
      >
        🗑️ Delete User
      </button>
    </div>
  </div>

  {/* Dynamic Content Section */}
  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-inner">
    {renderContent()}
  </div>

  {/* Logout */}
  <div className="mt-6">
    <button
      onClick={handleLogout}
      className="w-full p-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition"
    >
      🔒 Log Out
    </button>
  </div>
</div>

  );
}
