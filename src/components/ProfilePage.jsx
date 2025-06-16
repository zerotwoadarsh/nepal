import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProfilePage = () => {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5174/api/user/${id}`);
        setUser(res.data.user);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  if (!user) return <p className="text-center mt-10">No user found.</p>;


  const images = [user.image2, user.image3, user.image4, user.image5, user.image6].filter(Boolean); ;

  return (
    <div className="p-4 flex flex-col items-center justify-center bg-violet-100">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-3xl text-center font-extrabold w-full border-b-2">
          Meet {user.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full p-8 ">
        {/* Photo Section */}
        <div className="flex sm:flex-row flex-col-reverse items-center justify-center sm:border-r-2 border-r-0 border-b-2 sm:border-b-0 pb-2 gap-4">
  <PhotoProvider>
    <div className="flex sm:flex-col flex-row gap-2 justify-center items-center">
      {user?.images?.length > 0 ? (
        user.images.map((img, idx) => (
          <PhotoView key={idx} src={img}>
            <img
              src={img}
              className="w-[60px] h-[80px] object-cover rounded cursor-pointer"
              alt={`Thumbnail ${idx}`}
            />
          </PhotoView>
        ))
      ) : (
        <div className="flex sm:flex-col flex-row gap-1 justify-center items-center">
          {images.map((src, i) => (
            <PhotoView src={src} key={i}>
              <img
                src={src}
                className="w-[60px] h-[80px] object-cover rounded cursor-pointer"
              />
            </PhotoView>
          ))}
        </div>
      )}
    </div>

    <div className="flex justify-center items-center">
      <PhotoView src={user.image1}>
        <img
          src={user.image1}
          className="w-[300px] h-[400px] object-cover rounded cursor-pointer"
          alt="Profile"
        />
      </PhotoView>
    </div>
  </PhotoProvider>
</div>


        {/* User Info Section */}
        <div className="space-y-4 text-lg">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Type:</strong> {user.type}</p>
          <p><strong>Age:</strong> {user.age ? `${user.age} years old` : 'N/A'}</p>
          <p><strong>Height:</strong> {user.height ? `${user.height} cm` : 'N/A'}</p>
          <p><strong>Weight:</strong> {user.weight ? `${user.weight} Kg` : 'N/A'}</p>
          <p><strong>Bio:</strong> {user.description || 'No bio available'}</p>
          <p><strong>Price:</strong> {user.price || 'Free'}</p>
          <div className="mt-4">
            <a
              href={`https://wa.me/977${user.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700 transition-colors"
            >
              Contact {user.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
