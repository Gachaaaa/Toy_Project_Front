import './App.css';
import Header from './components/Header.js';
import Middle from './components/Middle.js';
import Bottom from './components/Bottom.js';
import Ground from './components/Ground.js';
import Review from './components/Review.js';


function App() {
  return (
    <div className="container">
      <Header />
      <Middle />
      <Review />
      <Bottom />
      <hr style={{'width': '90%'}}/>
      <Ground />
    </div>
  );
}

export default App;
