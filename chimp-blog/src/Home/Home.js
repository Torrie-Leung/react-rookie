import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('mario');
  const [level,setLevel] = useState(2300)
  const handleClick = (e) => {
    console.log(e);
  }
  const handleClickName = (name,e) => {
    console.log('hey'+name, e.target);
  }
  const changeName = () => {
    setName('Luigi')
    setLevel(4600)

  }
  return ( 
    <div className="home">
      <h2>HomePage</h2>
      <button onClick ={handleClick}>hey event</button>
      <button onClick = {(e) => handleClickName('Yoshi',e)}>Click me show Name</button>

      <p onClick={changeName}>{name} is level {level}</p>
    </div>
   );
}
 
export default Home;