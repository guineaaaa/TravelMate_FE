import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Badge, Button, CloseButton, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const FindPw=()=>{

    return(
        <Container fluid className="d-flex flex-column align-items-center justify-content-center"
        style={{paddingTop:'20rem'}}>
            <Banner>가입하셨던 이메일 계정을 입력하시면, <br/>
            비밀번호를 새로 입력할 수 있는 링크를 이메일로 <br/>
            발송해드립니다.</Banner>
            <div style={{marginLeft:'3.82rem'}}>
            <Form className="w-100 d-flex flex-column align-items-center mt-2">
                <InputGroup className="mb-3" style={{ 
                    width:'29.1875rem', height:'2.75rem',
                    borderRadius:'0.3125rem', border:'1px solid #A6A6A6',
                    background:'var(--white,#FFF)'
                 }}>
                <Form.Control type="text" placeholder="이메일 계정" />
            </InputGroup>
            </Form>
            <Button variant="primary" size="lg" 
                            style={{
                                width:'29.1865rem',
                                height:'2.75rem',
                                flexShrink:'0',
                                borderRadius:'0.3125rem',
                                background:'#0064DC',
                                display:'flex',
                                justifyContent:'center',
                                color:'#D9D9D9',
                                textAlign:'center',
                                fontSize:'1rem',
                                fontWeight:'800'
                            }}
                            >
                            확인
                        </Button>
                        </div>
        </Container>

    )
}

const Banner=styled.h5`
    margin-top:1.62rem;
    margin-bottom:2.81rem;
    margin-right:6rem;
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