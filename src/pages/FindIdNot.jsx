import React, { useState } from "react";
import { Container, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 가입되지 않은 회원 알림 페이지

const FindIdNot = () => {
    const navigate=useNavigate();

    const handleNextToSignup=()=>{
        navigate('/signup');
    }

    const handleNextToBefore=()=>{
        navigate('/findid');
    }

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center"
            style={{ paddingTop: '20rem' }}>
            <Banner>는 TravelMate에 등록되어 있지 않은 계정입니다.</Banner>
            <div style={{marginTop:'-1rem',  marginLeft: '3.82rem' }}>
                <Button variant="primary" size="lg"
                    style={{
                        width: '29.1865rem',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        background: '#0064DC',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                    onClick={handleNextToSignup}
                >
                    회원가입하기
                </Button>
                <div style={{marginTop:'0.5rem'}}></div>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNextToBefore}
                    style={{
                        width: '29.1865rem',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        border:'1px solid #707070',
                        background: 'var(--white, #FFF)',
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#707070',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                >
                    다시 확인
                </Button>
            </div>

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
    font-family: "Baloo Thambi";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
`;

export default FindIdNot;
