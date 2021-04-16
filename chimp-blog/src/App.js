
import Navbar from './Navbar';
import Home from './Home/Home'
// in version 17 we don't need to import react into the root component

function App() {
  const title = 'psst';
  const likes = 50;
  const master = { name: 'Yoshi', level: 30 }
  const shameOnAcc = 'https://www.bilibili.com/video/BV1U54y1876i?from=search&seid=12668816523087272100'
  return (
    // jsx
    <div className="App">
      <div className="content">
        <Navbar/>
        <div className="content">
          <Home/>
        </div>
        <p>Liked { likes } times</p>
        <p>{master.name}</p>
        <p>random number:{Math.random()*10}</p>
        <p>{[1,5,7]}</p>
        <a href={shameOnAcc}>The Accountant Of Auschwitz
</a>
      </div>
    </div>
  );
}

export default App;
