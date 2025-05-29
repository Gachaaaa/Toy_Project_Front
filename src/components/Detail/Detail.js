import React from 'react';
import './detail.css';
import gatchImg from './Detail_img/GATCHA.png';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: '언제오나 짱구가챠 2', price: '4000원' },
  { id: 2, name: '널언제나 응원해 짱구가챠', price: '5000원' },
  { id: 3, name: '아뵤아뵤 짱구와 장남감들', price: '3500원' },
  { id: 4, name: '달콤한 딸기와 함께 산리오 가챠', price: '5000원' },
  { id: 5, name: '짱구와 산리오함께 나란히 걷기 가챠', price: '5500원' },
  { id: 6, name: '귀신봐써! 으슥으슥 산리오 가챠', price: '3500원' },
  { id: 7, name: '먼작귀와 함께 산리오 가챠', price: '4000원' },
  { id: 8, name: '흠냠냐 졸령 주술회전 가챠', price: '5000원' },
  { id: 9, name: '아기가 된다면? 코난 가챠', price: '6000원' },
  { id: 10, name: '모두 함께 잘자요~ 짱구 가챠', price: '4000원' },
  { id: 11, name: '슈퍼닌자 짱구 가챠', price: '5000원' },
  { id: 12, name: '봄의 카드캡쳐체리와 산리오 가챠', price: '6000원' },
  { id: 13, name: '아가가 된다면? 코난 가챠2', price: '6000원' },
  { id: 14, name: '팅팅 탱탱 나랑 배구할래? 하이큐 가챠', price: '5000원' },
  { id: 15, name: '언제 날 먹어줄까 음식가챠', price: '2000원' },
  { id: 16, name: '귀여운 도시락 가챠', price: '4000원' },
  { id: 17, name: '현대인의 덕목은 체력키우기 산리오 가챠', price: '5000원' },
  { id: 18, name: '초밥왕 산리오 가챠', price: '3500원' },
];

function Detail() {
  const navigate = useNavigate();

  // 상품 3개씩 묶기
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    chunkedProducts.push(products.slice(i, i + 3));
  }

  return (
    <div className="detail-page">
      <img src={gatchImg} className='main-img' alt='가챠로고' />
      
      {chunkedProducts.map((row, rowIndex) => (
        <div
          className="product-row"
          key={rowIndex}
          style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}
        >
          {row.map((product) => (
            <div
              className="product-card"
              key={product.id}
              style={{ flex: 1, cursor: 'pointer' }}
              onClick={() => navigate(`/detail/${product.id}`)} // ✅ 수정한 부분: 경로를 `/detail/1` 등으로 변경
            >
              <img
                src={require(`./Detail_img/${product.id}.png`)}
                alt={product.name}
                className="product-image"
              />
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Detail;

