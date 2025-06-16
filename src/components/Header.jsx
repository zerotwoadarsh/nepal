import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SearchButton from './SearchButton';

const Header = ({ onSearchClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="bg-violet-800 text-white px-4 py-3 flex justify-between items-center relative">
      <div className="text-xl font-bold">Exotic Nepal</div>
      <div className="flex items-center gap-4">
        <SearchButton onClick={onSearchClick} />
        {/* <button className="hidden md:block bg-white text-violet-800 font-semibold px-3 py-1 rounded">
          Post Your Ad
        </button> */}
      </div>
    </div>
  );
};

export default Header;
