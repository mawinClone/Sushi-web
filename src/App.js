// import logo from './logo.svg';
import "./App.css";
import sushiData from "./data/sushiData.js";
import SushiItem from "./components/SushiItem";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";

function App() {
  const sushiElements = sushiData.map((element, index) => {
    return <SushiItem sushi={element} key={index} />;
  });

  return (
    <div className="App">
      <Navbar />

      <div className="main-content">
        <MainContent />
      </div>

      <div className="app-grid">
        <div className="grid-content">
          {sushiElements}
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
