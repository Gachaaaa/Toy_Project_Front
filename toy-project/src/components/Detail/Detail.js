import React from 'react';
import './detail.css';
import gatchImg from './Detail_img/GATCHA.png';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: '인제오냐 뽀잉가챠 2', price: '4000원' },
  { id: 2, name: '넨잇찌 운명의 뽀잉가챠', price: '5000원' },
  { id: 3, name: '야호야 뽀잉가챠 장난감들', price: '3500원' },
  { id: 4, name: '딸곰과 딸기와 함께 뽀잉가챠', price: '5000원' },
  { id: 5, name: '짱구와 살인눈썹과 걷기 가챠', price: '5500원' },
  { id: 6, name: '귀신쎄벳의 웃으속 속리온 가챠', price: '3500원' },
  { id: 7, name: '뎅차와 함께 뽀잉가챠', price: '4000원' },
  { id: 8, name: '쫄보남 룰렛 주술회전 가챠', price: '5000원' },
  { id: 9, name: '아기가 된다면 고난 가챠', price: '6000원' },
  { id: 10, name: '모두 함께 절자요~ 꿈꾸 가챠', price: '4000원' },
  { id: 11, name: '슈퍼보자 꿈꾸 가챠', price: '5000원' },
  { id: 12, name: '봄의 카드캡처체리의 심리온 가챠', price: '6000원' },
  { id: 13, name: '아기가 된다면 고난 가챠2', price: '6000원' },
  { id: 14, name: '팅팅 뚱빵 내맘 배구클럽 하이큐 가챠', price: '5000원' },
  { id: 15, name: '언제 넌 먹이줄까 음식가챠', price: '2000원' },
  { id: 16, name: '귀여운 도시락 가챠', price: '4000원' },
  { id: 17, name: '현대인의 덕목은 체력! 뽀잉가챠', price: '5000원' },
  { id: 18, name: '포박곰 뽀잉로 가챠', price: '3500원' },
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

