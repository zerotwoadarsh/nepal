import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import ProfileCard1 from '../animations/ProfileCard1';

export default function CityEmployees() {
  const { cityName } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5174/api/user/all-users');
        setUsers(response.data.users);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    user => user.city.toLowerCase() === cityName.toLowerCase()
  );

  if (loading) {
    return (
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 h-40 rounded shadow-md"></div>
        ))}
      </div>
    );
  }

  if (filteredUsers.length === 0) {
    return (
      <div className="text-center py-16 bg-violet-100 min-h-[600px]">
        <h1 className="sm:text-3xl text-lg font-bold text-gray-800 mb-4">No Hotties Available</h1>
        <h2 className="sm:text-2xl text-base font-semibold text-gray-600">Currently we don't have Hotties to serve you in {cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()}
        </h2>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 bg-violet-100">
      <div className="text-center mb-10 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">Call Girls in {cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()}
        </h1>
        <p className="text-gray-500 mt-2">Find a perfect beauty to cheer-up your night.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center">
        {filteredUsers.map((user) => (
          <ProfileCard1
            key={user._id}
            imageSrc={user.image1 || user.image2}
            // altText={`${user.name}'s profile`}
            captionText={`${user.name} - ${user.city}`}
            containerHeight="200px"
            containerWidth="150px"
            imageHeight="200px"
            imageWidth="150px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            user={user}
            overlayContent={
              <p className="text-white text-base font-semibold p-2">
                {user.name}<br />{user.age} years old<br />
              </p>
            }
          />
        ))}

      </div>
    </div>
  );
}
