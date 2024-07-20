import React, { useState } from "react";
import { Container, Row, Col, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import KakaoLogInButton from '../images/kakao_login_large_wide 1.png';
import GoogleLogInImage from '../images/image 5.png';
import AppleLogInImage from '../images/image 6.png';

import './Base.css';
import '../App.css';

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idMessage, setIDMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [isId, setIsID] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const REST_API_KEY='백엔드에게 달라 하자1';
    const REDIRECT_URI='벡엔드에게 달라 하자2';
    const link=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler=()=>{
        window.location.href=link;
    };

    const handleIDChange = (e) => {
        const currentID = e.target.value;
        setId(currentID);
        if (!currentID.trim()) {
            setIDMessage("아이디를 입력하세요");
            setIsID(false);
        } else {
            setIsID(true);
            setIDMessage("");
        }
    };

    const handlePasswordChange = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        if (!currentPassword.trim()) {
            setPasswordMessage("비밀번호를 입력하세요");
            setIsPassword(false);
        } else {
            setIsPassword(true);
            setPasswordMessage("");
        }
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-80" style={{ maxWidth: '41rem', borderRadius: '0.625rem', backgroundColor: '#FFF', padding: '2rem', margin: '5rem auto' }}>
            <h1 className="text-primary" style={{ fontFamily: 'BM HANNA_TTF', fontSize: '1.5rem', lineHeight: '3.125rem' }}>TravelMate</h1>
            <hr style={{ backgroundColor: '#F0F0F0', width: '100%', height: '0.0625rem' }} />
            <h2 className="text-dark" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '9.2em', marginTop: '1em' }}>로그인</h2>
            
            <Form className="w-100 d-flex flex-column align-items-center mt-2">
                <InputGroup className="mb-3" style={{ width: '50%' }}>
                    <Form.Control type="text" value={id} onChange={handleIDChange} placeholder="이메일 입력" />
                </InputGroup>
                {idMessage && <p className="text-danger text-end w-50">{idMessage}</p>}

                <InputGroup className="mb-3" style={{ width: '50%' }}>
                    <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호 입력" />
                </InputGroup>
                {passwordMessage && <p className="text-danger text-end w-50">{passwordMessage}</p>}
            </Form>
            <p className="text-muted mt-n4 mb-4" style={{ marginLeft: '15em', fontSize: '0.75rem', fontFamily: 'Baloo Thambi' }}>로그인 정보를 잊으셨나요?</p>

            <Button onClick={loginHandler} variant="light" className="p-0 mb-2" style={{ width: '19.5rem', height: '3rem', borderRadius: 'none', padding: 0 }}>
                <Image src={KakaoLogInButton} alt="카카오 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Button>

            <Button variant="success" className="p-0 mb-2" style={{ width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'white', fontSize: '0.9375rem' }}>
                네이버로 로그인
            </Button>

            <Row className="w-100 text-center justify-content-center">
                <Button variant="light" className="p-0 mb-2 me-2" style={{ width: '2.5rem', height: '2.35294rem', borderRadius: '100rem', padding: 0, border: 'none' }}>
                    <Image src={GoogleLogInImage} alt="Google 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Button>

                <Button variant="light" className="p-0 mb-2 ms-2" style={{ width: '2.5rem', height: '2.35294rem', borderRadius: '100rem', padding: 0, border: 'none' }}>
                    <Image src={AppleLogInImage} alt="Apple 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Button>
            </Row>

            <div className="d-flex align-items-center mt-4">
                <p className="text-center me-2" style={{ fontSize: '0.75rem', fontWeight: 800, lineHeight: '3.125rem' }}>아직 TravelMate 계정이 없나요?</p>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <Button variant="link" className="text-center" style={{ fontSize: '0.75rem',marginBottom:'0.9rem',fontWeight:800}}>회원가입</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Login;
