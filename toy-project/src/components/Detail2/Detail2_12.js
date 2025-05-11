import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/12.png';
import related1 from '../Detail/Detail_img/13.png';
import related2 from '../Detail/Detail_img/14.png';
import related3 from '../Detail/Detail_img/15.png';
import './Detail2.css';

function Detail2_12() {
  return (
    <DetailPageTemplate
      image={img}
      title="봄의 카드캡쳐체리와 산리오 가챠"
      price="6000원"
      shipping="3000원"
      point="300원"
      description={`벚꽃 날리는 봄날, 카드캡터 체리와 산리오 친구들이 마법 같은 하루를 보냅니다 🌸✨  
하늘하늘한 핑크 드레스의 체리, 마법지팡이를 들고 함께 떠나는 키티와 마이멜로디!  
사랑스럽고 몽환적인 컬러감으로 재현된 꿈결 같은 장면들—그야말로 봄의 판타지!  
지금 당신의 손 안에 사쿠라 카드의 마법이 펼쳐집니다.  
소장만 해도 봄이 오는 듯한 이 가챠, 절대 놓치지 마세요 💖🧚‍♀️
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "아가가 된다면? 코난 가챠2", price: "6000원" },
        { image: related2, name: "팅팅 탱탱 나랑 배구할래? 하이큐 가챠", price: "5000원" },
        { image: related3, name: "언제 날 먹어줄까 음식가챠", price: "2000원" },
      ]}
    />
  );
}

export default Detail2_12;