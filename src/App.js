// import logo from './logo.svg';
import './App.css';
import sushiData from './data/sushiData.js'
import SushiItem from './components/SushiItem';
import Navbar from './components/Navbar'



function App() {
  const sushiElements = sushiData.map((element, index) =>{
    return <SushiItem sushi={element} key = {index} />
  });

  return (
    <div className="App">

      <Navbar/>

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
