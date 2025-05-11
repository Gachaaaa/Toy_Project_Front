import React from 'react';
import './Detail2.css';
import shinchanImg from './shinchan_gacha.png';

function DetailPageTemplate({ image, title, price, shipping, point, description, reviews, related }) {
  return (
    <div className="detail-page2">

      {/* 상단 - 메인 이미지 및 가격/배송 정보 */}
      <div className="top-section">
        <img src={image} alt={title} className="detail-image" />
        <div className="info-section">
          <h2>{title}</h2>
          <p><b>금액:</b> {price}</p>
          <p><b>배송 금액:</b> {shipping}</p>
          <p><b>적립금액:</b> {point}</p>
          <p className="shipping-msg">
            (30000원 이상 구매 시 무료배송)<br />
            도서/산간지역은 추가 배송비가 발생할 수 있습니다.)
          </p>
          <button className="buy-btn">BUY</button>
          <button className="cart-btn">Add to cart</button>
        </div>
      </div>

      {/* 설명 + 짱구 이미지/상세정보 */}
      <div className="description-section">
        <div className="desc-container">
          <div className="desc-left">
            <img src={shinchanImg} alt="신짱구" className="desc-img" />
            <p className="product-detail">
              <b>상세 정보</b><br />
              크기: 3 x 6 (cm)<br />
              수입처: 일본 도쿄 캡짱
            </p>
          </div>
          <div className="desc-right">
            <h3>📮 이번에 들어온 따끈따끈한 신상!</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* 리뷰 */}
      <div className="review-section">
        <h3>리뷰✨</h3>
        <div className="review-row">
          {reviews.map((r, idx) => (
            <div key={idx} className="review-item">
              <b>{r.name}</b>
              <span>{r.text}</span>
            </div>
          ))}
          <div className="review-item more-review">... 더보기</div>
        </div>
      </div>

      {/* 관련 상품 */}
      <div className="related-section">
        <h3>관련 상품</h3>
        <div className="related-list">
          {related.map((item, i) => (
            <div key={i} className="related-card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default DetailPageTemplate;
