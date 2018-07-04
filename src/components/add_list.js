import React, {Component} from 'react';

class AddList extends Component{
  constructor(props){
    super(props);
    this.state = {
      showAddListForm: false
    }
  }
  render(){
    const showForm = this.state.showAddListForm
    let input; 
    return(
      <form 
        onSubmit={(e)=> {
          e.preventDefault();
          this.props.onClick(input.value);
          this.setState({showAddListForm:false})
          input.value="";
        }}
        className="add-list-form"
      >
        {!showForm && (
          <span 
            onClick={(e)=> {
              e.stopPropagation();
              this.setState({showAddListForm: true})
            }}
            className="add-list-button">
            <span className="glyphicon glyphicon-plus"></span>  Add Another List
          </span>
        )}
        {showForm && (
          <div>
            <input 
              type="text" 
              ref={node => input = node}
              className="form-control" 
              placeholder="List Name" />
            <div className="control-buttons">
              <button
                type="submit" 
                className="btn btn-success"
                >Save</button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  this.setState({showAddListForm: false})
                }}
                className="btn btn-danger"
              >Cancel</button>
            </div>
          </div>
        )}
      </form>
    )
  }
}

export default AddList