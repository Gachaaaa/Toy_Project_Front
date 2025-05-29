import './components.css';

function Ground() {
  return (
    <div>
      <div className='ground-div'>
        <p style={{'fontSize': '25px', 'margin': '0 20px 0 70px'}}>GATCHA GATCHA</p>
        <img src='./shinchan.png' alt='짱구' />
      </div>

      <div className='ground-div' style={{'marginLeft': '70px', 'paddingBottom': '60px'}}>
        <img src='./facebook.png' alt='facebook' className='ground-icon'/>
        <img src='./in.png' alt='in' className='ground-icon'/>
        <img src='./youtube.png' alt='youtube' className='ground-icon'/>
        <img src='./instagram.png' alt='instagram' className='ground-icon'/>
      </div>
    </div>
  );
}

export default Ground;