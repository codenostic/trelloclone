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
      <div>
        {!showForm && (
          <button onClick={(e)=>{
            e.stopPropagation();
            this.setState({showAddCardForm: true})
          }
          }>NewCard</button>
        )}
        {showForm && (
          <form
            onSubmit={(e)=> {
              e.preventDefault();
              this.props.newCard(this.props.listId, input.value);
              this.setState({showAddCardForm: false});
              input.value="";
            }}
          >
            <input 
              type="text" 
              placeholder="card name"
              ref={node => input = node}
              />
            <button type="submit">save</button>
            <button onClick={(e)=> {
              e.stopPropagation();
              this.setState({showAddCardForm:false})
            }}>cancel</button>
          </form>
        )}
      </div>
    )
  }
}

export default AddCard