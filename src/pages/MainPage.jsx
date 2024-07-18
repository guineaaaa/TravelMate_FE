import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import MainPageNav from '../components/MainPageNav';
import backgroundImage from '../images/travelmate.png';
import AdboxImage from '../images/Adbox.png';
import {AirplaneIcon, SearchIcon} from '../constants/icons';

import Select from 'react-select';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const options = [
    { value: 'Eng', label: '영어' },
    { value: 'Jpn', label: '일본어' },
    { value: 'Fr', label: '프랑스어' },
];

const fontSize = '0.8rem';

const MainPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    return (
        <>
            <Navbar />
            <MainPageNav />

            <MainPageContainer>
                <MainPageBanner>
                    여행을 함께 할 안전한 사람을 구하고 있나요?<br />
                    동행자를 TravelMate에서 찾아보세요!
                </MainPageBanner>

                <SignupButton>가입하기</SignupButton>

                <MainContainer>
                    <InputGroupContainer>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ fontSize }}><SearchIcon/></InputGroup.Text> {/* SearchIcon 추가 */}
                            <Form.Control
                                style={{ fontSize }}
                                placeholder="나라, 지역 혹은 도시를 입력하세요"
                            />
                        </InputGroup>
                    </InputGroupContainer>

                    <CardGrid>
                        <StyledCard>
                            <Card.Header style={{ fontSize }}>날짜</Card.Header>
                            <Card.Body>
                                <DateInputGroup>
                                    <Form.Control style={{ fontSize }} type="date" placeholder="시작일" />
                                    <span style={{ fontSize }}>~</span>
                                    <Form.Control style={{ fontSize }} type="date" placeholder="종료일" />
                                </DateInputGroup>
                            </Card.Body>
                        </StyledCard>

                        <StyledCard>
                            <Card.Header style={{ fontSize }}>언어</Card.Header>
                            <Card.Body>
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            fontSize,
                                        }),
                                        singleValue: (provided) => ({
                                            ...provided,
                                            fontSize,
                                        }),
                                        option: (provided) => ({
                                            ...provided,
                                            fontSize,
                                        }),
                                    }}
                                />
                            </Card.Body>
                        </StyledCard>

                        <StyledCard>
                            <Card.Header style={{ fontSize }}>나이/성별</Card.Header>
                            <Card.Body>
                                <InputGroup className="mb-3">
                                    <Form.Control style={{ fontSize }} placeholder="나이 이상" />
                                    <span style={{ fontSize }}>~</span>
                                    <Form.Control style={{ fontSize }} placeholder="나이 미만" />
                                </InputGroup>
                                <RadioInputGroup>
                                    <Form.Check
                                        style={{ fontSize }}
                                        type="radio"
                                        id="radio-all"
                                        label="전체"
                                        name="gender"
                                    />
                                    <Form.Check
                                        style={{ fontSize }}
                                        type="radio"
                                        id="radio-male"
                                        label="남성만"
                                        name="gender"
                                    />
                                    <Form.Check
                                        style={{ fontSize }}
                                        type="radio"
                                        id="radio-female"
                                        label="여성만"
                                        name="gender"
                                    />
                                </RadioInputGroup>
                            </Card.Body>
                        </StyledCard>

                        <SearchButton style={{ fontSize }}>검색하기</SearchButton>
                    </CardGrid>
                </MainContainer>

                <AdContainer>
                    <AdBanner>현지 여행 상품</AdBanner>
                     
                    <AdImageContainer>
                    <AirplaneIcon/>
                    <Image src={AdboxImage} alt="Adbox" />
                    <Image src={AdboxImage} alt="Adbox" />
                    <Image src={AdboxImage} alt="Adbox" />
                    <AdLink>
                        최대 45%할인<br/>
                        상품 구경하기
                    </AdLink>
                    </AdImageContainer>

                </AdContainer>
            </MainPageContainer>
        </>
    );
}

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height:100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-clip:
    margin-bottom:1rem;

`;

const MainPageBanner = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: "Plus Jakarta Sans";
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 5.4em;
    margin-bottom:0.7em;
`;

const MainContainer = styled.div`
    background-color: white;
    border-radius:0.3125rem;
    padding: 1em;
    width: 80%;
    max-width: 800px; /* 유지하고 싶은 가로 크기 */
`;

const SignupButton = styled.button`
    border-radius: 2em;
    border: none;
    background-color: #95C2EC;
    color: black;
    width: 9em;
    height: 2.0em;
    font-size: 1rem;
    font-weight: 400;
    margin: 10px;
    margin-top:-0.2em;
`;

const InputGroupContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.1em;
`;

const CardGrid = styled.div`
    margin-top: 0.1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0.8rem;
    
`;

const StyledCard = styled(Card)`
    color: black;
    border:none;
    .card-header {
        background: #0064DC;
        color: white;
        border-radius: 0.625rem 0.625rem 0 0;
        font-weight: bold;
        border: 0.1px  solid black;
        font-size: 1rem; /* Card Header의 폰트 크기 조정 */
    }
    .card-body {
        background: #fff;
        color: black;
        border-radius: 0 0 0.625rem 0.625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        border: 0.1px  solid black;
    }
`;

const DateInputGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        font-size: 1rem; /* Input 요소의 폰트 크기 조정 */
    }

    span {
        font-weight: bold;
        margin: 0 0.5rem;
        font-size: 1rem; /* Span 요소의 폰트 크기 조정 */
    }
`;

const RadioInputGroup = styled.div`
    display: flex;
    margin-top: -0.7em;
    .form-check {
        margin-right: 1rem;
        font-size: ${fontSize}; /* 폰트 크기 조정 */
    }
`;

const SearchButton = styled.button`
    border-radius: 2em;
    border: none;
    background-color: #0064DC;
    color: white;
    width: 100%;
    height: 3em;
    font-size: 1.125rem;
    font-weight: 400;
    margin-top: 1em;
`;

const AdContainer = styled.div`
    background-color: white;
    border-radius: 0.3125rem;
    padding: 1em;
    width: 80%;
    max-width: 800px;
    margin-top: 0.8em;
    margin-bottom:4em;
`;

const AdBanner = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    margin-left:3rem;
`;

const AdImageContainer = styled.div`
    display:flex;
`;

const Image = styled.img`
  margin-right:0.5rem;
  margin-left:0.5rem;
  width:10rem;
  height:5rem;
`;

const AdLink=styled.a`
    color: #0064DC;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 1em;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 1.4rem */
    text-decoration-line: underline;
    margin-left:5em;
    `;

export default MainPage;
