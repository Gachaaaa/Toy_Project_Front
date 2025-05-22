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
import Detail_Review from './components/Detail/Detail_Review.js';
import Login from './components/Login.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
    <div className="container">
      <Detail_Header />
      <Detail />
      <hr style={{ width: '90%'}} />
      <Detail_Ground />
    </div>
  );
}


function ProductPage() {
  const { productId } = useParams();
  const id = parseInt(productId);

  let productNumber;
  switch (id) {
    case 1:
      productNumber = <Detail2_1 />;
    case 2:
      productNumber = <Detail2_2 />;
    case 3:
      productNumber = <Detail2_3 />;
    case 4:
      productNumber = <Detail2_4 />;
    case 5:
      productNumber = <Detail2_5 />;
    case 6:
      productNumber = <Detail2_6 />;
    case 7:
      productNumber = <Detail2_7 />;
    case 8:
      productNumber =<Detail2_8 />;
    case 9:
      productNumber = <Detail2_9 />;
    case 10:
      productNumber = <Detail2_10 />;
    case 11:
      productNumber = <Detail2_11 />;
    case 12:
      productNumber = <Detail2_12 />;
    case 13:
      productNumber = <Detail2_13 />;
    case 14:
      productNumber = <Detail2_14 />;
    case 15:
      productNumber = <Detail2_15 />;
    case 16:
      productNumber = <Detail2_16 />;
    case 17:
      productNumber = <Detail2_17 />;
    case 18:
      productNumber = <Detail2_18 />;
  };

  return(
    <div className="container">
      <Detail_Header />
      {productNumber}
      <hr style={{ width: '90%' }} />
      <Detail_Ground />
    </div>
  );
}

function ReviewPage() {
  return(
    <div className="container">
      <Detail_Header />
      <Detail_Review />
      <hr style={{ width: '90%' }} />
      <Detail_Ground />
    </div>
  )
}

function LoginPage() {
  return (
    <div className="container">
      <Detail_Header />
      <Login />
      <hr style={{ width: '90%'}} />
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

        <Route path='/detail/:productId' element={<ProductPage />} />

        <Route path="/detail/:productId/review" element={<ReviewPage />} />

        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
