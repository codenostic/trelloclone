import React, {Component} from 'react';
import {connect } from 'react-redux';
import List from '../components/list'
import {addList, addCard} from '../actions/index';
import AddList from '../components/add_list';

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
        <li className="list-item">
          <AddList onClick={this.props.onAddlist}/>
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
    onAddlist: (listName) => {
      dispatch(addList(listName))
    }, 
    newCard: (listId, cardTitle) =>{
      dispatch(addCard(listId, cardTitle))
    } 
  }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Canvas)