import React from 'react';
import Card from './card';
import AddCard from './add_card'

const List = ({list, newCard, updateCard, deleteCard}) => {
  const cardList = [];
  for(var key in list.cards){
    const card = list.cards[key];
    const item = <Card card={card} key={card.id} updateCard={updateCard} deleteCard={deleteCard} listId={list.id}/>
    cardList.push(item)
  }
  return (
    <li className="list-item list-wrapper">
      <div className="list-header">{list.name}</div>
      <ul className="card-list">
        {cardList}
        <AddCard newCard={newCard} listId={list.id}/> 
      </ul>
    </li>
  )
}

export default List