import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/15.png';
import related1 from '../Detail/Detail_img/16.png';
import related2 from '../Detail/Detail_img/17.png';
import related3 from '../Detail/Detail_img/18.png';
import './Detail2.css';

function Detail2_15() {
  return (
    <DetailPageTemplate
      image={img}
      title="언제 날 먹어줄까 음식가챠"
      price="2000원"
      shipping="3000원"
      point="300원"
      description={`도시락 구석에서 나를 기다리는 그대… 🍙🥲  
김밥은 눈물 그렁그렁, 계란말이는 곧 굳어버릴 듯한 눈빛,  
소세지는 “나 아직 따뜻해…”를 속삭이며 기다리고 있어요.  
먹히기 전이 제일 귀엽다?!  
냉장고 속, 도시락 속, 봉지 안에서 오늘도 출격 대기 중인 음식들의 절절한 소망!  
“언제 날 먹어줄까…” 귀여움과 짠함이 공존하는 미친 가챠 등장! 🍽️❤️
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "귀여운 도시락 가챠", price: "4000원" },
        { image: related2, name: "현대인의 덕목은 체력키우기 산리오 가챠", price: "5000원" },
        { image: related3, name: "초밥왕 산리오 가챠", price: "3500원" },
      ]}
    />
  );
}

export default Detail2_15;