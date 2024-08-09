import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 아이디 비밀번호 찾기 페이지의 Navbar
const FindIdPwNav = () => {
    const location = useLocation();
    const isFindIdActive = location.pathname === '/findid';
    const isFindIdExistActive=location.pathname==='/findidexist';
    const isFindIdNotActive=location.pathname==='/findidnot';

    const isFindPwActive = location.pathname === '/findpw';
    const isFindPwReActive=location.pathname==='/findpwre';

    return (
        <NavbarContainer className="container-fluid">
            <div className="row justify-content-between align-items-center">
                <ButtonContainer className="col-auto">
                    <Brand to="/">TravelMate</Brand>
                    <NavLinkButton to="/login">로그인</NavLinkButton>
                    <NavLinkButton to="/signup">회원가입</NavLinkButton>
                </ButtonContainer>
            </div>

            <Banner>아이디·비밀번호 찾기</Banner>

            <FindButtonContainer>
                <StyledLink to="/findid">
                    <Button active={isFindIdActive || isFindIdExistActive||isFindIdNotActive}>아이디 찾기</Button>
                </StyledLink>
                <StyledLink to="/findpw">
                    <Button active={isFindPwActive || isFindPwReActive}>비밀번호 찾기</Button>
                </StyledLink>
            </FindButtonContainer>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
  width: 100%;
  height: 17.94rem;
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  padding: 2.98rem; /* Padding for top and bottom */
`;

const Brand = styled(NavLink)`
    color: #0064DC;
    text-align: center;
    font-family: "BM HANNA_TTF";
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: -2.098rem; /* Space before Banner */
`;

const NavLinkButton = styled(NavLink)`
    color: var(--Black, #1A202C);
    font-family: "Pretendard";
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
`;

const Banner = styled.div`
  width: 23rem;
  color: var(--Black, #1A202C);
  font-family: "Pretendard";
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: 121.2%; /* 2.424rem */
  text-transform: uppercase;
  margin-top: 6.75rem; /* Space before FindButtonContainer */
  margin-bottom: 3rem;
  margin-left:-2rem;
`;


const FindButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: -10.98rem;
  

`;

const Button = styled.button`
  width: 7.5rem;
  color: #0064DC;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.212rem;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: ${props => props.active ? 'underline' : 'none'};
  text-underline-offset: ${props => props.active ? '0.81rem' : 'none'};
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline from links */
  width: 7.5rem;
  color: #0064DC;
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 121.2%; /* 1.212rem */
`;

export default FindIdPwNav;
