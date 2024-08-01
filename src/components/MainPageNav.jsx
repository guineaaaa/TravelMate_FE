import React from 'react';
import './MainPageNav.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPageNav = () => {
    return (
        <Navbar className="color-nav" variant="dark" expand="lg" style={{ top: '4rem', position: 'fixed', width: '100%', height: '2.725rem', zIndex:'999' }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown title="투어 상품" id="tour-products-dropdown" className="dropdown-title mx-3">
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="계획/이벤트" id="plans-events-dropdown" className="dropdown-title mx-3">
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="지역별" id="region-dropdown" className="dropdown-title mx-3">
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="부분동행" id="partial-companion-dropdown" className="dropdown-title mx-3">
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="커뮤니티" id="community-dropdown" className="dropdown-title mx-3">
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainPageNav;
