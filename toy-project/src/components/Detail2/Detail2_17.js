import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/17.png';
import related1 from '../Detail/Detail_img/18.png';
import related2 from '../Detail/Detail_img/1.png';
import related3 from '../Detail/Detail_img/2.png';
import './Detail2.css';

function Detail2_17() {
  return (
    <DetailPageTemplate
      image={img}
      title="현대인의 덕목은 체력키우기 산리오 가챠"
      price="5000원"
      shipping="3000원"
      point="300원"
      description={`헬스장 접수하러 온 산리오 친구들! 🏋️‍♀️💦  
덤벨 드는 마이멜로디, 요가 중 꾸벅꾸벅 졸고 있는 시나모롤, 런닝머신 위에서 고군분투 중인 쿠로미까지!  
작고 귀엽지만 열정은 누구보다 가득한 체력단련의 현장!  
“요즘은 체력이 스펙이래~”  
귀여움과 근성 모두 챙긴 산리오의 건강 가챠, 오늘도 땀나게 귀엽다! 💪🍓
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "초밥왕 산리오 가챠", price: "3500원" },
        { image: related2, name: "언제오나 짱구가챠 2", price: "4000원" },
        { image: related3, name: "널언제나 응원해 짱구가챠", price: "5000원" },
      ]}
    />
  );
}

export default Detail2_17;