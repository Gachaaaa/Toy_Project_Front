import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function LoginPage() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!ID || !password) {
      setError('아이디와와 비밀번호를 입력해주세요.');
      return;
    }

    console.log('로그인 시도:', { ID, password });
    setError('');
    navigate('/');
  
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
              type="ID"
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