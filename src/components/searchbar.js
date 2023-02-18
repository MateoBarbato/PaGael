import React from 'react';

const SearchBar = ({ handleChange, filter }) => {
  return <input type='text' placeholder='Search here' onChange={handleChange} value={filter} />;
};

export default SearchBar;
