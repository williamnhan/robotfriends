import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    robots.map((robot, id) => {
      return (
        <Card key={id}
          robot={robot} />
      )
    })
  );
};

export default CardList;