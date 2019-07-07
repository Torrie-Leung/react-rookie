import React from 'react';

//use functional component when we don't need the state and primarilly concern the UI
const Monkey = ({monkeys}) => {
  //destructoring inside {} directly
  
  
  //console.log(props);
  //const { monkeys } = props;

  // const monkeyList = monkeys.map(monkey => {
  //   if(monkey.salary >10000){
  //     return (
  //     <div className="monkey" key={monkey.id}>
  //       <div>Name: {monkey.name}</div>
  //       <div>job: {monkey.job}</div>
  //       <div>Belt: {monkey.belt}</div>
  //       <div>Salary: {monkey.salary}</div>
  //     </div>
  //   )
  //   }else {
  //     return null
  //   }
    
  // })

  // const monkeyList = monkeys.map(monkey => {
  //   return monkey.salary > 10000 ? (
  //     <div className="monkey" key={monkey.id}>
  //       <div>Name: {monkey.name}</div>
  //       <div>job: {monkey.job}</div>
  //       <div>Belt: {monkey.belt}</div>
  //       <div>Salary: {monkey.salary}</div>
  //     </div>
  //   ) : null;
  // })
  return (
    <div className="monkey-list">
      {/* {monkeyList} */}
      {
         monkeys.map(monkey => {
          return monkey.salary > 10000 ? (
            <div className="monkey" key={monkey.id}>
              <div>Name: {monkey.name}</div>
              <div>job: {monkey.job}</div>
              <div>Belt: {monkey.belt}</div>
              <div>Salary: {monkey.salary}</div>
            </div>
          ) : null;
          })
      }
    </div>
  )
  
}

export default Monkey