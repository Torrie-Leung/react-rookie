const Home = () => {
  const handleClick = () => {
    console.log('hey');
  }
  const handleClickName = (name) => {
    console.log('hey'+name);
  }
  return ( 
    <div className="home">
      <h2>HomePage</h2>
      <button onClick = {() => {
        handleClickName('Yoshi')
      }}>Click me</button>
    </div>
   );
}
 
export default Home;