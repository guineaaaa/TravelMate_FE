import React from 'react';

const Navibar = () => {
  return (
    <nav className="navbar p-0 navbar-expand-lg navbar-light bg-light mt-4">
      <div className="w-100 d-flex flex-column">
        <div className="d-flex w-100 justify-content-between align-items-center bg-white p-0 px-5 pb-2">
          <a className="navbar-brand" href="#">
            <span className="fs-2 fw-bold text-primary">TravelMate</span>
          </a>
          <ul className="navbar-nav d-flex align-items-center fs-7 mb-0">
            <li className="nav-item">
              <a className="nav-link" href="#">로그인 / 회원가입</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">내 프로필</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">채팅</a>
            </li>
          </ul>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100 bg-primary text-light py-2" id="basic-navbar-nav">
          <ul className="d-flex justify-content-between mb-0 navbar-nav w-100 px-5">
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#">호스트 찾기</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#">계획 / 이벤트</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#">전체 동행</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#">부분 동행</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#">커뮤니티</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;