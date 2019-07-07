import React, { Component } from 'react';
import Monkey from './Monkey';
import AddMonkey from './AddMonkey';



class App extends Component {
  state = {
    monkeys: [
      {name: 'Mario', job: 'player', belt: 'black',salary:23000,id:1},
      {name: 'Yoshi', job: 'player', belt: 'blue',salary:13000,id:2},
      {name: 'Chimp', job: 'developer', belt: 'yellow',salary:2300,id:3}
    ]
  }
  addMonkey = (monkey) => {
    console.log(monkey);
    monkey.id = Math.random();
    //make a copy of the original state
    let monkeys = [...this.state.monkeys,monkey]
    this.setState({
      monkeys:monkeys
    })
  }
  render(){
    return (
    <div className="App">
      <h1>My first React app</h1>
      <p>welcome:)</p>
      <Monkey monkeys={this.state.monkeys}/>
      <AddMonkey addMonkey={this.addMonkey} testP="aha"/>
    </div>
  );
  }
}

export default App;
