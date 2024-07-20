import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MainPageNav from '../components/MainPageNav';
import backgroundImage from '../images/travelmate.png';
import AdboxImage from '../images/Adbox.png';
import { AirplaneIcon, SearchIcon, XButton } from '../constants/icons';

import Select from 'react-select';
import { components } from 'react-select';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const options = [
    { value: 'Eng', label: '영어' },
    { value: 'Jpn', label: '일본어' },
    { value: 'Fr', label: '프랑스어' },
];

const MainPage = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleLanguageChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions || []);
    };

    return (
        <>
            <Navbar />
            <MainPageNav />

            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className="text-white text-center" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.5rem', fontWeight: 600, marginTop: '5.4em', marginBottom: '0.7em' }}>
                    여행을 함께 할 안전한 사람을 구하고 있나요?<br />
                    동행자를 TravelMate에서 찾아보세요!
                </h1>

                <Button style={{ borderRadius: '2em', backgroundColor: '#95C2EC', color: 'black', width: '9em', height: '3rem', fontSize: '1.125rem', fontWeight: 400, margin: '10px', marginTop: '-0.2em', border: 'none' }}>
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
                            <Card style={{marginTop:'-3rem'}}>
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
                                            id="radio-all"
                                            label="전체"
                                            name="gender"
                                            className="me-3"
                                        />
                                        <Form.Check
                                            style={{ fontSize }}
                                            type="radio"
                                            id="radio-male"
                                            label="남성만"
                                            name="gender"
                                            className="me-3"
                                        />
                                        <Form.Check
                                            style={{ fontSize }}
                                            type="radio"
                                            id="radio-female"
                                            label="여성만"
                                            name="gender"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={3}>
                            <Button variant="primary" style={{ borderRadius: '2em', backgroundColor: '#0064DC', color: 'white', width: '22.5rem', height: '3.625rem', fontSize: '1.125rem', fontWeight: 400 }}>
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
        </>
    );
}

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
        </button>
    </div>
);

export default MainPage;
