
export const ADD_LIST = 'ADD_LIST';
export function addList(listName){
  return {
    type: ADD_LIST,
    listName
  }
}

export const ADD_CARD = 'ADD_CARD';
export function addCard(listId, title){
  return{
    type: ADD_CARD,
    listId, 
    title
  }
}

export const UPDATE_CARD = 'UPDATE_CARD';
export function updateCard(listId, cardId, title){
  return{
    type: UPDATE_CARD,
    listId,
    cardId, 
    title
  }
}

export const DELETE_CARD = 'DELETE_CARD';
export function deleteCard(listId, cardId){
  return{
    type: DELETE_CARD,
    listId,
    cardId
  }
}


export const board = {
  'list-1':{
    id:1, 
    name: 'one',
    cards: {
      'card-1':{
        id: 1, 
        title: 'hello'
      },
      'card-2':{
        id:2,
        title: 'list1card2'
      }
    }
  } ,
  'list-2':{
    id:2, 
    name: 'two',
    cards: {
      'card-1':{
        id: 1, 
        title: 'list2card1'
      },
      'card-2':{
        id:2,
        title: 'list2card2'
      }
    }
  }
}