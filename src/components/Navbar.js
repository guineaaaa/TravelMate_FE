import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LineIcon, ChatIcon, AlarmIcon } from '../constants/icons';
import '../App.css';

const Navbar = ({ onLinkClick }) => {
    return (
        <NavbarContainer>
            <Brand to="/">TravelMate</Brand>
            <ButtonContainer>
                <NavLinkButton to="/login">로그인</NavLinkButton>
                <LineIcon />
                <NavLinkButton to="/signup">회원가입</NavLinkButton>
                <LineIcon />
                <NavLinkButton to="#!" onClick={onLinkClick}>내 프로필</NavLinkButton>
                <LineIcon />
                <NavLinkButton to="#!" onClick={onLinkClick}>채팅</NavLinkButton>
                <ChatIcon />
                <AlarmIcon />
            </ButtonContainer>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.nav`
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  width: 90rem;
  height: 5rem;
  width: 100%;
`;

const Brand = styled(NavLink)`
  width: 14rem;
  height: 3.0625rem;
  flex-shrink: 0;
  color: #0064DC;
  text-align: center;
  font-family: 'BM HANNA_TTF';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  text-decoration: none; /* Remove underline */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 50%;
  overflow-x: auto; /* Allow horizontal scrolling */
  padding-right: 40px; /* Add right padding to accommodate scrollbar */
`;

const NavLinkButton = styled(NavLink)`
  text-decoration: none;
  color: #486284;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
  }
`;

export default Navbar;
