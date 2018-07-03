import React, {Component} from 'react';
import {connect } from 'react-redux';
import List from '../components/list'
import {addList, addCard} from '../actions/index';

class Canvas extends Component{
  render(){
    const board = this.props.board;
    const lists = []
    for(var key in board){
      const list = board[key];
      const item = <List list={list} key={list.id} newCard={this.props.newCard} />
      lists.push(item);
    }
    return (
      <ul className="list">
        {lists}
        <li className="list-item" onClick={this.props.onAddlist}>
          + Add List
        </li>
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
    onAddlist: () => {
      dispatch(addList())
    }, 
    newCard: (listId) =>{
      dispatch(addCard(listId))
    } 
  }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Canvas)