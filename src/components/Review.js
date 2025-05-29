import './components.css';

function Review() {
  return (
    <div>
      <p style={{'fontWeight':'800', 'fontSize': '40px', 'margin': '40px 0 5px 200px'}}>
        고객님들의 솔직한 리뷰 ✧₊⁎
      </p>

      <div className='review-div'>
        <div>
          <img src='./review1.png' alt='리뷰사진1' 
          className='review-img' style={{'width': '550px'}}/>
          <p className='review-pp' style={{'color': 'black', 'fontWeight': '700'}}>리뷰제목</p>
          <p className='review-p'>리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다.</p>
        </div>

        <div>
          <div>
            <img src='./review2.png' alt='리뷰사진2' className='review-img'/>
            <p className='review-pp' style={{'color': 'black', 'fontWeight': '700'}}>리뷰제목</p>
            <p className='review-p'>리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다.</p>
          </div>

          <div>
            <img src='./review3.png' alt='리뷰사진3' className='review-img'/>
            <p className='review-pp' style={{'color': 'black', 'fontWeight': '700'}}>리뷰제목</p>
            <p className='review-p'>리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Review;