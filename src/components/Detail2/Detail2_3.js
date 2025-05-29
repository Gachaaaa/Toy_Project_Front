import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/3.png';
import related1 from '../Detail/Detail_img/4.png';
import related2 from '../Detail/Detail_img/5.png';
import related3 from '../Detail/Detail_img/6.png';
import './Detail2.css';

function Detail2_3() {
  return (
    <DetailPageTemplate
      image={img}
      title="아뵤아뵤 짱구와 장남감들"
      price="3500원"
      shipping="3000원"
      point="300원"
      description={`목욕탕에 놀러온 짱구가 너무 귀여워서 안 데려올 수 없었어요.
수건을 뒤집어쓴 짱구부터, 무서운 원장선생님까지 다양하게 구성되어 있어요.
한정 수량으로 입고된 이번 가챠는 조기 품절될 수 있으니, 지금 바로 돌려보세요! 💖`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "달콤한 딸기와 함께 산리오 가챠", price: "5000원" },
        { image: related2, name: "짱구와 산리오함께 나란히 걷기 가챠", price: "5500원" },
        { image: related3, name: "귀신봐써! 으슥으슥 산리오 가챠", price: "3500원" },
      ]}
    />
  );
}

export default Detail2_3;