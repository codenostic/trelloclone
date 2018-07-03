import { ADD_LIST, ADD_CARD, DELETE_CARD, UPDATE_CARD } from '../actions/index'

export default function boardReducer(state = {}, action){
  switch(action.type){
    case ADD_LIST:
      const id = Object.keys(state).length + 1;
      const listId = 'list-'+id;
      let newObj = {}
      newObj[listId] = {id, name:action.listName, cards: {}};
      return Object.assign({}, state, newObj)
    case ADD_CARD:
      const targetId = 'list-'+action.listId;
      const targetList = state[targetId];
      const cards = targetList.cards;
      let newCard = {};
      const newId = Object.keys(cards).length + 1;
      const newCardId = 'card-'+newId;
      newCard[newCardId] = {id: newId, title: action.title};
      const newCards = Object.assign({}, cards, newCard)
      let newList = {}
      newList[targetId] = Object.assign({}, targetList, {cards:newCards});
      return Object.assign({}, state, newList)
    case UPDATE_CARD:
      return state
    case DELETE_CARD:
      return state
    default:
      return state;
  }
}