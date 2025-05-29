import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/6.png';
import related1 from '../Detail/Detail_img/7.png';
import related2 from '../Detail/Detail_img/8.png';
import related3 from '../Detail/Detail_img/9.png';
import './Detail2.css';

function Detail2_6() {
  return (
    <DetailPageTemplate
      image={img}
      title="귀신봐써! 으슥으슥 산리오 가챠"
      price="3500원"
      shipping="3000원"
      point="300원"
      description={`산리오 친구들이 으슥한 밤길에서 귀신을 마주쳤다?! 👻  
소스라치게 놀란 헬로키티, 유령을 쫓는 마이멜로디, 깜깜한 골목에서 떨고 있는 쿠로미까지!  
공포와 귀여움 사이 그 아슬아슬한 조합이 가득 담긴 스페셜 가챠예요.  
조금 무섭지만… 너무 귀엽잖아?  
귀신보다 깜찍한 산리오의 공포 테마, 놓치지 마세요! 🌙😱
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "먼작귀와 함께 산리오 가챠", price: "4000원" },
        { image: related2, name: "흠냠냐 졸령 주술회전 가챠", price: "5000원" },
        { image: related3, name: "아기가 된다면? 코난 가챠", price: "6000원" },
      ]}
    />
  );
}

export default Detail2_6;