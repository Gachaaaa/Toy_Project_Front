import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/9.png';
import related1 from '../Detail/Detail_img/10.png';
import related2 from '../Detail/Detail_img/11.png';
import related3 from '../Detail/Detail_img/12.png';
import './Detail2.css';

function Detail2_9() {
  return (
    <DetailPageTemplate
      image={img}
      title="아기가 된다면? 코난 가챠"
      price="6000원"
      shipping="3000원"
      point="300원"
      description={`그들이 모두 아기가 되어버렸다?! 👶🔍  
유치원복 입은 코난, 손가락 빨며 졸고 있는 하이바라, 아기띠 속 해맑은 범인까지!  
카리스마 넘치던 캐릭터들이 작아지고 말랑해진 모습으로 등장한 반전 귀여움 가득 가챠!  
범인은 이 안에 있다… 근데 너무 귀여워서 용서해버릴지도?!  
소장 필수! 오늘은 명탐정 말고 귀요미로 변신해보세요 🍼🧸
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "모두 함께 잘자요~ 짱구 가챠", price: "4000원" },
        { image: related2, name: "슈퍼닌자 짱구 가챠", price: "5000원" },
        { image: related3, name: "봄의 카드캡쳐체리와 산리오 가챠", price: "6000원" },
      ]}
    />
  );
}

export default Detail2_9;