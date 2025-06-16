import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function CitySelector({  onSelectCity, onClose }) {
    const [cities, setCities] = useState([]);
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
  
    useEffect(() => {
      const fetchCities = async () => {
        try {
          const response = await axios.get("http://localhost:5174/api/city/all-cities");
          setCities(response.data); // assuming response.data is an array of cities
        } catch (error) {
          console.error("Error fetching cities:", error);
          alert("Failed to load cities.");
        }
      };
  
      fetchCities();
    }, []);
  
    const filteredCities = cities.filter(city =>
      city.name?.toLowerCase().includes(query.toLowerCase())
    );
  
    const handleSelect = (cityName) => {
      onSelectCity(cityName);
      setQuery(cityName);
      setShowDropdown(false);
    };

    const ref = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClose(); // call the function to hide CitySelector
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);
  
  
    return (
      <div className="p-4 relative">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search city..."
          value={query}
          onClick={() => setShowDropdown(true)}
          onChange={e => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
        />
        {showDropdown && (
          <ul className="w-full  mt-1 border rounded bg-white shadow max-h-40 overflow-y-auto z-10">
            {filteredCities.length === 0 ? (
              <li className="p-2 text-gray-500">No cities found</li>
            ) : (
              filteredCities.map((city) => (
                <li
                  key={city._id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(city.name)}
                >
                  {city.name}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    );
  }
  