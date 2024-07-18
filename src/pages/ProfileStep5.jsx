import React, {useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';

const ProfileStep5=()=>{
    const [profileData, setProfileData]=useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('profileData'));
        setProfileData(data);
        console.log(profileData);
    },[])

    const handleNext=()=>{
        const profileData=JSON.parse(localStorage.getItem('profileData'));
        
        localStorage.setItem('profileData', JSON.stringify(profileData));
        navigate('/');
    }

    return(
        <ProfileContainer>
            <ProfileRequest>가입완료</ProfileRequest>
            <Annotation>TravelMate에 오신 것을 환영합니다!</Annotation>
            <NextButton onClick={handleNext}>확인</NextButton>
        </ProfileContainer>
    )
}


const ProfileContainer = styled.div`
  width: 40.9375em;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.625em;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5em auto;
  padding: 2em;
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

const NextButton = styled.button`
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

export default ProfileStep5;