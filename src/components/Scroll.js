import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div style={{overflow: 'scroll', border: '0px solid black', height: '400px'}}>
      {children}}
    </div>
  );
};

export default Scroll;