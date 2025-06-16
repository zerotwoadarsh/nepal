// App.jsx
import React, { useState, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoutes';
import CitySelector from './components/CitySelector';
// import { ProfileCard } from './components/ProfileCard';
import Header from './components/Header';
import Footer from './components/Footer';
import CityEmployees from './components/CityEmployee';
import ProfileList from './components/ProfileList';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './AdminControl/Login/Login';
import DashBoard from './AdminControl/DashBoard';
import AddCity from './AdminControl/CityController/AddCity';
import AddUser from './AdminControl/UserController/AddUser';
import ProfilePage from "./components/ProfilePage"


function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [isCitySelectorVisible, setIsCitySelectorVisible] = useState(false);
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const citiesRef = useRef(null);
  const homeRef = useRef(null);

  const toggleCitySelector = () => {
    setIsCitySelectorVisible(prev => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const handleCitySelect = (city) => {
    console.log("City selected:", city);
    setIsCitySelectorVisible(false);
    navigate(`/city/${city}`);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onSearchClick={toggleCitySelector} />
      <Navbar />
      {isCitySelectorVisible && (
        <CitySelector
          onSelectCity={(city) => {
            handleCitySelect(city);
            navigate(`/city/${city.toLowerCase()}`);
          }}
          onClose={() => setIsCitySelectorVisible(false)}
        />
      )}

      <Routes>
        {/* <Route path="/city/:cityName" element={<ProfileList />} /> */}
        <Route path="/city/:cityName" element={<CityEmployees />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/admin/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
        <Route path="/admin/add-city" element={<ProtectedRoute><AddCity /></ProtectedRoute>} />
        <Route path="/admin/add-user" element={<ProtectedRoute><AddUser /></ProtectedRoute>} />

      </Routes>

      <Footer
        onSearchClick={toggleCitySelector}
        onAboutClick={() => scrollToSection(aboutRef)}
        onCitiesClick={() => scrollToSection(citiesRef)}
      />
    </>
  );
}

export default AppWrapper;
