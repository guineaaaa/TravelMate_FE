import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { Container, Modal, Image, Form, Button, InputGroup } from 'react-bootstrap';

import KakaoLogInButton from '../images/kakao_login_large_wide 1.png';
import GoogleLogInImage from '../images/image 5.png';
import AppleLogInImage from '../images/image 6.png';
import './Base.css';
import '../App.css';

import SignupModal from '../components/SignupModal';

const Signup = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [idMessage, setIDMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [showVerificationCodeModal, setVerificationCodeModal] = useState(false);
    const [showSignupModal, setSignupShowModal] = useState(false);
    const [email, setEmail] = useState(""); // 이메일 상태 변수 추가

    const navigate=useNavigate();

    const handleIDChange = (e) => {
        const currentID = e.target.value;
        setId(currentID);
        setEmail(currentID); // 이메일 상태 업데이트
        if (!currentID.trim()) {
            setIDMessage("아이디를 입력하세요");
        } else {
            setIDMessage("");
        }
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    // SignUp 모달
    const handleSignupModalClose = () =>{setSignupShowModal(false); navigate('/profilestep1')}
    const handleSignupModalShow = () => setSignupShowModal(true);

    // 인증번호 모달
    const handleVerificationModalClose = () => setVerificationCodeModal(false);
    const handleVerificationModalShow = () => setVerificationCodeModal(true);

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
            style={{ width: '40.9375rem', height: '67.625rem', borderRadius: '0.625rem', backgroundColor: '#FFF', padding: '2rem', margin: '1.87rem auto' }}>
            <h1 className="text-primary" style={{
                paddingTop: '9.5rem', fontFamily: 'BM HANNA_TTF', fontSize: '1.5rem', lineHeight: '3.125rem',
                width: '8.6875rem', height: '.8rem', textAlign: 'center', fontWeight: '400', flexShrink: '0'
            }}>TravelMate</h1>

            <hr style={{ marginTop: '2.56rem', backgroundColor: '#DDD', width: '40.9375rem', height: '0.0625rem' }} />

            <h2 className="text-dark" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '14.25rem', marginTop: '1.44rem', marginBottom: '-0.081rem' }}>
                회원가입
            </h2>

            <Form className="w-100 d-flex flex-column align-items-center"
                style={{ marginTop: '0.75rem' }}>

                <h4 className="text-dark" style={{ ...h4Style }}>
                    이메일
                </h4>

                <Container className="d-flex" style={{
                    marginLeft: '8rem'
                }}>
                    <InputGroup className="mb-3" style={{ width: '15.45rem', height: '2.25rem', flexShrink: '0' }}>
                        <Form.Control type="text" value={id} onChange={handleIDChange} placeholder="이메일 입력"
                            style={{ border: '1px solid #A6A6A6', borderRadius: '0.3125rem' }}
                        />
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
                        marginLeft: '0.3rem'
                    }}
                        onClick={handleVerificationModalShow}
                    >
                        인증하기
                    </Button>
                </Container>

                <h4 className="text-dark" style={h4Style}>인증번호 입력</h4>
                <Container className="d-flex" style={{ marginLeft: '8rem' }}>
                    <InputGroup className="mb-3" style={{ width: '15.45rem', height: '2.25rem', flexShrink: '0' }}>
                        <Form.Control type="text" value={id}
                            style={{ background: '#F1F1F1', border: '1px solid #A6A6A6', borderRadius: '0.3125rem' }} placeholder="인증번호 입력"
                        />
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
                        marginLeft: '0.3rem'
                    }}
                    >
                        확인
                    </Button>
                </Container>

                <h4 className="text-dark" style={h4Style}>이름</h4>
                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control type="text" placeholder="이름 입력"
                        style={{ width: '15.75rem', height: '2.25rem', flexShrink: '0', borderRadius: '0.3125rem', border: '1px solid #A6A6A6' }} />
                </InputGroup>

                <h4 className="text-dark" style={h4Style}>비밀번호</h4>
                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호 입력"
                        style={{ background: '#F1F1F1' }} />
                </InputGroup>

                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="비밀번호 확인"
                        style={{ background: '#F1F1F1' }} />
                </InputGroup>

                <Button type="button" className="btn-primary" onClick={handleSignupModalShow}
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
                >
                    약관 동의 후 가입 완료하기
                </Button>
            </Form>

            <hr style={{ marginTop: '1.56rem', marginBottom: '1rem', backgroundColor: '#DDD', width: '40.9375rem', height: '0.0625rem' }} />

            {/* 간편 가입 버튼 폼 */}
            <Form className="w-100 d-flex flex-column align-items-center mt-2"
                style={{ marginBottom: '10rem' }}>
                <h2 className="text-dark" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '9.2em', marginTop: '0.5rem',marginBottom:'1rem'}}>간편가입</h2>

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
                    border: '1px solid black', width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'black', fontSize: '0.9375rem'
                }}>
                    <Image src={AppleLogInImage} alt="애플 로그인" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
                    애플로 로그인
                </Button>

                <div className="d-flex align-items-center mt-4 my-5" >
                    <p className="text-center" style={{ fontSize: '0.75rem', fontWeight: 800, marginRight: '-0.5rem', lineHeight: '1.125rem' }}>
                        이미 TravelMate 계정이 있으신가요?</p>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button variant="link" className="text-center" style={{ color: '#58C1C2', fontSize: '0.75rem', paddingBottom: '1.3rem', fontWeight: 800}}>
                        로그인
                    </Button>
                </Link>
                </div>
            </Form>

            {/*약관 확인 모달 */}
            <SignupModal show={showSignupModal} handleClose={handleSignupModalClose}/>

            {/*인증번호 전송 모달*/}
            <Modal
                show={showVerificationCodeModal}
                onHide={handleVerificationModalClose}
                centered
            >
                <Modal.Body>
                    <p style={{ width: '18.75rem', fontFamily: "Plus Jakarta Sans", fontSize: '1.5rem', fontWeight: '800', fontStyle: 'normal', lineHeight: '121.2%' }}>
                        인증번호 전송 안내
                    </p>
                    <p style={{ width: '28.5625rem', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: '500', lineHeight: '121.2%' }}>
                        {email}의 메일로 인증번호를 전송했습니다.
                        메일에 있는 인증번호를 입력해 주세요.
                    </p>
                </Modal.Body>
                <Modal.Footer style={{borderTop:'none'}}>
                    <Button
                        style={{
                            width: '29.1875rem',
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
                        onClick={handleVerificationModalClose}
                    >
                        확인
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
            .form-check-label.indent {
                padding-left: 1.5rem;
            }
            `}
            </style>

        </Container>
    );
};

export default Signup;
