import React from 'react';

//use functional component when we don't need the state and primarilly concern the UI
const Monkey = ({monkeys}) => {
  //destructoring inside {} directly
  
  
  //console.log(props);
  //const { monkeys } = props;
  const monkeyList = monkeys.map(monkey => {
    return (
      <div className="monkey" key={monkey.id}>
        <div>Name: {monkey.name}</div>
        <div>job: {monkey.job}</div>
        <div>Belt: {monkey.belt}</div>
      </div>
    )
  })
  return (
    <div className="monkey-list">
      { monkeyList }
    </div>
  )
  
}

export default Monkey