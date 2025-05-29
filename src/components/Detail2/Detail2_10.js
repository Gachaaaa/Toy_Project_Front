import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/10.png';
import related1 from '../Detail/Detail_img/11.png';
import related2 from '../Detail/Detail_img/12.png';
import related3 from '../Detail/Detail_img/13.png';
import './Detail2.css';

function Detail2_10() {
  return (
    <DetailPageTemplate
      image={img}
      title="모두 함께 잘자요~ 짱구 가챠"
      price="4000원"
      shipping="3000원"
      point="300원"
      description={`하루를 마친 짱구와 친구들이 포근한 꿈나라로 떠나요. 🌙😴  
이불 덮고 꾸벅꾸벅 졸고 있는 짱구, 잠꼬대하는 철수, 인형 꼭 안고 자는 흰둥이까지!  
하나같이 너무 사랑스러워서 보는 순간 마음까지 편안해지는 가챠예요.  
스트레스 가득한 날엔 짱구 친구들과 함께 푹~ 자볼까요?  
귀여움에 눌려 잠들지도 몰라요… 지금 바로 소장하세요! 🛌💤
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "슈퍼닌자 짱구 가챠", price: "5000원" },
        { image: related2, name: "봄의 카드캡쳐체리와 산리오 가챠", price: "6000원" },
        { image: related3, name: "아가가 된다면? 코난 가챠2", price: "6000원" },
      ]}
    />
  );
}

export default Detail2_10;