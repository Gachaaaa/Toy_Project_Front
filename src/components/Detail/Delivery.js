import './detail.css';
import '../Login.css';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Delivery() {
  const { itemId } = useParams(); 
  const navigate = useNavigate();

  const [address, setAddress] = useState('');

  // ✅ 로그인 여부 체크
  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:8000/delivery/', {
        item_id: Number(itemId),
        address: address,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      alert('배송 요청이 완료되었습니다!');
      navigate(`/gatcha/${itemId}`); // ✅ 수정: 배송 후 가챠 페이지로 이동

    } catch (error) {
      if (error.response) {
        console.error('서버 응답 에러:', error.response.data);
        alert('에러: ' + JSON.stringify(error.response.data));
      } else if (error.request) {
        console.error('요청은 되었으나 응답 없음:', error.request);
        alert('서버로부터 응답이 없습니다.');
      } else {
        console.error('설정 에러:', error.message);
        alert('요청 설정 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className='login-container'>
      <div className='review-box'>
        <h2 className='login-title'>배송지 입력</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='review-input'
            placeholder="배송지를 입력하세요"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button type="submit" className='review-but'>배송 요청하기</button>
        </form>
      </div>
    </div>
  );
}