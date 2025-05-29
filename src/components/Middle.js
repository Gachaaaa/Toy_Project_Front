import './components.css';

function Middle() {
  return (
    <div>
      <div className='parent-div' style={{'paddingTop': '60px'}}>

        <div>
          <div className='child-div'>
            <img src='./logo.png' alt='쿠로미로고' style={{'marginRight': '10px'}} />
            <p style={{'fontWeight':'800', 'fontSize': '40px', 'margin': '0 0 0 0'}}>이달의 짱구 가챠</p>
          </div>

          <p className='catcha-p'>
            목욕탕 버전 짱구 가챠입니다. <br />
            특별피규어는 액션가면으로 이번 기회에 GET하세요!
          </p>

          <div>
            <button className='catcha-but' 
            style={{'width': '80px', 'backgroundColor': '#FC8080', 'color': 'white', 'marginLeft': '85px'}}>
                GO!
            </button>

            <button className='catcha-but' 
            style={{'width': '120px', 'backgroundColor': 'lightgray', 'color': 'black', 'marginLeft': '20px'}}>
                찜하기♥
            </button>
          </div>
        </div>

        <div>
          <img src='./catcha image 1.png' alt='이달의가챠1'
          style={{'height': '400px', 'width': 'auto'}} />
        </div>     
      </div>

      <div className='parent-div'>
        <div>
          <img src='./catcha image 2.png' alt='이달의가챠2' 
          style={{'height': '400px', 'width': 'auto'}} />
        </div>     

        <div>
          <div className='child-div'>
            <img src='./logo.png' alt='쿠로미로고' style={{'marginRight': '10px'}} />
            <p style={{'fontWeight':'800', 'fontSize': '40px', 'margin': '0 0 0 0'}}>최대 ~70% 할인 가챠</p>
          </div>

          <p className='catcha-p'>
            이때만 최대 할인 특가로 만날 수 있는 상품! <br />
            5000원 가챠 → 2000원에 만나보세요♥
          </p>

          <div>
            <button className='catcha-but' 
            style={{'width': '80px', 'backgroundColor': '#FC8080', 'color': 'white', 'marginLeft': '85px'}}>
                GO!
            </button>

            <button className='catcha-but' 
            style={{'width': '120px', 'backgroundColor': 'lightgray', 'color': 'black', 'marginLeft': '20px'}}>
                찜하기♥
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Middle;