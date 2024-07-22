import React, { useState } from "react";
import { Container, Modal, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import KakaoLogInButton from '../images/kakao_login_large_wide 1.png';
import GoogleLogInImage from '../images/image 5.png';
import AppleLogInImage from '../images/image 6.png';
import './Base.css';
import '../App.css';

const Signup = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [idMessage, setIDMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleIDChange = (e) => {
        const currentID = e.target.value;
        setId(currentID);
        if (!currentID.trim()) {
            setIDMessage("아이디를 입력하세요");
        } else {
            setIDMessage("");
        }
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const h4Style = {
        marginRight: '13rem',
        display: 'flex',
        width: '6.6875rem',
        height: '1.625rem',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: '0',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '121.2%',
        fontFamily: 'Pretendard',
        textTransform: 'uppercase',
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center"
            style={{ width: '40.9375rem', height: '59.625rem', borderRadius: '0.625rem', backgroundColor: '#FFF', padding: '2rem', margin: '1.87rem auto' }}>
            <h1 className="text-primary" style={{
                marginTop: '6.5rem', fontFamily: 'BM HANNA_TTF', fontSize: '1.5rem', lineHeight: '3.125rem',
                width: '8.6875rem', height: '1.8rem', textAlign: 'center', fontWeight: '400', flexShrink: '0'
            }}>TravelMate</h1>

            <hr style={{ marginTop: '0.56rem', backgroundColor: '#DDD', width: '40.9375rem', height: '0.0625rem' }} />

            <h2 className="text-dark" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '14.25rem',marginTop: '1.44rem', marginBottom: '-0.081rem' }}>
                회원가입</h2>

            <Form className="w-100 d-flex flex-column align-items-center"
            style={{marginTop:'0.75rem'}}>

                <h4 className="text-dark" style={{ ...h4Style}}>
                    이메일</h4>

                <Container className="d-flex" style={{ marginLeft: '8rem' }}>
                    <InputGroup className="mb-3" style={{ width: '15.45rem', height: '2.25rem', flexShrink: '0', borderRadius: '0.3125rem', border: '1px solid #A6A6A6' }}>
                        <Form.Control type="text" value={id} onChange={handleIDChange} placeholder="이메일 입력" />
                    </InputGroup>
                    {idMessage && <p className="text-danger text-end w-50">{idMessage}</p>}

                    <Button variant="primary" size="lg" style={{
                        display: 'flex',
                        backgroundColor: '#0074FF',
                        width: '3.8rem',
                        height: '2.25rem',
                        padding: '0.5625rem 0.3125rem',
                        color: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0.5rem',
                        fontSize: '0.7rem',
                        fontWeight: '400',
                        marginLeft:'0.3rem'
                    }}
                    >인증하기
                    </Button>
                </Container>

                <h4 className="text-dark" style={h4Style}>인증번호 입력</h4>
                <Container className="d-flex" style={{ marginLeft: '8rem' }}>
                    <InputGroup className="mb-3" style={{ width: '15.45rem', height: '2.25rem', flexShrink: '0', borderRadius: '0.3125rem', border: '1px solid #A6A6A6' }}>
                        <Form.Control type="text" value={id}
                            style={{ background: '#F1F1F1' }} placeholder="인증번호 입력" />
                    </InputGroup>

                    {passwordMessage && <p className="text-danger text-end w-50">{passwordMessage}</p>}
                    <Button variant="primary" size="lg" style={{
                        display: 'flex',
                        backgroundColor: '#0074FF',
                        width: '3.8rem',
                        height: '2.25rem',
                        padding: '0.5625rem 0.3125rem',
                        color: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0.5rem',
                        fontSize: '0.7rem',
                        fontWeight: '400',
                        marginLeft:'0.3rem'
                    }}
                    >확인
                    </Button>
                </Container>

                <h4 className="text-dark" style={h4Style}>이름</h4>
                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control type="text" placeholder="이름 입력"
                    style={{width: '15.75rem', height: '2.25rem', flexShrink: '0', borderRadius: '0.3125rem', border: '1px solid #A6A6A6'}} />
                </InputGroup>

                <h4 className="text-dark" style={h4Style}>비밀번호</h4>
                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호 입력"
                        style={{ background: '#F1F1F1' }} />
                </InputGroup>

                
                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="비밀번호 입력"
                        style={{ background: '#F1F1F1' }} />
                </InputGroup>

                <Button type="button" className="btn-primary" onClick={handleModalShow}
                    size="lg" style={{
                        display: 'flex',
                        backgroundColor: '#0074FF',
                        width: '22.5rem',
                        height: '2.9375rem',
                        padding: '0.875rem 0rem',
                        color: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        fontWeight: '600'
                    }}
                >약관 동의 후 가입 완료하기
                </Button>
            </Form>

            <hr style={{ marginTop: '2.56rem', marginBottom:'1rem', backgroundColor: '#DDD', width: '40.9375rem', height: '0.0625rem' }} />

            <Form className="w-100 d-flex flex-column align-items-center mt-2"
                style={{paddingBottom:'6rem'}}>
                <h2 className="text-dark" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '9.2em', marginTop: '1em' }}>간편가입</h2>

                <Button variant="light" className="p-0 mb-3" style={{ width: '19.5rem', height: '3rem', borderRadius: 'none', padding: 0 }}>
                    <Image src={KakaoLogInButton} alt="카카오 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Button>

                <Button variant="success" className="p-0 mb-3" style={{ width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'white', fontSize: '0.9375rem' }}>
                    네이버로 로그인
                </Button>

                <Button variant="light" className="p-0 mb-3" style={{ border: '1px solid black', width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'black', fontSize: '0.9375rem' }}>
                    <Image src={GoogleLogInImage} alt="구글 로그인" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
                    구글로 로그인
                </Button>

                <Button variant="light" className="p-0 mb-3" style={{ 
                    border: '1px solid black', width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'black', fontSize: '0.9375rem' }}>
                    <Image src={AppleLogInImage} alt="애플 로그인" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' 
                        
                    }} />
                    애플로 로그인
                </Button>
            </Form>

            <Modal
                show={showModal}
                onHide={handleModalClose}
                centered
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '1.5rem', fontStyle: 'normal', fontWeight: '600', lineHeight: '121.2%' }}>
                        약관확인
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ width: '31.12888rem', fontSize: '0.875rem', fontWeight: '400', lineHeight: '121.2%' }}>
                        개별 동의 선택이 가능하며, 필수 항목에 동의하여야 서비스 이용이 가능합니다.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        style={{
                            width: '31.81rem',
                            height: '2.75rem',
                            flexShrink: '0',
                            borderRadius: '0.3125rem',
                            background: '#0064DC',
                            textAlign: 'center',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '1rem',
                            fontWeight: '800',
                            fontStyle: 'normal',
                        }}
                        variant="primary"
                        onClick={handleModalClose}
                    >
                        회원가입 완료
                    </Button>
                </Modal.Footer>
            </Modal>

            <style type="text/css">
                {`
                .custom-modal .modal-content {
                    border: none;
                    width: 34.0625rem;
                    height: 35.5625rem;
                    border-radius: 0.625rem;
                    background: #FFF;
                }
                `}
            </style>
        </Container>
    );
};

export default Signup;
