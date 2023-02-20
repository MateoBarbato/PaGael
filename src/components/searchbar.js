import React from 'react';
import {FormControl,Container} from 'react-bootstrap'

const SearchBar = ( {handleChange, filter} ) => {
  return <Container className='searchBarContainer mt-5 p-3'>
    <FormControl className='searchbar ' type='text' placeholder='Search here' onChange={handleChange} value={filter} />
    </Container>;
};

export default SearchBar;
