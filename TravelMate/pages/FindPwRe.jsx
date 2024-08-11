import  { useState } from "react";
import { Container, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FindPwRe = () => {
    const [unRegisteredModal, setUnRegisteredModal] = useState(false);
    const [verificationCodeModal, setVerificationCodeModal] = useState(false);
    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);

    const navigate=useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setInvalidEmail(false);
    };

    const handleNext=()=>{
        navigate('/');
    }

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{  fontFamily: 'Pretendard', paddingTop: '21%', overflowX: 'hidden' }}>
            <Banner>
                가입하셨던 이메일 계정을 입력하시면, <br />
                비밀번호를 새로 입력할 수 있는 링크를 이메일로 <br />
                발송해드립니다.
            </Banner>
            <div className="d-flex flex-column align-items-center mt-3 me-4" style={{ marginTop:'-1rem',marginLeft: '10%',width:'30%' }}>
                <Form className="w-100 d-flex flex-column align-items-center mt-2">
                    <InputGroup className="mb-3" style={{
                        width: '29.1875rem', height: '2.75rem',
                        borderRadius: '0.3125rem', border: '1px solid #A6A6A6',
                        background: 'var(--white,#FFF)'
                    }}>
                        <Form.Control type="text" placeholder="이메일 계정" value={email} onChange={handleEmailChange} isInvalid={invalidEmail} />
                    </InputGroup>
                    {invalidEmail && <div style={{ color: 'red', marginTop: '-0.75rem', marginBottom: '1rem' }}>유효한 이메일 주소를 입력해주세요.</div>}
                </Form>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    style={{
                        width: '29.1865rem',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        border:'1px solid #A6A6A6',
                        background: 'var(--white, #FFF)',
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#A6A6A6',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                >
                    링크 재발송
                </Button>
            </div>
        </Container>
    );
}

const Banner = styled.h5`
    text-align: left;
    color: #878787;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-right:8%;
`;

export default FindPwRe;
