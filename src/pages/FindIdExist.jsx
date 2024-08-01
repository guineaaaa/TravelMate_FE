import React, { useState } from "react";
import { Container, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// 이미 가입된 계정

const FindIdExist = () => {
    const navigate=useNavigate();

    const handleNextToLogin=()=>{
        navigate('/login');
    }

    const handleNextToBefore=()=>{
        navigate('/findid');
    }

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center"
            style={{ paddingTop: '20rem' }}>
            <Banner>회원으로 등록 이메일 아이디 입니다.
                해당 이메일 로그인하시고 와디즈를 이용하세요!
            </Banner>
            <div style={{ marginLeft: '3.82rem' }}>
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
                    onClick={handleNextToLogin}
                >
                    로그인
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

const Banner = styled.h5`
    margin-top:1.62rem;
    margin-bottom:4.06rem;
    margin-right:8rem;
    display: flex;
    width: 16.375rem;
    height: 2.5rem;
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

export default FindIdExist;
