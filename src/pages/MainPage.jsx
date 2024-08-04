import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainPageNav from '../components/MainPageNav';
import backgroundImage from '../images/travelmate.png';
import DetailImage from '../images/MainpageDetail.png';
import { AirplaneIcon, SearchIcon, XButton, WarnIcon } from '../constants/icons';
import Select, { components } from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button, InputGroup, Row, Col, Badge, Modal } from 'react-bootstrap';

const options = [
    { value: 'Eng', label: '영어' },
    { value: 'Jpn', label: '일본어' },
    { value: 'Fr', label: '프랑스어' },
];

const MainPage = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleLanguageChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions || []);
    };

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    return (
        <>
            <Navbar onLinkClick={handleModalShow} />
            <MainPageNav onLinkClick={handleModalShow} />

            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className="text-white text-center" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.5rem', fontWeight: 600, marginTop: '8rem', marginBottom: '0.7em' }}>
                    여행을 함께 할 안전한 사람을 구하고 있나요?<br />
                    동행자를 TravelMate에서 찾아보세요!
                </h1>

                <Button style={{ borderRadius: '2em', backgroundColor: '#95C2EC', color: 'black', width: '9.375rem', height: '2.3rem', fontSize: '1.125rem', fontWeight: 400, margin: '10px', marginTop: '-0.1rem', border: 'none' }} onClick={handleModalShow}>
                    가입하기
                </Button>

                <Container className="bg-white rounded p-4 d-flex flex-column align-items-center" style={{ width: '80%', maxWidth: '800px' }}>
                    
                    {/* 검색창 */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'-0.8rem', marginBottom: '0.5rem', border: '1px solid #D9D9D9', width: '100%', maxWidth: '23.5625rem', height: '2.83288rem', padding: '0.75rem 1rem', gap: '0.5rem', borderRadius: '0.625rem' }}>
                        <SearchIcon style={{ marginRight: '0.5rem' }} />
                        <Form.Control
                            style={{ fontSize: '1rem', border: 'none', boxShadow: 'none' }}
                            placeholder="나라, 지역 혹은 도시를 입력하세요"
                        />
                    </div>

                    {/* 날짜 카드 */}
                    <Row className="g-3">
                        <Col sm={12} md={6}>
                            <Card >
                                <Card.Header style={{ fontSize: '1rem', backgroundColor: '#0074FF', color: 'white', fontWeight: 'bold' }}>날짜</Card.Header>
                                <Card.Body >
                                    {/* 날짜 input 관련 custom */}
                                <style>{`
                                    input[type='date']::before {
                                    content: attr(data-placeholder);
                                    position: absolute;
                                    width: 100%;
                                    color: #999A9A;
                                    font-size: 0.875rem;
                                    font-style: normal;
                                    font-weight: 600; 
                                    }
                                    input[type="date"]:not(:focus):invalid {
                                        &::-webkit-datetime-edit-text,
                                        &::-webkit-datetime-edit-month-field,
                                        &::-webkit-datetime-edit-day-field,
                                        &::-webkit-datetime-edit-year-field {
                                        -webkit-appearance: none;
                                        display: none;
                                        }
                                    }
                                    input[type='date']:focus::before,
                                    input[type='date']:valid::before {
                                        display: none;
                                    }`}</style>
                                    <div className="d-flex align-items-center mb-2">
                                        <Form.Control style={{ width:'9.25rem',height:'2.0625rem',fontSize: '1rem' }} type="date" 
                                        required ariaRequired="true" data-placeholder="시작일" />
                                        <span style={{ color:'#999A9A',fontSize: '1.5625rem', fontWeight: 'bold', margin: '0 0.5rem' }}>~</span>
                                        <Form.Control style={{ width:'9.25rem',height:'2.0625rem',fontSize: '1rem' }} type="date" 
                                        required ariaRequired="true" data-placeholder="종료일" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* 언어 선택 카드 */}
                        <Col sm={12} md={6}>
                            <Card>
                                <Card.Header style={{ fontSize: '1rem', backgroundColor: '#0074FF', color: 'white', fontWeight: 'bold' }}>언어</Card.Header>
                                <Card.Body>
                                    <Select
                                        defaultValue={selectedOptions}
                                        onChange={handleLanguageChange}
                                        options={options}
                                        isMulti
                                        placeholder="동행자가 사용할 수 있는 언어를 선택해주세요."
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                fontSize: '1rem',
                                                marginBottom: '0.5rem',
                                            }),
                                            multiValue: (provided) => ({
                                                ...provided,
                                                display: 'none'
                                            }),
                                            multiValueLabel: (provided) => ({
                                                ...provided,
                                                display: 'none'
                                            }),
                                            multiValueRemove: (provided) => ({
                                                ...provided,
                                                display: 'none'
                                            }),
                                            singleValue: (provided) => ({
                                                ...provided,
                                                fontSize: '1rem'
                                            }),
                                            option: (provided) => ({
                                                ...provided,
                                                fontSize: '1rem',
                                            }),
                                            clearIndicator: (provided) => ({
                                                ...provided,
                                                display: 'none'
                                            }),placeholder: (provided) => ({
                                                ...provided,
                                                fontSize: '0.75rem',
                                            }),
                                        }}
                                    />
                                    <div style={{
                                        display: 'flex',
                                        width: '100%',
                                        maxWidth: '20.75rem',
                                        height: '2.39919rem',
                                        padding: '0.75rem 0.5rem',
                                        alignItems: 'center',
                                        gap: '-1rem',
                                        flexShrink: 0,
                                        borderRadius: '0.3125rem',
                                        border: '1px solid #999A9A',
                                        background: '#FFF',
                                        overflowX: 'auto',
                                        overflowY: 'hidden',
                                        msOverflowStyle: 'none',
                                        scrollbarWidth: 'none'
                                    }}>{/* 가로스크롤은 가능하되 스크롤바가 표시되지 않도록 수정*/}
                                        <style>
                                            {`div::-webkit-scrollbar {display: none;}`}
                                        </style>
                                        <span style={{color: '#707070',fontSize:'0.75rem',width: '5rem',height:'1.2rem', flexShrink: 0 }}>선택된 언어: </span>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {selectedOptions.map(option => (
                                                <Badge key={option.value} className="me-2" style={{ backgroundColor: '#ABD1FF', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                                                    {option.label}
                                                    <button
                                                        onClick={() => setSelectedOptions(selectedOptions.filter(o => o.value !== option.value))}
                                                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: '0.5rem' }}
                                                    >
                                                        <XButton />
                                                    </button>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        
                        {/* 나이/성별 선택 카드 */}
                        <Col sm={12} md={6}>
                            <Card style={{ marginTop: '-3rem' }}>
                                <Card.Header style={{ fontSize: '1rem', backgroundColor: '#0074FF', color: 'white', fontWeight: 'bold' }}>나이/성별</Card.Header>
                                <Card.Body style={{paddingBottom: '0.5rem'}}>
                                    <InputGroup className="mb-2">
                                        <Form.Control style={{width:'0.5rem',height:'2rem', borderRadius:'0.3125rem',color:'#999A9A',fontSize:'0.875rem',fontWeight:'600' }} placeholder="이상" />
                                        <span style={{ color:'#999A9A',fontSize: '1.5625rem', fontWeight: 'bold', margin: '-0.3rem 0.5rem' }}>~</span>
                                        <Form.Control style={{width:'0.5rem',height:'2rem', borderRadius:'0.3125rem',color:'#999A9A',fontSize:'0.875rem',fontWeight:'600' }} placeholder="미만" />
                                    </InputGroup>
                                    <div className="d-flex" style={{fontSize:'0.875rem',fontWeight:'400'}}>
                                        <Form.Check
                                            type="radio"
                                            label="전체"
                                            name="genderRadio"
                                            id="genderRadio1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="남자"
                                            name="genderRadio"
                                            id="genderRadio2"
                                            className="ms-3"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="여자"
                                            name="genderRadio"
                                            id="genderRadio3"
                                            className="ms-3"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6}>
                            <Button className="w-100" style={{ marginTop:'1.3rem',borderRadius: '2em', backgroundColor: '#0074FF', color: 'white', width: '22.5rem', height: '3.625rem', fontSize: '1.125rem', fontWeight: 400 }}>
                                검색하기
                            </Button>
                        </Col>
                    </Row>
                </Container>
                
                {/* 광고 컨테이너 */}
                <Container className="bg-white rounded p-4 mt-3 mb-5" style={{ width: '100%', maxWidth: '800px' }}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                        <AirplaneIcon />
                        <h1 className="h5" style={{ marginLeft: '1rem', fontWeight: 600 }}>색다른 여행 상품</h1>
                        </div>
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <h5 style={{ marginLeft: '3.5rem',marginTop:'-0.5rem',fontSize: '0.75rem', fontWeight: 600, color: 'rgba(0, 0, 0, 0.56)' }}>
                            다가오는 여행 일정에 맞춰, 어떻게
                        </h5>
                        <a href="#" style={{marginTop:'-1.5rem',}} >무료로 시작하기</a>
                    </div>
                </Container>
                
            </div>

            {/* 디테일 이미지 표시 */}
            <div className="d-flex flex-column align-items-center justify-content-center" 
                style={{ backgroundImage: `url(${DetailImage})`, backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '159.44rem' }}>
            </div>

            <Footer/>

            {/* 경고 모달 */}
            <StyledModal show={showModal} onHide={handleModalClose} centered>
                <Modal.Header style={{ borderBottom: 'none' }} closeButton />
                <Modal.Body>
                    <div style={{ marginBottom: '0.94rem', marginLeft:'1.81rem' }}>
                        <WarnIcon />
                    </div>
                    <p style={{
                        color: '#486284',
                        fontFamily: 'DM Sans', fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem',
                        marginLeft:'1.81rem',marginRight:'1.19rem',
                    }}>
                        프로필 정보가 등록된,<br />멤버만 이용할 수 있어요
                    </p>

                    <p style={{
                        color: '#486284',
                        fontFamily: 'DM Sans', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem',
                        marginLeft:'1.81rem', marginRight:'1.19rem',
                    }}>
                        신뢰할 수 있는 커뮤니티를 만들기 위해<br/>
                        프로필 정보가 등록된 멤버만 이용할 수 있어요
                    </p>      
                </Modal.Body>
                <Modal.Footer style={{ marginTop:'1.36rem',borderTop: 'none', justifyContent: 'center' }}>
                    <Button
                        style={{
                            width: '19.5rem', height: '3.2rem',
                            borderRadius: '1.875rem', 
                            background: '#000',
                            border:'none', flexShrink:'0',
                            paddingTop:'0.1rem', //글자 위치 조정
                            textAlign: 'center', fontFamily: 'Baloo Thambi',
                            fontSize: '0.9375rem', fontWeight: '400', lineHeight: '3.125rem'
                        }}
                        href="/signup"
                    >
                        5초 만에 프로필 완성하고 바로 시작하기
                    </Button>
                </Modal.Footer>
            </StyledModal>
        </>
    );
};

const StyledModal = styled(Modal)`
    .modal-dialog {
        width: 90%;
        max-width: 26.375rem;
        height: 24.25rem; 
        display: flex;
    }

    .modal-content {
        border-radius: 0; 
    }

    .modal-body {
        overflow: hidden;
    }
`;

export default MainPage;
