import { useState } from "react";
import { Container, Row, Image, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import KakaoLogInButton from '../src/image/kakao_login_large_wide 1.png';
import GoogleLogInImage from '../src/image/image 5.png';
import AppleLogInImage from '../src/image/image 6.png';

import '../css/Base.css';
import '../src/App.css';

import useGoogleAuth from '../hooks/usegoogleAuth';

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idMessage, setIDMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [isId, setIsID] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const {googleSocialLogin}=useGoogleAuth();

    const REST_API_KEY='백엔드에게 달라 하자1';
    const REDIRECT_URI='벡엔드에게 달라 하자2';
    const link=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler=()=>{
        window.location.href=link;
    };

    const googleLoginHandler=()=>{
        googleSocialLogin();
    }

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
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{ fontFamily: 'Pretendard',width: '40.9375rem', height: '39.4375rem', borderRadius: '0.625rem', backgroundColor: '#FFF', padding: '2rem', margin: '3rem auto' }}>
            <h1 className="text-primary" style={{ marginTop: '-1rem', fontFamily: 'BM HANNA_TTF', fontSize: '1.5rem', lineHeight: '3.125rem' }}>TravelMate</h1>
            <hr style={{ marginTop: '-0.19rem', backgroundColor: '#F0F0F0', width: '40.9375rem', height: '0.0625rem' }} />
            
            <h2 className="text-dark" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', textAlign: 'left', marginRight: '15rem', marginTop: '1em' }}>로그인</h2>
            
            <Form className="w-100 d-flex flex-column align-items-center mt-2">
                <div className="mb-3" style={{ width: '50%', position: 'relative' }}>
                    <Form.Label style={{ 
                        top: '0.5rem',
                        color: '#1A202C',
                        fontFamily: 'Pretendard',
                        fontSize: '1rem',
                        fontWeight: 400,
                        lineHeight: '1.212rem',
                        textTransform: 'uppercase',
                        marginRight:'85%'
                    }}>
                        이메일
                    </Form.Label>
                    <Form.Control type="text" value={id} onChange={handleIDChange} placeholder="이메일 입력" />
                </div>
                {idMessage && <p className="text-danger text-end w-50">{idMessage}</p>}

                <div className="mb-3" style={{ width: '50%', position: 'relative' }}>
                    <Form.Label style={{ 
                        top: '0.5rem',
                        left: '0',
                        color: '#1A202C',
                        fontFamily: 'Pretendard',
                        fontSize: '1rem',
                        fontWeight: 400,
                        lineHeight: '1.212rem',
                        textTransform: 'uppercase',
                        marginRight:'85%',
                        width:'20%'
                    }}>
                        비밀번호
                    </Form.Label>
                    <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호 입력" />
                </div>
                {passwordMessage && <p className="text-danger text-end w-50">{passwordMessage}</p>}
            </Form>

            <Link to="/findid" className="text-muted mt-n4 mb-4" style={{ textDecoration:'none',marginLeft: '15em', fontSize: '0.75rem',fontFamily: 'Pretendard', }}>
            로그인 정보를 잊으셨나요?</Link>

            {/* 소셜 로그인 버튼 목록 */}
            <Button onClick={loginHandler} variant="light" className="p-0 mb-2 kakao-login-btn" style={{ width: '19.5rem', height: '3rem',borderRadius: 'none', padding: 0 }}>
                <Image src={KakaoLogInButton} alt="카카오 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Button>

            <Button variant="success" className="p-3 mb-2" style={{ width: '19.5rem', height: '3rem', borderRadius: '1.875rem',border:'none', backgroundColor: '#60D051', padding: 0, color: 'white', fontSize: '0.9375rem' }}>
                네이버로 로그인
            </Button>

            <Row className="w-100 mt-1 text-center justify-content-center">
                <Button onClick={googleSocialLogin} variant="light" className="p-0 mb-2 me-2" style={{ width: '2.5rem', height: '2.35294rem', borderRadius: '100rem', padding: 0, border: 'none' }}>
                    <Image src={GoogleLogInImage} alt="Google 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Button>

                <Button variant="light" className="p-0 mb-2 ms-2" style={{ width: '2.5rem', height: '2.35294rem', borderRadius: '100rem', padding: 0, border: 'none' }}>
                    <Image src={AppleLogInImage} alt="Apple 로그인" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Button>
            </Row>

            <div className="d-flex align-items-center ">
                <p className="text-center me-2" style={{ fontSize: '0.75rem', fontWeight: 800, marginTop: '1rem', marginBottom: '-1rem' }}>또는</p>
            </div>

            <div className="d-flex align-items-center mt-4">
                <p className="text-center" style={{ fontSize: '0.75rem', fontWeight: 800, marginRight: '-0.5rem', lineHeight: '1.125rem' }}>
                    아직 TravelMate 계정이 없나요?</p>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
                <Button variant="link" className="text-center" style={{ color: '#58C1C2', fontSize: '0.75rem', paddingBottom: '1.3rem', fontWeight: 800}}>
                회원가입
                </Button>
            </Link>
            </div>
        </Container>
    );
};

export default Login;
