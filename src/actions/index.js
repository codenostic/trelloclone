
export const ADD_LIST = 'ADD_LIST';
export function addList(){
  return {
    type: ADD_LIST
  }
}

export const ADD_CARD = 'ADD_CARD';
export function addCard(listId){
  return{
    type: ADD_CARD,
    listId
  }
}

export const UPDATE_CARD = 'UPDATE_CARD';

export const DELETE_CARD = 'DELETE_CARD';


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

  },
  'list-3': {
    id:3,
    name: 'three',
    cards: {
      'card-1':{
        id: 1, 
        title: 'list3Card1'
      },
      'card-2':{
        id:2,
        title: 'list3card2'
      }
    }

  }
}