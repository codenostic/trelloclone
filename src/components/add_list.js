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
      <div>
        {!showForm &&(
          <button onClick={(e)=> {
            e.stopPropagation();
            this.setState({showAddListForm: true})
          }}>+ AddList</button>
        )}
        {showForm && (
          <form 
            onSubmit={(e)=> {
              e.preventDefault();
              this.props.onClick(input.value);
              this.setState({showAddListForm:false})
              input.value="";
            }}
          >
            <input 
              type="text" 
              placeholder="list name" 
              ref={node => input = node}
              />
            <button 
              type="submit"
            >Save</button>
            <button onClick={(e)=>{
              this.setState({showAddListForm: false})
            }}>Cancel</button>
          </form>
        )}
      </div>
    )
  }
}

export default AddList