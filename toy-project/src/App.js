// App.js

import './App.css';
import Header from './components/Header.js';
import Middle from './components/Middle.js';
import Bottom from './components/Bottom.js';
import Ground from './components/Ground.js';
import Review from './components/Review.js';
import Detail from './components/Detail/Detail.js';
import Detail_Header from './components/Detail/Detail_Header.js';
import Detail_Ground from './components/Detail/Detail_Ground.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Detail2_1 from './components/Detail2/Detail2_1';
import Detail2_2 from './components/Detail2/Detail2_2';
import Detail2_3 from './components/Detail2/Detail2_3';
import Detail2_4 from './components/Detail2/Detail2_4';
import Detail2_5 from './components/Detail2/Detail2_5';
import Detail2_6 from './components/Detail2/Detail2_6';
import Detail2_7 from './components/Detail2/Detail2_7';
import Detail2_8 from './components/Detail2/Detail2_8';
import Detail2_9 from './components/Detail2/Detail2_9';
import Detail2_10 from './components/Detail2/Detail2_10';
import Detail2_11 from './components/Detail2/Detail2_11';
import Detail2_12 from './components/Detail2/Detail2_12';
import Detail2_13 from './components/Detail2/Detail2_13';
import Detail2_14 from './components/Detail2/Detail2_14';
import Detail2_15 from './components/Detail2/Detail2_15';
import Detail2_16 from './components/Detail2/Detail2_16';
import Detail2_17 from './components/Detail2/Detail2_17';
import Detail2_18 from './components/Detail2/Detail2_18';

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

function DetailPage() {
  return (
    <div>
      <Detail_Header />
      <Detail />
      <hr style={{ width: '90%' }} />
      <Detail_Ground />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />

        <Route path="/detail/1" element={<div><Detail_Header /><Detail2_1 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/2" element={<div><Detail_Header /><Detail2_2 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/3" element={<div><Detail_Header /><Detail2_3 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/4" element={<div><Detail_Header /><Detail2_4 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/5" element={<div><Detail_Header /><Detail2_5 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/6" element={<div><Detail_Header /><Detail2_6 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/7" element={<div><Detail_Header /><Detail2_7 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/8" element={<div><Detail_Header /><Detail2_8 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/9" element={<div><Detail_Header /><Detail2_9 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/10" element={<div><Detail_Header /><Detail2_10 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/11" element={<div><Detail_Header /><Detail2_11 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/12" element={<div><Detail_Header /><Detail2_12 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/13" element={<div><Detail_Header /><Detail2_13 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/14" element={<div><Detail_Header /><Detail2_14 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/15" element={<div><Detail_Header /><Detail2_15 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/16" element={<div><Detail_Header /><Detail2_16 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/17" element={<div><Detail_Header /><Detail2_17 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
        <Route path="/detail/18" element={<div><Detail_Header /><Detail2_18 /><hr style={{ width: '90%' }} /><Detail_Ground /></div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
