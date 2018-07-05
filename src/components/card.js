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
          <p className="card-heading">{this.props.card.title}</p>
          <span 
            className="pull-right click-edit"
            onClick={(e) => {
              e.stopPropagation();
              this.setState({showEditCardForm: true})
            }}
          >
            <span className="glyphicon glyphicon-pencil"></span>
          </span>
          </div>
        )}
        {showForm && (
          <form onSubmit={this.handleSubmit}>
            <input 
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div className="control-buttons">
            <button
              className="btn btn-success"
              type="submit"
            >Update</button>
            <button
              className="btn btn-danger"
              onClick={(e)=> {
                e.stopPropagation();
                this.setState({showEditCardForm:false})
              }}
            >Cancel</button>
            <span
              className="pull-right click-delete"
              onClick={this.deleteCard}
            >
            <span
              className="glyphicon glyphicon-trash"
            ></span>
            </span>

            </div>
          </form>
        )}
      </li>
    )
  }
}

export default Card;