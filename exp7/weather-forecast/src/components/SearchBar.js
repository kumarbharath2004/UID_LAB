import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city); // Call the parent component's search function
      setCity(''); // Clear the input after search
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update input state
      />
      <button onClick={handleSearch}>Search</button> {/* Search button */}
    </div>
  );
};

export default SearchBar;
