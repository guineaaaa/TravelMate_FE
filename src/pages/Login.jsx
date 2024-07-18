import React, { useState } from "react";
import styled from 'styled-components';

import { HrIcon } from '../constants/icons';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import './Base.css';
import '../App.css'

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idMessage, setIDMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [isId, setIsID] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [error, setError] = useState("");

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
        <LogInContainer>
            <LogoBanner>TravelMate</LogoBanner>
            <StyledHr />
            <LogInBanner>로그인</LogInBanner>
            <InputGroupContainer>
                <StyledInputGroup className="mb-3">
                    <Form.Control type="text" value={id} onChange={handleIDChange} placeholder="이메일 입력"/>
                </StyledInputGroup>
                <Warning className="message">{idMessage}</Warning>

                <StyledInputGroup className="mb-3">
                    <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호 입력"/>
                </StyledInputGroup>
                <Warning className="message">{passwordMessage}</Warning>
            </InputGroupContainer>
            <FindLogInfo>로그인 정보를 잊으셨나요?</FindLogInfo>
            
        </LogInContainer>
    );
}

const LogInContainer = styled.div`
    width: 40.9375em;
    height: 34.5em;
    flex-shrink: 0;
    border-radius: 0.625em;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5em auto;
`;

const LogoBanner = styled.h1`
    color: #0064DC;
    text-align: center;
    font-family: 'BM HANNA_TTF';
    font-weight: normal;
    font-size: 1.5rem;
    font-style: normal;
    line-height: 3.125rem;
    width: 8.6875rem;
    height: 2.5625rem;
    flex-shrink: 0;
`;

const StyledHr = styled(HrIcon)`
    background: #F0F0F0;
    width: 100%;
    height: 0.0625rem;
`;

const LogInBanner = styled.h1`
    color: #1A202C;
    
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 121.2%;
    text-transform: uppercase;
    text-align: left;
    margin-right:11em;
    margin-top:1em;
`;

const InputGroupContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.1em;

    > *:not(:last-child) {
        margin-bottom: -0.5em; /* 간격을 조정할 부분 */
    }
`;

const StyledInputGroup = styled(InputGroup)`
    width: 50%;
`;

const Warning = styled.p`
    color: red;
    text-align: right;
    margin-right: 10px;
    padding-bottom:0.5em;
    margin-top:-0.3em;
`;

const FindLogInfo=styled.p`
    margin-top:-4em;
    margin-left:15em;
    color: #A6A6A6;
    font-family: "Baloo Thambi";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem; /* 416.667% */
`;



export default Login
