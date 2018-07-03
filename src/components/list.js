import React from 'react';
import Card from './card';

const List = ({list, newCard}) => {
  const cardList = [];
  for(var key in list.cards){
    const card = list.cards[key];
    const item = <Card card={card} key={card.id} />
    cardList.push(item)
  }
  return (
    <li className="list-item">
      {list.name}
      <hr />
      <ul className="card-list">
        {cardList}
        <button onClick={() => newCard(list.id)} >
          new card
        </button>
      </ul>
    </li>
  )
}

export default List