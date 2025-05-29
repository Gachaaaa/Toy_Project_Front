import DetailPageTemplate from './DetailPageTemplate';
import img from '../Detail/Detail_img/13.png';
import related1 from '../Detail/Detail_img/14.png';
import related2 from '../Detail/Detail_img/15.png';
import related3 from '../Detail/Detail_img/16.png';
import './Detail2.css';

function Detail2_13() {
  return (
    <DetailPageTemplate
      image={img}
      title="아가가 된다면? 코난 가챠2"
      price="6000원"
      shipping="3000원"
      point="300원"
      description={`이번엔 더 작아지고, 더 귀여워졌다! 🍼💥  
유치원 가방을 맨 코난, 분유병 물고 있는 하이바라, 기저귀 찬 범인까지—믿을 수 없는 귀여움 총집합!  
잠시 추리도 멈춘 채 말랑한 일상 속으로 들어온 그들.  
울다가 웃고, 졸다가 깜짝 놀라는 아기 코난 세계관이 당신을 찾아갑니다.  
소장하는 순간 심장 폭행! “코난 가챠2”, 지금 바로 만나보세요 👶🧸
`}
      reviews={[
        { name: "ma****", text: "짱구가챠 처음인데 너무 귀엽네요" },
        { name: "da****", text: "목욕탕에 꾸밀라고 샀는데 완전 대만족 ㅋㅋ" }
      ]}
      related={[
        { image: related1, name: "팅팅 탱탱 나랑 배구할래? 하이큐 가챠", price: "5000원" },
        { image: related2, name: "언제 날 먹어줄까 음식가챠", price: "2000원" },
        { image: related3, name: "귀여운 도시락 가챠", price: "4000원" },
      ]}
    />
  );
}

export default Detail2_13;