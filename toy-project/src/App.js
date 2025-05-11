import './App.css';
import Header from './components/Header.js';
import Middle from './components/Middle.js';
import Bottom from './components/Bottom.js';
import Ground from './components/Ground.js';
import Review from './components/Review.js';
import Detail from './components/Detail/Detail.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MainPage() {
  return (
    <div className="container">    
      <Header />
      <Middle />
      <Review />
      <Bottom />
      <hr style={{ width: '90%' }} />
      <Ground />   
    </div>
  );
}
function DetailPage(){
  
}

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

