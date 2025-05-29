// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function LoginPage() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // 입력값 콘솔 출력
    console.log("입력된 ID:", ID);
    console.log("입력된 Password:", password);

    // 필수 입력 체크
    if (!ID || !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append('grant_type', 'password');
      formData.append('username', ID); // FastAPI는 username 필드 사용
      formData.append('password', password);

      const res = await axios.post(
        'http://localhost:8000/users/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const { access_token, token_type } = res.data;

      // 토큰 저장
      localStorage.setItem('token', access_token);
      localStorage.setItem('token_type', token_type);

      console.log('로그인 성공:', res.data);

      // 성공 메시지 + 페이지 이동
      alert('로그인 완료! 환영합니다.');
      setError('');
      navigate('/');
    } catch (err) {
      console.error('로그인 실패:', err.response?.data || err.message);
      setError('❌ 로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">로그인</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>아이디</label>
            <input
              type="text"
              value={ID}
              onChange={(e) => setID(e.target.value)}
              placeholder="ID"
            />
          </div>

          <div className="form-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </div>

          <button type="submit" className="login-button">로그인</button>
        </form>
      </div>
    </div>
  );
}

