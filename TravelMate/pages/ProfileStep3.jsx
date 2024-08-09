import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Base.css';

const ProfileStep3 = () => {
    const [introduction, setIntroduction] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('profileData'));
        if (profileData) {
            setIntroduction(profileData.introduction || '');
        }
    }, []);

    const handleNext = () => {
        const profileData = JSON.parse(localStorage.getItem('profileData')) || {};
        profileData.introduction = introduction;
        localStorage.setItem('profileData', JSON.stringify(profileData));
        navigate('/profilestep4');
    };

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ fontFamily: 'Pretendard',padding: '2rem', background: '#FFF', borderRadius: '0.625em', margin: '5em auto', maxWidth: '31.25rem', maxHeight: '37.9375rem'}}>
            <h1 className="text-left" style={{ color: '#486284',  fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem',marginTop:'0.5rem', marginBottom: '0.5em', marginRight: '4.5rem' }}>
                자신을 소개해주세요!
            </h1>
            <h2 className="text-left mb-4" style={{ color: '#486284',fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem', textAlign: 'left' }}>
                나를 잘 표현할 수 있도록, 글을 입력해주세요<br />
                (0/1,500자)
            </h2>

            <Row className="w-100">
                <Col xs={12} className="d-flex justify-content-center mb-3">
                    <Form.Group controlId="formIntroduction" className="w-100" style={{ color: '#486284', maxWidth: '25.75rem' }}>
                        <Form.Control
                            as="textarea"
                            value={introduction}
                            onChange={(e) => setIntroduction(e.target.value)}
                            placeholder="자신을 소개하는 긴 문장을 입력해 주세요"
                            style={{ 
                                borderRadius: '0.625rem', 
                                border: '1.5px solid #999A9A', 
                                background: '#FFF', 
                                height: '16.5rem', 
                                padding: '0.75rem 1rem',
                                color: '#486284', 
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} className="text-center">
                <div className="text-center mt-5">
                <Button onClick={handleNext} className="btn btn-dark" style={{ 
                     padding: '0.75em 1.5em', borderRadius: '1.875rem', width: '19.5rem', height: '3.2rem' }}>
                    다음
                </Button>
            </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileStep3;
