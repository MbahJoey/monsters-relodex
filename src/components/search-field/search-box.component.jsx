import React from 'react';
import './search-box.styles.css';

//Functional component
//doesn't have lifecycle methods access and internal state
export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);