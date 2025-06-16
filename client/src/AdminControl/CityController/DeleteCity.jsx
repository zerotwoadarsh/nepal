import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteCity = () => {
    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch cities
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const res = await axios.get('http://localhost:5174/api/city/all-cities');
                setCities(res.data || []);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch cities');
            }
        };

        fetchCities();
    }, []);

    // Handle deletion
    const handleDelete = async () => {
        if (!selectedCity) return;
        setIsDeleting(true);
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem("token");
            const res = await axios.delete(
                `http://localhost:5174/api/city/delete-city/${selectedCity._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Ensure 'token' is defined correctly
                    },
                }
            );
            setSuccess(res.data.message || 'City deleted successfully');
            setCities(prev => prev.filter(city => city._id !== selectedCity._id));
            setSelectedCity(null);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Failed to delete city');
        } finally {
            setIsDeleting(false);
        }
    };

    // Filter cities
    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Delete City</h2>

            <input
                type="text"
                placeholder="Search city..."
                className="border px-3 py-2 rounded w-full mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="max-h-64 overflow-y-auto border rounded p-2 mb-4">
                {filteredCities.map(city => (
                    <div
                        key={city._id}
                        onClick={() => setSelectedCity(city)}
                        className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-100 ${selectedCity?._id === city._id ? 'bg-blue-100 font-semibold' : ''
                            }`}
                    >
                        {city.name}
                    </div>
                ))}
            </div>

            {selectedCity && (
                <div className="mt-4">
                    <p className="mb-2">
                        Selected City: <span className="font-bold">{selectedCity.name}</span>
                    </p>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Deleting...' : 'Confirm Delete'}
                    </button>
                </div>
            )}

            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-600 mt-4">{success}</p>}
        </div>
    );
}

export default DeleteCity;