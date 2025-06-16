import React from 'react';
import { Link } from 'react-router-dom';


const getDriveImageUrl = (link) => {
  const match = link?.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}`;
  }
  return link;
};


const ProfileCard = ({ employee }) => {
  const imageUrl = getDriveImageUrl(employee.image1 || employee.image1);

  return (
    <Link
      to={`/profile/${employee._id}`}
      className="border rounded p-4 hover:shadow-lg flex"
    >
      <div className='flex justify-center items-center mb-2'>
        <img
          src={employee.image1}
          alt={employee.name}
          className="w-30 h-40 object-cover rounded"
        />
      </div>
      <div className='px-4'>
        <h3 className="mt-2 font-bold">{employee.name}</h3>
        <p>{employee.type}</p>
        <p>{employee.age} years old</p>
      </div>
    </Link>
  );
};

export default ProfileCard;
