import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/16.png';
import related1 from '../Detail/Detail_img/17.png';
import related2 from '../Detail/Detail_img/18.png';
import related3 from '../Detail/Detail_img/1.png';
import './Detail2.css';

function Detail2_16() {
  return (
    <DetailPageTemplate
      image={img}
      title="귀여운 도시락 가챠"
      price="4000원"
      shipping="3000원"
      point="300원"
      description={`뚜껑을 여는 순간 퍼지는 귀여움 폭탄! 🍙💛  
곰돌이 주먹밥, 웃고 있는 계란말이, 옆자리 브로콜리까지—전부 표정이 살아있는 캐릭터 도시락!  
매일 아침 누군가를 위해 정성껏 싸준 듯한 따뜻한 마음까지 담았어요.  
보기만 해도 힐링 되는 귀여운 한 끼, 오늘은 어떤 반찬을 뽑게 될까요?  
소장 욕구 + 배고픔까지 자극하는 귀여운 도시락 가챠, 지금 바로 오픈! 🍱💕
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "현대인의 덕목은 체력키우기 산리오 가챠", price: "5000원" },
        { image: related2, name: "초밥왕 산리오 가챠", price: "3500원" },
        { image: related3, name: "언제오나 짱구가챠 2", price: "4000원" },
      ]}
    />
  );
}

export default Detail2_16;