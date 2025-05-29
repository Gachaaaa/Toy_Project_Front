import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/18.png';
import related1 from '../Detail/Detail_img/1.png';
import related2 from '../Detail/Detail_img/2.png';
import related3 from '../Detail/Detail_img/3.png';
import './Detail2.css';

function Detail2_1() {
  return (
    <DetailPageTemplate
      image={img}
      title="초밥왕 산리오 가챠"
      price="4000원"
      shipping="3000원"
      point="300원"
      description={`오늘만큼은 산리오가 초밥 장인이 된다! 🍣👘  
연어 위에 누워 있는 마이멜로디, 달걀초밥 속에 쏙 들어간 헬로키티,  
쿠로미는 와사비 담당이라며 화끈하게 등장?!  
진지하게 쥐고, 귀엽게 올라타는 초밥 마스터들의 귀염뽀짝 진검승부!  
맛있고 귀엽고 심지어 웃긴, 이건 소장 안 하면 회전초밥한테 혼나요! 🍥💖  
“어서 와~ 이런 초밥은 처음이지?”`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "언제오나 짱구가챠 2", price: "4000원" },
        { image: related2, name: "널언제나 응원해 짱구가챠", price: "5000원" },
        { image: related3, name: "아뵤아뵤 짱구와 장남감들", price: "3500원" },
      ]}
    />
  );
}

export default Detail2_1;