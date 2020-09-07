import React from 'react';

const Card = ({ robot }) => {
  return (
    <div className="dib tc bg-light-green grow br3 pa3 ma3 shadow-5">
      <img alt={robot.name} src={`https://robohash.org/${robot.id}?200X200`} />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  )
};
export default Card;