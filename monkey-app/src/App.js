import React, { Component } from 'react';
import Monkey from './Monkey';



class App extends Component {
  state = {
    monkeys: [
      {name: 'Mario', job: 'player', belt: 'black',id:1},
      {name: 'Yoshi', job: 'player', belt: 'blue',id:2},
      {name: 'Chimp', job: 'developer', belt: 'yellow',id:3}
    ]
  }
  render(){
    return (
    <div className="App">
      <h1>My first React app</h1>
      <p>welcome:)</p>
      <Monkey monkeys={this.state.monkeys}/>
    </div>
  );
  }
}

export default App;
