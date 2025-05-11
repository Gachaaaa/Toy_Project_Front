import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/11.png';
import related1 from '../Detail/Detail_img/12.png';
import related2 from '../Detail/Detail_img/13.png';
import related3 from '../Detail/Detail_img/14.png';
import './Detail2.css';

function Detail2_11() {
  return (
    <DetailPageTemplate
      image={img}
      title="슈퍼닌자 짱구 가챠"
      price="5000원"
      shipping="3000원"
      point="300원"
      description={`밤을 지키는 수수께끼의 그림자, 바로 짱구 닌자단 등장! 🥷🌙  
도복을 두르고 몰래 숨어있는 짱구, 수리검 대신 과자를 던지는 철수, 수면술(?) 쓰는 맹구까지!  
허당미 넘치는 닌자 포즈와 기상천외한 무기들이 웃음을 책임져요.  
진지한데 웃긴, 엉뚱한데 멋있는 짱구 닌자들의 비밀 임무를 함께하세요!  
숨 막히는(?) 잠입 작전, 지금 바로 소환! 💨🍘
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "봄의 카드캡쳐체리와 산리오 가챠", price: "6000원" },
        { image: related2, name: "아가가 된다면? 코난 가챠2", price: "6000원" },
        { image: related3, name: "팅팅 탱탱 나랑 배구할래? 하이큐 가챠", price: "5000원" },
      ]}
    />
  );
}

export default Detail2_11;