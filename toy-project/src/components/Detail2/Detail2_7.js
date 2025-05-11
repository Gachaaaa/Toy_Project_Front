import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/7.png';
import related1 from '../Detail/Detail_img/8.png';
import related2 from '../Detail/Detail_img/9.png';
import related3 from '../Detail/Detail_img/10.png';
import './Detail2.css';

function Detail2_7() {
  return (
    <DetailPageTemplate
      image={img}
      title="먼작귀와 함께 산리오 가챠"
      price="4000원"
      shipping="3000원"
      point="300원"
      description={`먼지 속에서 깨어난 먼작귀와 산리오 친구들의 기묘한 동거 생활! 🧹👻  
쿠로미와 먼작귀가 함께 청소하다 티격태격, 마이멜로디는 먼지 뒤집어쓰고도 해맑은 미소!  
엉뚱하고 귀여운 순간들이 가득한 상상 초월 가챠 컬렉션!  
이 조합… 너무 말이 안 되는데 너무 귀엽잖아?!  
먼지도 귀엽게 덮어버리는 산리오 콜라보, 지금 바로 만나보세요! 🌪️✨`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "흠냠냐 졸령 주술회전 가챠", price: "5000원" },
        { image: related2, name: "아기가 된다면? 코난 가챠", price: "6000원" },
        { image: related3, name: "모두 함께 잘자요~ 짱구 가챠", price: "4000원" },
      ]}
    />
  );
}

export default Detail2_7;