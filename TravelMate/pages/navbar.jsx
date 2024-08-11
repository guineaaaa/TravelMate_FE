import '../css/Base.css';
import { NavLink } from 'react-router-dom';
import { LineIcon, ChatIcon, AlarmIcon } from '../src/constants/icons';

const Navibar = ({ onLinkClick }) => {
  return (
    <nav className="navbar p-0 navbar-expand-lg navbar-light bg-light" style={{fontFamily: 'Pretendard'}}>
      <div className="w-100 d-flex flex-column">
        <div className="d-flex w-100 justify-content-between align-items-center bg-white p-0 px-4 py-2 pb-2">
          
          <a className="navbar-brand" to="/">
            <span className="fs-2 text-primary" style={{fontFamily: 'BM HANNA_TTF',}}>TravelMate</span>
          </a>

          <ul className="navbar-nav d-flex align-items-center fs-6 mb-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">로그인 / 회원가입</NavLink>
            </li>
            <li><LineIcon /></li>

            <li className="nav-item mx-2">
              <NavLink className="nav-link" href="#"  onClick={onLinkClick}>내 프로필</NavLink>
            </li>
            <li><LineIcon /></li>

            <li className="nav-item mx-2">
              <NavLink className="nav-link" href="#"  onClick={onLinkClick}>채팅</NavLink>
            </li>
            <li><LineIcon /></li>

            <li className="nav-item mx-2">
            <ChatIcon className="ml-2" />
            </li>
            

            <li className="nav-item mx-2">
            <AlarmIcon className="ml-3" />
            </li>
          </ul>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse w-100 bg-primary text-light py-1 " id="basic-navbar-nav">
          <ul className="d-flex justify-content-between mb-0  navbar-nav w-100 px-5">
            <li className="nav-item ">
              <a className="nav-link text-light fw-bold" href="#" onClick={onLinkClick}>호스트 찾기</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#" onClick={onLinkClick}>계획 / 이벤트</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#" onClick={onLinkClick}>전체 동행</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#" onClick={onLinkClick}>부분 동행</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-bold" href="#" onClick={onLinkClick}>커뮤니티</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
