import React, { useState } from "react";
import { Container, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const FindPw = () => {
    const [unRegisteredModal, setUnRegisteredModal] = useState(false);
    const [verificationCodeModal, setVerificationCodeModal] = useState(false);
    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);

    // 유효성 검사 정규식
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

    // 가입되지 않은 계정 모달 닫기/펼치기
    const handleUnRegisteredModalClose = () => setUnRegisteredModal(false);
    const handleUnRegisteredModalShow = () => setUnRegisteredModal(true);

    // 인증번호 전송 모달 닫기/펼치기
    const handleVerificationCodeModalClose = () => setVerificationCodeModal(false);
    const handleVerificationCodeModalShow = () => setVerificationCodeModal(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setInvalidEmail(false);
    };

    const handleConfirmClick = () => {
        if (!emailRegEx.test(email)) {
            setInvalidEmail(true);
            handleUnRegisteredModalShow();
        } else {
            setInvalidEmail(false);
            handleVerificationCodeModalShow();
        }
    };

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ paddingTop: '20rem' }}>
            <Banner>
                가입하셨던 이메일 계정을 입력하시면, <br />
                비밀번호를 새로 입력할 수 있는 링크를 이메일로 <br />
                발송해드립니다.
            </Banner>
            <div style={{ marginLeft: '3.82rem' }}>
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
                    onClick={handleConfirmClick}
                    style={{
                        width: '29.1865rem',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        background: '#0064DC',
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#D9D9D9',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                >
                    확인
                </Button>
            </div>

            {/* 비밀번호 찾기 - 존재하지 않는 이메일 모달 */}
            <StyledModal
                show={unRegisteredModal}
                onHide={handleUnRegisteredModalClose}
                centered
                size="lg"
            >
                <Modal.Body>
                    <p style={{ marginBottom:"1.75rem",width: '18.75rem', fontFamily: "Plus Jakarta Sans", fontSize: '1.5rem', fontWeight: '800', fontStyle: 'normal', lineHeight: '121.2%' }}>
                        등록되지 않은 계정
                    </p>
                    <p style={{ width: '28.5625rem', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: '500', lineHeight: '121.2%' }}>
                        {email}은 등록되어 있지 않은 계정입니다. 다른 계정을 입력해주세요.
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
                        onClick={handleUnRegisteredModalClose}
                    >
                        확인
                    </Button>
                </Modal.Footer>
            </StyledModal>

            {/* 비밀번호 찾기 - 링크 발송 모달 인증번호 전송 모달 */}
            <StyledModal
                show={verificationCodeModal}
                onHide={handleVerificationCodeModalClose}
                centered
                size="lg"
            >
                <Modal.Body >
                    <p style={{marginBottom:"1.75rem",width: '18.75rem', fontFamily: "Plus Jakarta Sans", fontSize: '1.5rem', fontWeight: '800', fontStyle: 'normal', lineHeight: '121.2%' }}>
                        발송 완료
                    </p>
                    <p style={{width: '25.5625rem', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: '500', lineHeight: '121.2%' }}>
                        작성하신 이메일로 비밀번호를 등록할 수 있는 링크 발송했으니 이메일을 확인해주세요.
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
                        onClick={handleVerificationCodeModalClose}
                    >
                        확인
                    </Button>
                </Modal.Footer>
            </StyledModal>
        </Container>
    );
}

const StyledModal = styled(Modal)`
    .modal-dialog {
        width: 40.9375rem;
        height: 23.4375rem;
        max-width: 100%;
        margin: auto;
    }
    .modal-content {
        padding: 3rem 3rem 3rem 3rem;
        height: 50%;
        width:100%;
    }
    .modal-body {
        padding: 2rem 3rem 2rem 3rem;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
    }

    .modal-footer {
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
    }
`;

const Banner = styled.h5`
    margin-top: 1.62rem;
    margin-bottom: 2.81rem;
    margin-right: 6rem;
    display: flex;
    width: 19.0625rem;
    height: 3.6875rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #878787;
    font-family: "Baloo Thambi";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
`;

export default FindPw;
