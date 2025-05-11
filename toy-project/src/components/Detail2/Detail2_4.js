import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/4.png';
import related1 from '../Detail/Detail_img/5.png';
import related2 from '../Detail/Detail_img/6.png';
import related3 from '../Detail/Detail_img/7.png';
import './Detail2.css';

function Detail2_4() {
  return (
    <DetailPageTemplate
      image={img}
      title="달콤한 딸기와 함께 산리오 가챠"
      price="5000원"
      shipping="3000원"
      point="300원"
      description={`딸기 향 가득한 봄날, 산리오 친구들과 함께하는 달콤한 티타임! 🍓  
헬로키티, 마이멜로디, 시나모롤이 딸기 테마로 꾸며진 귀여운 모습으로 찾아왔어요.  
핑크빛 코디와 딸기 케이크 소품까지, 하나하나가 사랑스러움 그 자체!  
지금 이 순간, 당신의 책상 위에 딸기 정원을 펼쳐보세요.  
산리오와 딸기가 함께하는 행복한 가챠, 지금 바로 소장해보세요! 🍰💕`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "짱구와 산리오함께 나란히 걷기 가챠", price: "5500원" },
        { image: related2, name: "귀신봐써! 으슥으슥 산리오 가챠", price: "3500원" },
        { image: related3, name: "먼작귀와 함께 산리오 가챠", price: "4000원" },
      ]}
    />
  );
}

export default Detail2_4;