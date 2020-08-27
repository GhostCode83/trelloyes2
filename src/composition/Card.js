import React from 'react';
import './Card.css';

export default function Card(props) {

  return (
    <div className='Card'>
      <button 
        type='button'
        onClick = {() => props.onDeleteItem(props.item)}
      >
        delete
      </button>
      <button 
        type='button'
        onClick = {() => props.onRandomItem(props.onRandomItem)}
      >
        random
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}