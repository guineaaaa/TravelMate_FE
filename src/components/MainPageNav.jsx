import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//GNB
const MainPageNav = ({ onLinkClick }) => {
    return (
        <StyledNavbar variant="dark" expand="lg" style={{ fontFamily: 'Pretendard', top: '4rem', position: 'fixed', width: '100%', height: '2.725rem', zIndex: '999' }}>
            <StyledContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <StyledNav className="mx-auto" onClick={onLinkClick}>
                        <StyledNavDropdown title="투어 상품" id="tour-products-dropdown" className="mx-3" onClick={onLinkClick}>
                            <NavDropdown.Item href="#action/3.1">📖 질문 & 답변</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">💬 자유주제</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">📚 스터디</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">✏️ 블로그</NavDropdown.Item>
                        </StyledNavDropdown>
                        <StyledNavDropdown title="계획/이벤트" id="plans-events-dropdown" className="mx-3" onClick={onLinkClick}>
                            <NavDropdown.Item href="#action/3.1">📖 질문 & 답변</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">💬 자유주제</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">📚 스터디</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">✏️ 블로그</NavDropdown.Item>
                        </StyledNavDropdown>
                        <StyledNavDropdown title="지역별" id="region-dropdown" className="mx-3" onClick={onLinkClick}>
                        <NavDropdown.Item href="#action/3.1">📖 질문 & 답변</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">💬 자유주제</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">📚 스터디</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">✏️ 블로그</NavDropdown.Item>
                        </StyledNavDropdown>
                        <StyledNavDropdown title="부분동행" id="partial-companion-dropdown" className="mx-3" onClick={onLinkClick}>
                        <NavDropdown.Item href="#action/3.1">📖 질문 & 답변</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">💬 자유주제</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">📚 스터디</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">✏️ 블로그</NavDropdown.Item>
                        </StyledNavDropdown>
                        <StyledNavDropdown title="커뮤니티" id="community-dropdown" className="mx-3" onClick={onLinkClick}>
                        <NavDropdown.Item href="#action/3.1">📖 질문 & 답변</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">💬 자유주제</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">📚 스터디</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">✏️ 블로그</NavDropdown.Item>
                        </StyledNavDropdown>
                    </StyledNav>
                </Navbar.Collapse>
            </StyledContainer>
        </StyledNavbar>
    );
}
const StyledNavbar = styled(Navbar)`
    background-color: #0064DC;
`;

const StyledNavDropdown = styled(NavDropdown)`
    .dropdown-toggle {
        color: white !important;
        text-align: center;
    }

    .dropdown-toggle::after {
        color: white;
    }

    .dropdown-menu {
        text-align: left;
    }
`;

const StyledNav = styled(Nav)`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledContainer = styled(Container)`
    .mx-3 {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
        margin-top: 0.2rem !important;
    }
`;
export default MainPageNav;