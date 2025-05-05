import './App.css';
import catchImg from './GATCHA.png';

function App() {
  return (
    <div className="container">
      <div className='header'>
        <header className='navbar'>
          <div style={{'color':'white'}}>
            초짜도 같이 가챠</div>
          
          <nav>
            <ul className='nav-ul'>
              <li className='nav-item' style={{'color':'#DF6565'}}>짱구가챠</li>
              <li className='nav-item' style={{'color':'#F6A2C0'}}>산리오가챠</li>
              <li className='nav-item' style={{'color':'#58BFB6'}}>애니가챠</li>
              <li className='nav-item' style={{'color':'#794DBB'}}>음식가챠</li>
              <button className='head-but' 
              style={{'width': '80px', 'height': '50px', 'fontSize': '15px'}}>
                log in</button>
            </ul>
          </nav>
        </header>

        <div style={{'textAlign':'center'}}>
          <img src={catchImg} className='main-img' alt='가챠로고'></img>

          <p className='parg'>그저 한 번 돌렸을 뿐인데, 이미 수집모드 ON</p>

          <button className='head-but' 
                style={{'width': '90px', 'height': '68px', 'fontSize': '20px'}}>
                  GO!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
