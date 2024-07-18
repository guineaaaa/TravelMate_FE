import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';

const ProfileStep4 = () => {
    const [profileImage,setProfileImage]=useState(null);
    const navigate=useNavigate();

    useEffect=(()=>{
      const profileData=JSON.parse(localStorage.getItem('profileData'));
      if(profileData){setProfileImage(profileData.profileImage||'');}
    },[]);

    const handleNext=()=>{
      const profileData=JSON.parse(localStorage.getItem('profileData'));
      profileData.profileImage=profileImage;
      localStorage.setItem('profileData',JSON.stringify(profileData));
      navigate('/profileStep5');
    }

    const handleImageChange=(e)=>{
      const file=e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
    }

    return(
        <ProfileContainer>
            <ProfileRequest>프로필 사진을 등록해주세요.</ProfileRequest>
            <Annotation>프로필 클릭률이 32% 올라가요!</Annotation>
            <ProfileImage type="file" onChange={handleImageChange}/>
            {profileImage&&<img src={profileImage} alt="미리보기"/>}

            <NextButton onClick={handleNext}>다음</NextButton>
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

const ProfileImage=styled.input`
`;

export default ProfileStep4;