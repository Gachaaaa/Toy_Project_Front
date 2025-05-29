import './detail.css';
import '../Login.css';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import drawGif from './Detail_img/draw.gif';
import draw1Gif from './Detail_img/draw1.gif';
import draw2Gif from './Detail_img/draw2.gif';
import draw3Gif from './Detail_img/draw3.gif';

const gifList = [draw1Gif, draw2Gif, draw3Gif];

export default function Gatcha() {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [step, setStep] = useState('start');
  const [gifSrc, setGifSrc] = useState('');
  const [characterName, setCharacterName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    setGifSrc(drawGif);
    setStep('draw-start');

    setTimeout(() => {
      const rand = Math.floor(Math.random() * 3);
      setGifSrc(gifList[rand]);
      setStep('draw-random');

      setTimeout(async () => {
        try {
          const response = await axios.post(
            'http://localhost:8000/gachadraw/',
            { gacha_id: Number(itemId) },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );

          setCharacterName(response.data.item.name);
          setStep('result');
        } catch (err) {
          console.error('가챠 에러:', err);
          alert('가챠 요청 중 문제가 발생했습니다.');
        }
      }, 5000);
    }, 5000);
  }, [itemId, navigate]);

  return (
    <div className="login-container">
      <div className="review-box">
        {step === 'draw-start' || step === 'draw-random' ? (
          <img
            src={gifSrc}
            alt="gatcha animation"
            className="gacha-gif"
          />
        ) : null}

        {step === 'result' && (
          <div className="gacha-result">
            <h2>🎉 축하합니다! 당첨된 캐릭터는</h2>
            <p className="character-name">✨ {characterName} ✨</p>
            <button className="review-but" onClick={() => navigate('/')}>
              홈으로
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
