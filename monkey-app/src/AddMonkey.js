import React, { Component } from 'react'

class AddMonkey extends Component {
  state = {
    name: null,
    salary: null,
    belt: null
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    //console.log(this.state);
    console.log(this.props);
    this.props.addMonkey(this.state);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/>
          <label htmlFor="salary">Salary:</label>
          <input type="text" id="salary" onChange={this.handleChange}/>
          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddMonkey