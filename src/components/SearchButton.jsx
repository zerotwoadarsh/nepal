import React from 'react';

const SearchButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-violet-800 font-semibold px-3 py-1 rounded"
    >
      Search
    </button>
  );
};

export default SearchButton;
