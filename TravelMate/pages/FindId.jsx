import React, { useState } from "react";
import { Container, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const FindId = () => {
    const [socialLogedInModal, setSocialLogedInModal] = useState(false);

    // 소셜 로그인 모달 
    const handleSocialLogedInModalClose = () => setSocialLogedInModal(false);
    const handleSocialLogedInModalShow = () => setSocialLogedInModal(true);

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center"
            style={{ fontFamily: 'Pretendard',paddingTop: '20rem' }}>
            <Banner>이메일을 입력해주세요!<br />
                가입 여부를 확인해드릴게요.</Banner>
            <div style={{ marginTop:'-1rem', marginLeft: '3.82rem' }}>
                <Form className="w-100 d-flex flex-column align-items-center mt-2">
                    <InputGroup className="mb-3" style={{
                        width: '29.1875rem', height: '2.75rem',
                        borderRadius: '0.3125rem', border: '1px solid #A6A6A6',
                        background: 'var(--white,#FFF)'
                    }}>
                        <Form.Control type="text" placeholder="이메일 계정" />
                    </InputGroup>
                </Form>
                <Button variant="primary" size="lg"
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
                        fontWeight: '800',
                       
                    }}
                    onClick={handleSocialLogedInModalShow}  // 수정된 부분
                >
                    확인
                </Button>
            </div>

            {/* 비밀번호 찾기 - 존재하지 않는 이메일 모달 */}
            <StyledModal
                show={socialLogedInModal}
                onHide={handleSocialLogedInModalClose}
                centered
                size="lg"
            >
                <Modal.Body>
                    <p style={{ marginBottom: "1.75rem", width: '18.75rem', fontFamily: "Plus Jakarta Sans", fontSize: '1.5rem', fontWeight: '800', fontStyle: 'normal', lineHeight: '121.2%' }}>
                        소셜 계정 로그인 안내
                    </p>
                    <p style={{ width: '28.5625rem', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: '500', lineHeight: '121.2%' }}>
                        입력하신 계정은 소셜 계정으로 가입한 계정입니다. 가입때 사용한 소셜 계정으로 로그인해주세요.
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
                            fontSize: '1rem',
                            fontWeight: '800',
                            fontStyle: 'normal',
                        }}
                        variant="primary"
                        onClick={handleSocialLogedInModalClose}
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
    margin-top:-0.8rem;
    margin-bottom:4.06rem;
    margin-right:15rem;
    display: flex;
    width: 9.875rem;
    height: 2.4375rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #878787;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
`;

export default FindId;
