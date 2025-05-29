import './components.css';

function Bottom() {
  return (
    <div>
      <p style={{'fontWeight':'800', 'fontSize': '40px', 'margin': '40px 0 5px 200px'}}>
        이용 안내
      </p>

      <div className='parent-div' style={{'padding': '30px 230px'}}>
        <div>
          <img src='./globe.png' style={{'margin': '0 0 10px 0'}} alt='Delivery' />
          <p style={{'fontSize': '30px', 'margin': '0 0 10px 0', 'fontWeight': '600'}}>Delivery</p>
          <p className='bottom-p'>교환, 반품 주소</p>
          <p className='bottom-p'>서울특별시 종로구 성균관대학교 인문캠</p>
          <p className='bottom-p' style={{'color': 'red'}}>반품 전, CS Center 전화번호로 연락주세요.</p>
        </div>

        <div>
          <img src='./avatar.png' style={{'margin': '0 0 10px 0'}} alt='CS Center' />
          <p style={{'fontSize': '30px', 'margin': '0 0 10px 0', 'fontWeight': '600'}}>CS Center</p>
          <p className='bottom-p'>온라인몰 전화: 010-9999-0000</p>
          <p className='bottom-p' style={{'marginBottom': '8px', 'width': '430px'}}>**문자로 남겨주시면 답장 드릴께요!</p>
          <p className='bottom-p'>상담시간: 10:00 ~ 18:00</p>
          <p className='bottom-p'>점심시간: 11:00 ~ 12:00</p>
        </div>
      </div>

      <div className='parent-div' style={{'padding': '30px 230px', 'marginBottom':'50px'}}>
        <div>
          <img src='./lock closed.png' style={{'margin': '0 0 10px 0'}} alt='Bank' />
          <p style={{'fontSize': '30px', 'margin': '0 0 10px 0', 'fontWeight': '600'}}>Bank</p>
          <p className='bottom-p'>성대은행 93-3949-4848</p>
          <p className='bottom-p'>예금주: (주)초짜도 같이 가챠챠</p>
        </div>

        <div>
          <img src='./calendar.png' style={{'margin': '0 0 10px 0'}} alt='Holiday' />
          <p style={{'fontSize': '30px', 'margin': '0 0 10px 0', 'fontWeight': '600'}}>Holiday</p>
          <p className='bottom-p'>매주 일~금까지 일하고 있습니다.</p>
          <p className='bottom-p' style={{'width': '430px'}}>토요일에 주문하실 경우, <br />일요일에 상품 확인 후 월요일에 배송이 시작됩니다.</p>
          <p className='bottom-p'>공휴일은 쉽니다.</p>
        </div>
      </div>

    </div>
  );
}

export default Bottom;