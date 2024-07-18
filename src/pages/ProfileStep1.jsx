import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import './Base.css';

const ProfileStep1 = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  

  const handleNext = () => {
    const profileData = {
      name,
      birthday,
      gender,
      preferSpots: '',
      profileImage: ''
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    navigate('/profilestep2');
  };

  return (
    <ProfileContainer>
      <InputContainer>
        <ProfileRequest>이름(실명)을 입력해주세요</ProfileRequest>
        <Annotation>신뢰할 수 있는 커뮤니티를 만들어 가요.</Annotation>
        <NameInput 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />

        <ProfileRequest>생년월일을 입력해주세요</ProfileRequest>
        <Annotation>또래와 함께하는 맞춤형 모임을 추천해드려요.</Annotation><BirthdayInput 
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <ProfileRequest>성별을 선택해주세요.</ProfileRequest>
        <RadioInputGroup>
          <Form.Check
            type="radio"
            id="radio-male"
            label="남성"
            name="gender"
            value="남성"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            type="radio"
            id="radio-female"
            label="여성"
            name="gender"
            value="여성"
            onChange={(e) => setGender(e.target.value)}
          />
        </RadioInputGroup>

        <AgreeGroup>
        <AgreeInput type="checkbox" checked={agree}
        onChange={(e)=>setAgree(e.target.checked)}/><Annotation>[필수] 개인정보 활용에 동의합니다</Annotation>
        </AgreeGroup>

        <NextButton onClick={handleNext}>다음</NextButton>
      </InputContainer>
    </ProfileContainer>
  );
};

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

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const NameInput = styled.input`
  width: 50%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 0.25em;
  font-family: "DM Sans";
  text-align: center;
`;

const BirthdayInput = styled.input`
  width: 50%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 0.25em;
  font-family: "DM Sans";
  text-align: center;
`;

const RadioInputGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -0.7em;
  .form-check {
    margin-right: 1rem;
  }
  margin-bottom: 1em;
`;

const AgreeInput=styled.input`
    margin-bottom:0.5em;
`;

const AgreeGroup=styled.div`
    display:flex;
    gap:0.5em;
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


export default ProfileStep1;
