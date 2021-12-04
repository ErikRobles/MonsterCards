import React from 'react';
import './card-list.styles.css';
import CardComponent from '../Card/CardComponent';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <CardComponent key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
