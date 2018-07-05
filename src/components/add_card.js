import React, {Component} from 'react';

class AddCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      showAddCardForm: false
    }
  }
  render(){
    const showForm = this.state.showAddCardForm
    let input;
    return(
          <form
            onSubmit={(e)=> {
              e.preventDefault();
              this.props.newCard(this.props.listId, input.value);
              this.setState({showAddCardForm: false});
              input.value="";
            }}
            className="add-card-form"
          >
          {!showForm && (
          <div 
            onClick={(e)=>{
              e.stopPropagation();
              this.setState({showAddCardForm: true})
            }
            }
            className="add-card-button"
            >
            <span
              className="glyphicon glyphicon-plus"
            ></span>
              Add New Card</div>
        )}
        {showForm && (
          <div>
            <input 
              className="form-control"
              type="text" 
              placeholder="card name"
              ref={node => input = node}
              />
              <div className="control-buttons">
            <button 
              className="btn btn-success"
              type="submit"
            >save</button>
            <button 
              className="btn btn-danger"
              onClick={(e)=> {
                e.stopPropagation();
                this.setState({showAddCardForm:false})
              }}>cancel</button>
            </div>
            </div>
          )}
            </form>
      )
  }
}

export default AddCard