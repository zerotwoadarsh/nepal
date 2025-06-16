// src/components/CityDisplay.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CityDisplay = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5174/api/city/all-cities");
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
        // alert("Failed to load cities.");
      }
    };

    fetchCities();
  }, []);


  const navigate = useNavigate();
  const handleClick = (cityName) => {
    navigate(`/city/${cityName.toLowerCase()}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
      {cities.length === 0 ? (
        <p className="text-gray-700 col-span-full text-center text-lg">No cities found.</p>
      ) : (
        cities.map((city) => (
          <div
            key={city._id}
            onClick={() => handleClick(city.name)}
            className="bg-violet-400 hover:bg-violet-700 text-white p-6 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center text-center text-base font-semibold h-32 w-32 mx-auto"
          >
            {city.name}
          </div>
        ))
      )}
    </div>

  );
};

export default CityDisplay;
