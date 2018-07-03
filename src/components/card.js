import React from 'react'

const Card = ({card}) => {
  return(
    <li className="card-list-item">
      {card.title}
    <button>edit</button>
    </li>
  )
}

export default Card;