import React from 'react';
import Card from './card';
import AddCard from './add_card'

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
        <AddCard newCard={newCard} listId={list.id}/> 
      </ul>
    </li>
  )
}

export default List