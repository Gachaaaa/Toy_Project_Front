import React from 'react';
import { useNavigate } from 'react-router-dom';
import './detail.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate('/')}>GATCHA GACHA</div>
      <nav className="nav-menu">
        <button onClick={() => navigate('/')}>HOME</button>
        <button onClick={() => alert('MY 기능 준비 중입니다!')}>MY</button>
      </nav>
    </header>
  );
}

export default Header;
