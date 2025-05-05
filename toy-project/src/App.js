import './App.css';

function App() {
  return (
    <div className="container">
      <header className='navbar'>
        <div style={{'color':'white'}}>
          초짜도 같이 가챠</div>
        <nav>
          <ul className='nav-ul'>
            <li className='nav-item' style={{'color':'#DF6565'}}>짱구가챠</li>
            <li className='nav-item' style={{'color':'#F6A2C0'}}>산리오가챠</li>
            <li className='nav-item' style={{'color':'#58BFB6'}}>애니가챠</li>
            <li className='nav-item' style={{'color':'#794DBB'}}>음식가챠</li>
            <button className='nav-but'>log in</button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
