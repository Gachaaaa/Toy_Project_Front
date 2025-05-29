import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/14.png';
import related1 from '../Detail/Detail_img/15.png';
import related2 from '../Detail/Detail_img/16.png';
import related3 from '../Detail/Detail_img/17.png';
import './Detail2.css';

function Detail2_14() {
  return (
    <DetailPageTemplate
      image={img}
      title="팅팅 탱탱 나랑 배구할래? 하이큐 가챠"
      price="5000d원"
      shipping="3000원"
      point="300원"
      description={`하이큐 멤버들이 팅글탱글하게 변신했다?! 🏐💥  
말랑공을 안고 점프하는 히나타, 튀어오르다 균형 잃은 카게야마, 네트에 탁 붙은 켄마까지!  
진지한 경기장 위에서 벌어지는 귀여운 해프닝들이 한 가득 담긴 하이큐 배구 가챠예요.  
실력은 그대로, 텐션은 더 말랑하게!  
“나랑 배구할래?” 귀여움으로 스파이크 날려드립니다 🧡🔥
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "언제 날 먹어줄까 음식가챠", price: "2000원" },
        { image: related2, name: "귀여운 도시락 가챠", price: "4000원" },
        { image: related3, name: "현대인의 덕목은 체력키우기 산리오 가챠", price: "5000원" },
      ]}
    />
  );
}

export default Detail2_14;