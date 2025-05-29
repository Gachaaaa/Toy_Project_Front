import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/2.png';
import related1 from '../Detail/Detail_img/3.png';
import related2 from '../Detail/Detail_img/4.png';
import related3 from '../Detail/Detail_img/5.png';
import './Detail2.css';

function Detail2_2() {
  return (
    <DetailPageTemplate
      image={img}
      title="널언제나 응원해 짱구가챠 "
      price="3500원"
      shipping="3000원"
      point="300원"
      description={`오늘도 열심히 살아가는 당신을 위해 짱구가 응원하러 왔어요!  
포메이션 댄스, 응원 깃발, 귀여운 치어복까지—하나하나 다른 모습의 짱구가 전하는 응원의 메시지!  
피곤한 하루 끝에 이 가챠 하나로 웃음과 위로를 받아보세요.  
넌 잘하고 있어! 짱구가 항상 당신 편이니까요. 💪💛
니, 지금 바로 돌려보세요! 💖`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "아뵤아뵤 짱구와 장남감들", price: "3500원" },
        { image: related2, name: "달콤한 딸기와 함께 산리오 가챠", price: "5000원" },
        { image: related3, name: "메롱메롱 메로나 짱구와 산리오함께 나란히 걷기 가챠", price: "5500원" },
      ]}
    />
  );
}

export default Detail2_2;