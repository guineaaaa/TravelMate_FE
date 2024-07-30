import React from 'react';

const ChatWindow = () => {
  return (
    <div className="d-flex flex-column h-100">
      <div className="p-3 border-bottom d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src="user1.jpg" className="rounded-circle me-3" alt="User" width="40" height="40" />
          <div>
            <div>말랑콩떡</div>
            <small className="text-muted">1시간 전 접속</small>
          </div>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-secondary mx-2">부담 등록</button>
          <button className="btn btn-sm btn-danger">신고</button>
        </div>
      </div>
      <div className="flex-grow-1 p-3" style={{ overflowY: 'scroll' }}>
        <div className="d-flex flex-column">
          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <span className="me-3 text-secondary">말랑콩떡</span>
              <span className="text-muted small">10:06 AM</span>
            </div>
            <div className="p-2 bg-light rounded">
              안녕하세요~!
            </div>
          </div>
          <div className="mb-3 align-self-end text-end">
            <div className="d-flex align-items-center justify-content-end mb-2">
              <span className="text-muted small me-3">10:07 AM</span>
              <span className="me-3 text-secondary">나</span>
            </div>
            <div className="p-2 bg-primary text-white rounded">
              반가워요!
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <span className="me-3 text-secondary">말랑콩떡</span>
              <span className="text-muted small">10:08 AM</span>
            </div>
            <div className="p-2 bg-light rounded">
              언제 동행 원하시나요?
            </div>
          </div>
          <div className="mb-3 align-self-end text-end">
            <div className="d-flex align-items-center justify-content-end mb-2">
              <span className="text-muted small me-3">10:10 AM</span>
              <span className="me-3 text-secondary">나</span>
            </div>
            <div className="p-2 bg-primary text-white rounded">
              저는 5월 30일에 동행 하고 싶어요.
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 border-top">
        <div className="d-flex">
          <input type="text" className="form-control me-2" placeholder="메시지를 입력하세요" />
          <button className="btn btn-primary text-nowrap">보내기</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;