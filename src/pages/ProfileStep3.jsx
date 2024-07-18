import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import './Base.css';

const ProfileStep3=()=>{
    const [introduction, setIntroduction] = useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        const profileData=JSON.parse(localStorage.getItem('profileData'));
        if(profileData){
            setIntroduction(profileData.introduction||'');
        }
    },[]);

    const handleNext=()=>{
        const profileData=JSON.parse(localStorage.getItem('profileData'));
        profileData.introduction=introduction;
        localStorage.setItem('profileData', JSON.stringify(profileData));
        navigate('/profilestep4');
    }

    return(
        <ProfileContainer>
            <ProfileRequest>자신을 소개해주세요!</ProfileRequest>
            <Annotation>나를 잘 표현할 수 있도록, 글을 입력해주세요<br></br>
            (0/1,500자)</Annotation>
            <TextArea value={introduction} onChange={(e)=>setIntroduction(e.target.value)}
                placeholder="자신을 소개하는 긴 문장을 입력해 주세요"></TextArea>
            <NextButton onClick={handleNext}>다음</NextButton>
        </ProfileContainer>

    )
}

const ProfileContainer = styled.div`
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

const ProfileRequest = styled.h1`
  color: var(--Neutral-10, #486284);
  font-family: "DM Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem; /* 166.667% */
  letter-spacing: 0.03125rem;
  margin-bottom: 0.5em;
  text-align: center;
`;

const Annotation = styled.h2`
  color: var(--Neutral-10, #486284);
  font-family: "DM Sans";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 160% */
  letter-spacing: 0.03125rem;
  margin-bottom: 1em;
  text-align: center;
`;

const TextArea=styled.textarea`
    border-radius: 0.625rem;
    border: 1.5px solid #999A9A;
    background: #FFF;
    display: flex;
    width: 25.75rem;
    height: 16.5rem;
    padding: 0.75rem 1rem;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
`;

const NextButton = styled.button`
  margin-top:1em;
  padding: 0.75em 1.5em;
  border-radius: 1.875rem;
  background: var(--Black, #000);
  color: white;
  border: none;
  border-radius: 10em;
  font-family: "DM Sans";
  cursor: pointer;
  width: 19.5rem;
  height: 3.2rem;
  flex-shrink: 0;
  &:hover {
    font-weight:800;
  }
`;

export default ProfileStep3;