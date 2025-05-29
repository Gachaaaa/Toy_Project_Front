import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/5.png';
import related1 from '../Detail/Detail_img/6.png';
import related2 from '../Detail/Detail_img/7.png';
import related3 from '../Detail/Detail_img/8.png';
import './Detail2.css';

function Detail2_5() {
  return (
    <DetailPageTemplate
      image={img}
      title="짱구와 산리오함께 나란히 걷기 가챠"
      price="5500원"
      shipping="3000원"
      point="300원"
      description={`짱구와 산리오 친구들이 나란히 걷는 귀여움 폭발 산책길! 🐾  
헬로키티와 손잡고 걷는 짱구, 마이멜로디와 공원 벤치에 앉아 있는 순간까지—  
각기 다른 캐릭터 조합이 담긴 소장 욕구 100% 가챠!  
봄바람 살랑이는 거리에서 함께 걸으면, 일상이 조금 더 포근해질 거예요.  
귀여움이 두 배! 지금 바로 당신의 손 안에 담아보세요. 💕`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "귀신봐써! 으슥으슥 산리오 가챠", price: "3500원" },
        { image: related2, name: "먼작귀와 함께 산리오 가챠", price: "4000원" },
        { image: related3, name: "흠냠냐 졸령 주술회전 가챠", price: "5000원" },
      ]}
    />
  );
}

export default Detail2_5;