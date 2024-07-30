import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MainPageNav from '../components/MainPageNav';
import backgroundImage from '../images/travelmate.png';
import AdboxImage from '../images/Adbox.png';
import { AirplaneIcon, SearchIcon, XButton, WarnIcon } from '../constants/icons';
import Select from 'react-select';
import { components } from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Modal, Form, Button, InputGroup, Row, Col, Badge } from 'react-bootstrap';
import styled from 'styled-components';

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
                <h1 className="text-white text-center" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.5rem', fontWeight: 600, marginTop: '5.4em', marginBottom: '0.7em' }}>
                    여행을 함께 할 안전한 사람을 구하고 있나요?<br />
                    동행자를 TravelMate에서 찾아보세요!
                </h1>

                <Button style={{ borderRadius: '2em', backgroundColor: '#95C2EC', color: 'black', width: '9em', height: '3rem', fontSize: '1.125rem', fontWeight: 400, margin: '10px', marginTop: '-0.2em', border: 'none' }} onClick={handleModalShow}>
                    가입하기
                </Button>

                <Container className="bg-white rounded p-4" style={{ width: '80%', maxWidth: '800px' }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{ fontSize }}><SearchIcon /></InputGroup.Text>
                        <Form.Control
                            style={{ fontSize }}
                            placeholder="나라, 지역 혹은 도시를 입력하세요"
                        />
                    </InputGroup>

                    <Row className="g-3">
                        <Col sm={6}>
                            <Card>
                                <Card.Header style={{ fontSize: '1rem', backgroundColor: '#0064DC', color: 'white', fontWeight: 'bold' }}>날짜</Card.Header>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <Form.Control style={{ fontSize: '1rem' }} type="date" placeholder="시작일" />
                                        <span style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0.5rem' }}>~</span>
                                        <Form.Control style={{ fontSize: '1rem' }} type="date" placeholder="종료일" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6}>
                            <Card>
                                <Card.Header style={{ fontSize: '1rem', backgroundColor: '#0064DC', color: 'white', fontWeight: 'bold' }}>언어</Card.Header>
                                <Card.Body>
                                    <Select
                                        defaultValue={selectedOptions}
                                        onChange={handleLanguageChange}
                                        options={options}
                                        isMulti
                                        components={{ SingleValue: customSingleValue, MultiValue: customMultiValue }}
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                fontSize,
                                                marginBottom: '1rem'
                                            }),
                                            multiValue: (provided) => ({
                                                ...provided,
                                                display: 'none'
                                            }),
                                            multiValueLabel: (provided) => ({
                                                ...provided,
                                                fontSize
                                            }),
                                            multiValueRemove: (provided) => ({
                                                ...provided,
                                                display: 'none'
                                            }),
                                            singleValue: (provided) => ({
                                                ...provided,
                                                fontSize
                                            }),
                                            option: (provided) => ({
                                                ...provided,
                                                fontSize
                                            }),
                                        }}
                                    />
                                    <div className="mt-2" style={{
                                        display: 'flex',
                                        width: '20.75rem',
                                        height: '2.39919rem',
                                        padding: '0.75rem 1rem',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        flexShrink: 0,
                                        borderRadius: '0.3125rem',
                                        border: '1px solid #999A9A',
                                        background: '#FFF'
                                    }}>
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
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6}>
                            <Card style={{ marginTop: '-3rem' }}>
                                <Card.Header style={{ fontSize: '1rem', backgroundColor: '#0064DC', color: 'white', fontWeight: 'bold' }}>나이/성별</Card.Header>
                                <Card.Body style={{ paddingBottom: '0' }}>
                                    <InputGroup className="mb-3">
                                        <Form.Control style={{ fontSize }} placeholder="나이 이상" />
                                        <span style={{ fontSize }}>~</span>
                                        <Form.Control style={{ fontSize }} placeholder="나이 미만" />
                                    </InputGroup>
                                    <div className="d-flex">
                                        <Form.Check
                                            style={{ fontSize }}
                                            type="radio"
                                            label="전체"
                                            name="genderRadio"
                                            id="genderRadio1"
                                        />
                                        <Form.Check
                                            style={{ fontSize }}
                                            type="radio"
                                            label="남자"
                                            name="genderRadio"
                                            id="genderRadio2"
                                            className="ms-3"
                                        />
                                        <Form.Check
                                            style={{ fontSize }}
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

                        <Col sm={6}>
                            <Button className="w-100" style={{ borderRadius: '2em', backgroundColor: '#0064DC', color: 'white', width: '22.5rem', height: '3.625rem', fontSize: '1.125rem', fontWeight: 400 }}>
                                검색하기
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="bg-white rounded p-4 mt-3 mb-5" style={{ width: '100%', maxWidth: '800px' }}>
                    <h1 className="h5" style={{ fontWeight: 600 }}>현지 여행 상품</h1>
                    <div className="d-flex flex-wrap align-items-center" style={{ gap: '1rem' }}>
                        <AirplaneIcon />
                        <div className="d-flex flex-wrap gap-2">
                            {[...Array(3)].map((_, index) => (
                                <img key={index} src={AdboxImage} alt="Adbox" className="img-fluid" style={{ width: '100%', maxWidth: '10rem', height: 'auto' }} />
                            ))}
                        </div>
                        <a href="#" className="text-primary text-decoration-underline" style={{ fontWeight: 600, lineHeight: '140%' }}>
                            최대 45%할인<br />
                            상품 구경하기
                        </a>
                    </div>
                </Container>
            </div>

            <StyledModal
                show={showModal}
                onHide={handleModalClose}
                centered
            >
                <Modal.Header style={{ 
                    borderBottom: 'none' }} closeButton />
                
                <Modal.Body>
                    <div style={{ 
                        marginBottom: '0.94rem',
                        marginLeft:'1.81rem'
                    }}>
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
                        marginLeft:'1.81rem',
                        marginRight:'1.19rem',
                        
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
                            border:'none',flexShirnk:'0',
                            paddingTop:'0.1rem', //글자 위치 조정
                            textAlign: 'center', fontFamily: 'Baloo Thambi', fontStyle:'',
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

const fontSize = '0.8rem';

const customSingleValue = ({ data }) => (
    <div>{data.label}</div>
);

const customMultiValue = (props) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <components.MultiValue {...props} />
        <button
            onClick={(e) => {
                e.stopPropagation();
                props.removeProps.onClick();
            }}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: '0.5rem' }}
        >
            <XButton />
        </button>
    </div>
);

const StyledModal = styled(Modal)`
  .modal-dialog {
    width: 26.375rem;
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
