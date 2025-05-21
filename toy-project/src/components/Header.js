import './components.css';
import catchImg from './img/GATCHA.png';
import { useNavigate, Link } from 'react-router-dom';


function Header() {
  const navigate=useNavigate();
  return (
    <div className='header'>
      <header className='navbar'>
        <div style={{'color':'black'}}>
          초짜도 같이 가챠</div>
        
        <nav>
          <ul className='nav-ul'>
            <li className='nav-item' style={{'color':'#DF6565'}}>짱구가챠</li>
            <li className='nav-item' style={{'color':'#F6A2C0'}}>산리오가챠</li>
            <li className='nav-item' style={{'color':'#58BFB6'}}>애니가챠</li>
            <li className='nav-item' style={{'color':'#794DBB'}}>음식가챠</li>
            <button className='head-but' 
            style={{'width': '80px', 'height': '50px', 'fontSize': '15px'}}
            onClick={()=>navigate('/login')}>
              log in</button>
          </ul>
        </nav>
      </header>

      <div style={{'textAlign':'center'}}>
        <img src={catchImg} className='main-img' alt='가챠로고'></img>

        <p className='parg'>그저 한 번 돌렸을 뿐인데, 이미 수집모드 ON</p>

        <button
      className='head-but'
      style={{ width: '90px', height: '68px', fontSize: '20px' }}
      onClick={() => navigate('/Detail')}
    >GO!</button>
      </div>
    </div>
  );
}

export default Header;