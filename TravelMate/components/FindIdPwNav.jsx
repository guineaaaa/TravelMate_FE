import styled from 'styled-components';
import { NavLink, useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FindIdPwNav = () => {
    const location = useLocation();
    const isFindIdActive = location.pathname === '/findid';
    const isFindIdExistActive = location.pathname === '/findidexist';
    const isFindIdNotActive = location.pathname === '/findidnot';

    const isFindPwActive = location.pathname === '/findpw';
    const isFindPwReActive = location.pathname === '/findpwre';

    return (
        <NavbarContainer className="container-fluid">
            <div className="row justify-content-between align-items-center">
                <ButtonContainer className="mt-5 col-auto">
                    <Brand to="/" className="d-none d-md-block">TravelMate</Brand>
                    <NavLinkButton to="/login" className="d-none d-md-block">로그인</NavLinkButton>
                    <NavLinkButton to="/signup" className="d-none d-md-block">회원가입</NavLinkButton>
                </ButtonContainer>
            </div>

            <Banner className="text-center">아이디·비밀번호 찾기</Banner>

            <FindButtonContainer className="row justify-content-center">
                <div className="col-6 col-md-auto text-center">
                    <StyledLink to="/findid">
                        <Button active={isFindIdActive || isFindIdExistActive || isFindIdNotActive}>아이디 찾기</Button>
                    </StyledLink>
                </div>
                <div className="col-6 col-md-auto text-center">
                    <StyledLink to="/findpw">
                        <Button active={isFindPwActive || isFindPwReActive}>비밀번호 찾기</Button>
                    </StyledLink>
                </div>
            </FindButtonContainer>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
  width: 100%;
  height: 300px; /* 높이를 고정 */
  margin-top: 0;
  position: fixed;
  top: 0; /* 최상단 고정 */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  padding-top: 1rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem; /* 작은 화면에서 패딩 조정 */
    height: 250px; /* 작은 화면에서 높이 조정 */
  }
`;

const Brand = styled(NavLink)`
    color: #0064DC;
    font-family: "BM HANNA_TTF";
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 1.5rem; /* 작은 화면에서 폰트 크기 조정 */
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 10%; 

  @media (max-width: 768px) {
    margin-bottom: 5%; /* 작은 화면에서 간격 조정 */
  }
`;

const NavLinkButton = styled(NavLink)`
    color: var(--Black, #1A202C);
    font-family: "Pretendard";
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 1.25rem; /* 작은 화면에서 폰트 크기 조정 */
    }
`;

const Banner = styled.div`
  width: 100%;
  color: var(--Black, #1A202C);
  font-family: "Pretendard";
  font-size: 2rem;
  font-weight: 800;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-right:5%; 

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const FindButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right:7%; 
`;

const Button = styled.button`
  color: #0064DC;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 800;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: ${props => props.active ? 'underline' : 'none'};
  text-underline-offset: ${props => props.active ? '0.81rem' : 'none'};
`;

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: #0064DC;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 800;
`;

export default FindIdPwNav;
