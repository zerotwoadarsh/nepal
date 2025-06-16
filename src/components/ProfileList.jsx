// pages/EmployeeListPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProfileList() {
  const { cityName } = useParams();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Replace with real API
    const dummyData = {
      Mumbai: [
        { name: 'Amit', talent: 'Plumber', experience: 5 },
        { name: 'Priya', talent: 'Electrician', experience: 3 },
      ],
      Delhi: [
        { name: 'Ravi', talent: 'Painter', experience: 4 },
      ],
    };

    setEmployees(dummyData[cityName] || []);
  }, [cityName]);


  const [user, setUser] = useState(null);
  useEffect(() => {

    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5174/api/user/all-users`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
 setUser(data.users);
      } catch (error) {
        console.error("Error fetching employees:", error);
        alert("Failed to load employees.");
      }
    };

    fetchUser();

  }, []);

  console.log(fetchUser)
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employees in {cityName}</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((emp, idx) => (
          <div key={idx} className="border p-4 mb-2 rounded shadow">
            <h3 className="font-semibold">{emp.name}</h3>
            <p>Talent: {emp.talent}</p>
            <p>Experience: {emp.experience} years</p>
          </div>
        ))
      )}
    </div>
  );
}
