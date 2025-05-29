import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/1.png';
import related1 from '../Detail/Detail_img/2.png';
import related2 from '../Detail/Detail_img/3.png';
import related3 from '../Detail/Detail_img/4.png';
import './Detail2.css';

function Detail2_1() {
  return (
    <DetailPageTemplate
      image={img}
      title="언제오나 짱구가챠 2"
      price="4000원"
      shipping="3000원"
      point="300원"
      description={`언제 올지 몰라 더 애타는 짱구의 일상!  
짱구와 유리, 철수 그리고 원장선생님의 기다리는 귀여운 모습들이 담겨 있어요.  
하나하나 표정과 자세가 달라 소장 욕구를 자극합니다.  
기다림조차 사랑스러운 짱구, 오늘도 당신을 기다리고 있을지도 몰라요!  
지금 바로, 짱구의 기다림을 소장해보세요 💕`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "널언제나 응원해 짱구가챠 ", price: "5000원" },
        { image: related2, name: "아뵤아뵤 짱구와 장남감들", price: "3500원" },
        { image: related3, name: "달콤한 딸기와 함께 산리오 가챠", price: "5000원" },
      ]}
    />
  );
}

export default Detail2_1;
