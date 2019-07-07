import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './addTodo'



class App extends Component {
  state = {
    todos: [
      {id:1,content: 'code a bit more'},
      {id:2,content: 'hang out with little hedgie🦔'},
      {id:3,content: 'binge watch The Silicon Valley'}
    ]
  }
  deleteTodo = (id) => {
    //console.log(id);
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render(){
    return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App;
