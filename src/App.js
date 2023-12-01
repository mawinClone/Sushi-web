import logo from './logo.svg';
import './App.css';
import sushiData from './data/sushiData.js'
import SushiItem from './components/SushiItem';


function App() {
  const sushiElements = sushiData.map((sushi, index) =>{
    return <SushiItem key = {index} sushi={sushi}/>
  });

  return (
    <div className="App">

      {/* header */}

      <div className="main-content">
        {/* main content */}
      </div>

      <div className="app-grid">
        {sushiElements}
      </div>

      <div className="Footer">
        {/* footer */}
      </div>
      
    </div>
  );
}

export default App;
