import React, {Component} from 'react'

class Card extends Component{
  constructor(props){
    super(props)
    this.state = {
      showEditCardForm: false,
      value: this.props.card.title
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteCard = this.deleteCard.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    const listId = this.props.listId;
    const cardId = this.props.card.id;
    const cardTitle = this.state.value;
    this.props.updateCard(listId, cardId, cardTitle)
    this.setState({showEditCardForm: false})
    event.preventDefault();
  }
  deleteCard(event){
    const listId = this.props.listId;
    const cardId = this.props.card.id;
    this.props.deleteCard(listId, cardId);
    this.setState({showEditCardForm: false});
    event.stopPropagation();
  }
  render(){
    const showForm = this.state.showEditCardForm;
    return(
      <li className="card-list-item">
        {!showForm && (
          <div>
          {this.props.card.title}
          <button onClick={(e) => {
            e.stopPropagation();
            this.setState({showEditCardForm: true})
          }}>
            edit
          </button>
          </div>
        )}
        {showForm && (
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button
              type="submit"
            >Update</button>
            <button
              onClick={this.deleteCard}
            >Delete</button>
            <button
              onClick={(e)=> {
                e.stopPropagation();
                this.setState({showEditCardForm:false})
              }}
            >Cancel</button>
          </form>
        )}
      </li>
    )
  }
}

export default Card;