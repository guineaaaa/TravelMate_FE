{/*}
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LineIcon, ChatIcon, AlarmIcon } from '../src/constants/icons';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS import

const NavbarComponent = ({ onLinkClick }) => {
    return (
        <Navbar bg="white" expand="lg" fixed="top" className="py-2">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="text-primary" style={{ fontFamily: 'BM HANNA_TTF', fontSize: '2.5rem' }}>
                    TravelMate
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex align-items-center">
                        <NavLink to="/login" className="nav-link font-weight-bold text-secondary">로그인</NavLink>
                        <LineIcon />
                        <NavLink to="/signup" className="nav-link font-weight-bold text-secondary">회원가입</NavLink>
                        <LineIcon />
                        <NavLink to="#!" className="nav-link font-weight-bold text-secondary" onClick={onLinkClick}>내 프로필</NavLink>
                        <LineIcon />
                        <NavLink to="#!" className="nav-link font-weight-bold text-secondary" onClick={onLinkClick}>채팅</NavLink>
                        <ChatIcon className="ml-2" />
                        <AlarmIcon className="ml-3" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
*/}
