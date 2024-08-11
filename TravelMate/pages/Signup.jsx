import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Modal, Image, Form, Button, InputGroup } from 'react-bootstrap';

import KakaoLogInButton from '../src/image/kakao_login_large_wide 1.png';
import GoogleLogInImage from '../src/image/image 5.png';
import AppleLogInImage from '../src/image/image 6.png';
import '../css/Base.css';
import '../src/App.css';

import useSignup from '../hooks/useSignup';
import SignupModal from '../components/SignupModal';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [veriCode, setVeriCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [showVerificationCodeModal, setVerificationCodeModal] = useState(false);
    const [showSignupModal, setSignupShowModal] = useState(false);

    const { signup, isLoading, error, data } = useSignup();

    useEffect(() => {
        if (data) {
            handleSignupModalShow();
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            alert(`회원가입 실패: ${error}`);
        }
    }, [error]);

    const validateEmail = (email) => {
        if (!email) {
            setEmailMessage("이메일을 입력하세요");
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailMessage('유효한 이메일 주소를 입력하세요');
            return false;
        } else {
            setEmailMessage('');
            return true;
        }
    };

    const validatePassword = (password) => {
        if (!password) {
            setPasswordMessage('비밀번호를 입력하세요');
            return false;
        } else if (password.length < 4) {
            setPasswordMessage('비밀번호는 최소 4자리 이상이어야 합니다');
            return false;
        } else if (password.length > 12) {
            setPasswordMessage('비밀번호는 최대 12자리까지 가능합니다');
            return false;
        } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/.test(password)) {
            setPasswordMessage('영어, 숫자, 특수문자를 조합해서 작성해주세요');
            return false;
        } else {
            setPasswordMessage('');
            return true;
        }
    };

    const validateConfirmPassword = (confirmPassword) => {
        if (confirmPassword !== password) {
            setConfirmPasswordMessage('비밀번호가 일치하지 않습니다');
            return false;
        } else {
            setConfirmPasswordMessage('');
            return true;
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
        validateConfirmPassword(confirmPassword); 
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        validateConfirmPassword(newConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !validatePassword(password) || !validateConfirmPassword(confirmPassword)) return;

        // 회원가입 요청
        await signup(email, password);

        // 로딩 상태 처리
        if (!isLoading && !error && data) {
            // 회원가입 성공 시 모달 표시 및 페이지 이동
            handleSignupModalShow();
        }
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSignupModalClose = () => { 
        setSignupShowModal(false);
        navigate('/profilestep1'); 
    };
    
    const handleSignupModalShow = () => setSignupShowModal(true);

    const handleVerificationModalClose = () => setVerificationCodeModal(false);
    const handleVerificationModalShow = () => setVerificationCodeModal(true);

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center"
            style={{ width: '40.9375rem', height: '67.625rem', borderRadius: '0.625rem', backgroundColor: '#FFF', padding: '2rem', margin: '1.87rem auto' }}>
            <h1 className="text-primary" style={{
                paddingTop: '9.5rem', fontFamily: 'BM HANNA_TTF', fontSize: '1.5rem', lineHeight: '3.125rem',
                width: '8.6875rem', height: '.8rem', textAlign: 'center', fontWeight: '400', flexShrink: '0'
            }}>TravelMate</h1>

            <hr style={{ marginTop: '2.56rem', backgroundColor: '#DDD', width: '40.9375rem', height: '0.0625rem' }} />

            <h2 className="text-dark" style={{ fontFamily: 'Pretendard', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '15.25rem', marginTop: '1.44rem', marginBottom: '-0.081rem' }}>
                회원가입
            </h2>

            <Form className="w-100 d-flex flex-column align-items-center" style={{ marginTop: '1%' }} onSubmit={handleSubmit}>
                <div className="text-dark custom-banner">이메일</div>

                <Container className="d-flex" style={{ marginLeft: '8rem' }}>
                    <InputGroup className="mb-3" style={{ width: '15.45rem', height: '2.25rem', flexShrink: '0' }}>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            placeholder="이메일 입력"
                            style={{ border: '1px solid #A6A6A6', borderRadius: '0.3125rem' }}
                        />
                    </InputGroup>
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
                {emailMessage && <h6 className="text-danger text-start w-50"
                style={{marginTop:'-1.5%',fontSize:'0.875rem'}}>{emailMessage}</h6>}

                <div className="text-dark custom-banner" style={{marginLeft:'7%'}}>인증번호 입력</div>
                <Container className="d-flex" style={{ marginLeft: '8rem' }}>
                    <InputGroup className="mb-3" style={{ width: '15.45rem', height: '2.25rem', flexShrink: '0' }}>
                        <Form.Control 
                            type="text" 
                            value={veriCode} 
                            onChange={(e) => setVeriCode(e.target.value)}
                            style={{ background: '#F1F1F1', border: '1px solid #A6A6A6', borderRadius: '0.3125rem' }} 
                            placeholder="인증번호 입력"
                        />
                    </InputGroup>
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

                <div className="text-dark custom-banner" style={{marginLeft:'-3%'}}>이름</div>
                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control type="text" placeholder="이름 입력"
                        style={{ width: '15.75rem', height: '2.25rem', flexShrink: '0', borderRadius: '0.3125rem', border: '1px solid #A6A6A6' }} />
                </InputGroup>

                <div className="text-dark custom-banner"  style={{marginLeft:'1%'}}>비밀번호</div>
                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control 
                        type={showPassword ? "text" : "password"} 
                        value={password} 
                        onChange={handlePasswordChange} 
                        placeholder="비밀번호 입력"
                        style={{ background: '#F1F1F1' }} 
                    />
                </InputGroup>
                {passwordMessage && <h6 className="text-danger text-start w-50"
                style={{marginTop:'-1.5%',fontSize:'0.875rem'}}>{passwordMessage}</h6>}

                <InputGroup className="mb-3" style={{ width: '53%' }}>
                    <Form.Control 
                        type={showConfirmPassword ? "text" : "password"} 
                        value={confirmPassword} 
                        onChange={handleConfirmPasswordChange} 
                        placeholder="비밀번호 확인"
                        style={{ background: '#F1F1F1' }} 
                    />
                </InputGroup>
                {confirmPasswordMessage && <h6 className="text-danger text-start w-50"
                style={{marginTop:'-1.5%',fontSize:'0.875rem'}}>{confirmPasswordMessage}</h6>}

                <Button type="submit" disabled={isLoading} className="btn-primary"
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
                        fontWeight: '500',
                        fontFamily: 'Pretendard',
                        marginBottom: '1rem'
                    }}
                >
                    약관 동의 후 가입 완료하기
                </Button>
                
            </Form>

            <hr style={{ marginTop: '1.56rem', marginBottom: '1rem', backgroundColor: '#DDD', width: '40.9375rem', height: '0.0625rem' }} />

            <Form className="w-100 d-flex flex-column align-items-center mt-4" style={{ marginBottom: '10rem' }}>
                <h2 className="text-dark" style={{ fontFamily: 'Pretendard', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '9.2em', marginTop: '0.5rem', marginBottom: '1rem' }}>간편가입</h2>

                <Button variant="light" className="p-0 mb-3" style={{ width: '19.5rem', height: '3rem', borderRadius: 'none', padding: 0 }}>
                    <Image src={KakaoLogInButton} alt="카카오 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Button>

                <Button variant="success" className="p-0 mb-3" style={{ fontFamily: 'Pretendard', width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'white', fontSize: '0.9375rem' }}>
                    네이버로 로그인
                </Button>

                <Button variant="light" className="p-0 mb-3" style={{ fontFamily: 'Pretendard', border: '1px solid black', width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'black', fontSize: '0.9375rem' }}>
                    <Image src={GoogleLogInImage} alt="구글 로그인" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
                    구글로 로그인
                </Button>

                <Button variant="light" className="p-0 mb-3" style={{
                    fontFamily: 'Pretendard', border: '1px solid black', width: '19.5rem', height: '3rem', borderRadius: '1.875rem', padding: 0, color: 'black', fontSize: '0.9375rem'
                }}>
                    <Image src={AppleLogInImage} alt="애플 로그인" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
                    애플로 로그인
                </Button>

                <div className="d-flex align-items-center mt-4 my-4">
                    <p className="text-center" style={{ fontFamily: 'Pretendard', fontSize: '0.75rem', fontWeight: 800, marginRight: '-0.5rem', lineHeight: '1.125rem' }}>
                        이미 TravelMate 계정이 있으신가요?</p>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="link" className="text-center" style={{ fontFamily: 'Pretendard', color: '#58C1C2', fontSize: '0.75rem', paddingBottom: '1.3rem', fontWeight: 800 }}>
                            로그인
                        </Button>
                    </Link>
                </div>
            </Form>

            <SignupModal show={showSignupModal} onHide={handleSignupModalClose} />

            <Modal show={showVerificationCodeModal} onHide={handleVerificationModalClose} centered>
                <Modal.Body>
                    <p style={{ width: '18.75rem', fontFamily: 'Pretendard', fontSize: '1.5rem', fontWeight: '800', fontStyle: 'normal', lineHeight: '121.2%' }}>
                        인증번호 전송 안내
                    </p>
                    <p style={{ width: '28.5625rem', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: '500', lineHeight: '121.2%' }}>
                        {email}의 메일로 인증번호를 전송했습니다.
                        메일에 있는 인증번호를 입력해 주세요.
                    </p>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
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
                .custom-banner {
                    margin-right: 45%; margin-bottom:1.5%;
                    text-align: left;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 121.2%;
                    font-family: Pretendard;
                    text-transform: uppercase;
                }
                `}
            </style>
        </Container>
    );
};

export default Signup;
