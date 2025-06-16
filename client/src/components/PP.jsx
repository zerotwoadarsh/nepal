import React from "react";
import trial1 from "../assets/trial1.jpg"
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ProfilePage = () => {

  const { id } = useParams(); // ID from the URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5174/api/user/${id}");
        setUser(res.data.user);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);


  return (
    <div className="p-4 flex flex-col items-center justify-center">

      <div className=" w-full flex items-center justify-center">

        <h1 className="text-6xl text-center font-extrabold">
          Meet {user}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full  p-8">
        <div className="h-auto w-auto flex sm:flex-row flex-col-reverse items-center justify-center">
          <PhotoProvider>
            
            <div className="flex sm:flex-col flex-row gap-1 justify-center items-center">
            <PhotoView src={trial1}>
                <img
                  src={trial1}
                  className="w-[60px] h-[80px] object-cover rounded cursor-pointer"
                  alt="Profile"
                />
              </PhotoView>
            <PhotoView src={trial1}>
                <img
                  src={trial1}
                  className="w-[60px] h-[80px] object-cover rounded cursor-pointer"
                  alt="Profile"
                />
              </PhotoView>
            <PhotoView src={trial1}>
                <img
                  src={trial1}
                  className="w-[60px] h-[80px] object-cover rounded cursor-pointer"
                  alt="Profile"
                />
              </PhotoView>
            <PhotoView src={trial1}>
                <img
                  src={trial1}
                  className="w-[60px] h-[80px] object-cover rounded cursor-pointer"
                  alt="Profile"
                />
              </PhotoView>
            <PhotoView src={trial1}>
                <img
                  src={trial1}
                  className="w-[60px] h-[80px] object-cover rounded cursor-pointer"
                  alt="Profile"
                />
              </PhotoView>
            </div>
            <div>
              <PhotoView src={trial1}>
                <img
                  src={trial1}
                  className="w-[300px] h-[400px] object-cover rounded cursor-pointer m-4"
                  alt="Profile"
                />
              </PhotoView>
            </div>
          </PhotoProvider>
        </div>
        <div>
          <p><strong>Talent:</strong> Sky Rocket</p>
          <p><strong>Experience:</strong> 2 years</p>
          <p><strong>Bio:</strong> nothing</p>
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;