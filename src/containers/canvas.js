import React, {Component} from 'react';
import {connect } from 'react-redux';
import List from '../components/list'
import {addList, addCard, updateCard, deleteCard} from '../actions/index';
import AddList from '../components/add_list';

class Canvas extends Component{
  render(){
    const board = this.props.board;
    const lists = []
    for(var key in board){
      const list = board[key];
      const item = <List 
          list={list} 
          key={list.id} 
          newCard={this.props.newCard} 
          updateCard={this.props.updateCard}
          deleteCard={this.props.deleteCard}
          />
      lists.push(item);
    }
    return (
      <ul className="list">
        {lists}
        <div className="list-wrapper" style={{"float":"left" }}>
          <AddList onClick={this.props.onAddlist}/>
        </div>
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    board: state.board
  }
}

function mapsDispatchToProps(dispatch){
  return {
    onAddlist: (listName) => {
      dispatch(addList(listName))
    }, 
    newCard: (listId, cardTitle) =>{
      dispatch(addCard(listId, cardTitle))
    }, 
    updateCard: (listId, cardId, cardTitle) => {
      dispatch(updateCard(listId, cardId, cardTitle))
    },
    deleteCard: (listId, cardId) => {
      dispatch(deleteCard(listId, cardId))
    }
  }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Canvas)