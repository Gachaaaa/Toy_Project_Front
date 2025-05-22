import './detail.css';
import '../Login.css';

import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ReviewFormPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      alert('리뷰가 등록되었습니다!');
      navigate(`/detail/${productId}`);
    } catch (error) {
      console.error('리뷰 등록 실패:', error);
      alert('리뷰 등록에 실패했습니다.');
    }
  };

  return (
    <div className='login-container'>
      <div className='review-box'>
        <h2 className='login-title'>리뷰 작성하기</h2>
        <form onSubmit={handleSubmit}>
          <input className='review-input'
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className='review-div'>
            <label>별점:</label>
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <textarea className='review-text'
            placeholder="리뷰 내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" className='review-but'>제출</button>
        </form>
      </div>
    </div>
  );
}
