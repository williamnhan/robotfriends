import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pd2">
      <input
        className="pa1 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;