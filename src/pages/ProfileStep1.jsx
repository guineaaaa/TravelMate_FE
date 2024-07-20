import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { ToggleIcon } from '../constants/icons';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';

const ProfileStep1 = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    const birthday = `${year}-${month}-${day}`;
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

  const yearOptions = Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => ({
    value: 1900 + i,
    label: 1900 + i,
  })).reverse();

  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: String(i + 1).padStart(2, '0'),
  }));

  const dayOptions = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: String(i + 1).padStart(2, '0'),
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      appearance: 'none',
      background: `url(${ToggleIcon}) no-repeat right center`,
      backgroundSize: '1.5em',
      marginRight: '0.2rem',
      fontSize: '0.9375rem',
      outline: '0',
      borderWidth: '0 0 2px',
      borderRadius: '0',
      borderColor: 'black'
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'black'
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

  return (
    <Container fluid className="p-3" style={{ padding:'1rem',background: '#FFF', borderRadius: '0.625em', margin: '5em auto', maxWidth: '31.25rem', maxHeight: '37.9375rem'}}>
      <Row className="w-100">
        <Col style={{ marginTop: '2rem', marginLeft: '5rem' }}>
          <div className="mb-3">
            <h1 style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem', marginBottom: '0.2rem', textAlign: 'left' }}>
              이름(실명)을 입력해주세요
            </h1>
            <h2 style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem', marginBottom: '1em', textAlign: 'left' }}>
              신뢰할 수 있는 커뮤니티를 만들어 가요.
            </h2>
          </div>

          <div className="mb-3">
            <Form.Group controlId="formName" style={{ maxWidth: '18.0625rem', width: '100%', marginBottom: '2.25rem' }}>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름"
                style={{ textAlign: 'left', outline: '0', borderWidth: '0 0 2px', borderRadius: '0', borderColor: 'black' }}
              />
            </Form.Group>
          </div>

          <div className="mb-3">
            <h1 style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem', marginBottom: '0.2rem', textAlign: 'left' }}>
              생년월일을 입력해주세요
            </h1>
            <h2 style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem', marginBottom: '2em', textAlign: 'left' }}>
              또래와 함께하는 맞춤형 모임을 추천해드려요.
            </h2>
          </div>

          <div className="mb-3 d-flex flex-wrap" style={{ width: '100%' }}>
            <h2 style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem', marginTop: '0.5rem', marginBottom: '0', marginRight: '1rem', textAlign: 'left' }}>
              생년월일
            </h2>
            <Form.Group controlId="formYear" style={{ maxWidth: '150px', marginRight: '0.5rem' }}>
              <Select
                options={yearOptions}
                value={yearOptions.find(option => option.value === year)}
                onChange={(selectedOption) => setYear(selectedOption ? selectedOption.value : '')}
                styles={customStyles}
                placeholder="년"
              />
            </Form.Group>
            <Form.Group controlId="formMonth" style={{ maxWidth: '150px', marginRight: '0.5rem' }}>
              <Select
                options={monthOptions}
                value={monthOptions.find(option => option.value === month)}
                onChange={(selectedOption) => setMonth(selectedOption ? selectedOption.value : '')}
                styles={customStyles}
                placeholder="월"
              />
            </Form.Group>
            <Form.Group controlId="formDay" style={{ maxWidth: '150px' }}>
              <Select
                options={dayOptions}
                value={dayOptions.find(option => option.value === day)}
                onChange={(selectedOption) => setDay(selectedOption ? selectedOption.value : '')}
                styles={customStyles}
                placeholder="일"
              />
            </Form.Group>
          </div>

          <div className="mb-3">
            <h1 style={{ marginTop: '2.25rem', color: '#486284', fontFamily: 'DM Sans', fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem', textAlign: 'left' }}>
              성별을 선택해주세요.
            </h1>
          </div>

          <Form.Group controlId="formGender" className="mb-3 d-flex flex-wrap" style={{ textAlign: 'left' }}>
            <Form.Check
              type="radio"
              id="radio-male"
              label="남성"
              name="gender"
              value="남성"
              onChange={(e) => setGender(e.target.value)}
              style={{ paddingRight: '1rem' }}
            />
            <Form.Check
              type="radio"
              id="radio-female"
              label="여성"
              name="gender"
              value="여성"
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAgree" className="mb-3 d-flex align-items-center" style={{ textAlign: 'left' }}>
            <Form.Check
              type="checkbox"
              id="checkbox-agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              style={{ marginTop:'-0.5rem',paddingRight: '1rem' }}
            />
            <h2 style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem', marginTop: '1.3rem', marginBottom: '2rem' }}>
              [필수] 개인정보 활용에 동의합니다 <ToggleIcon />
            </h2>
          </Form.Group>

          <div className="text-center" style={{marginRight:'2.25rem',marginTop:'-1.5rem'}}>
            <Button
              onClick={handleNext}
              variant="dark"
              className="text-white rounded-pill px-4 py-2"
              style={{ width: '16.75rem', height: '3.2rem',marginBottom:'2rem' }}
            >
              다음
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileStep1;
