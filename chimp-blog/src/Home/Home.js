const Home = () => {
  const handleClick = (e) => {
    console.log(e);
  }
  const handleClickName = (name,e) => {
    console.log('hey'+name, e.target);
  }
  return ( 
    <div className="home">
      <h2>HomePage</h2>
      <button onClick ={handleClick}>hey event</button>
      <button onClick = {(e) => handleClickName('Yoshi',e)}>Click me show Name</button>
    </div>
   );
}
 
export default Home;