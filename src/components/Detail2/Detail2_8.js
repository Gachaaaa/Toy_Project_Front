import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/8.png';
import related1 from '../Detail/Detail_img/9.png';
import related2 from '../Detail/Detail_img/10.png';
import related3 from '../Detail/Detail_img/11.png';
import './Detail2.css';

function Detail2_8() {
  return (
    <DetailPageTemplate
      image={img}
      title="흠냠냐 졸령 주술회전 가챠"
      price="5000원"
      shipping="3000원"
      point="300원"
      description={`전투 후 배고픔에 눈 반쯤 감긴 주술사들?! 🍙  
고죠는 라멘 그릇에 얼굴을 파묻고, 이타도리는 주먹밥을 손에 든 채 졸고 있어요.  
졸음과 허기를 이기지 못한 주술회전 캐릭터들의 흠냐흠냐 모먼트 대공개!  
강한 그들도 피곤한 날이 있는 법—이건 귀여움 그 자체입니다.  
오늘도 지친 당신에게, 졸령들의 먹방 힐링을 전해드립니다. 😴🍜
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "아기가 된다면? 코난 가챠", price: "6000원" },
        { image: related2, name: "모두 함께 잘자요~ 짱구 가챠", price: "4000원" },
        { image: related3, name: "슈퍼닌자 짱구 가챠", price: "5000원" },
      ]}
    />
  );
}

export default Detail2_8;