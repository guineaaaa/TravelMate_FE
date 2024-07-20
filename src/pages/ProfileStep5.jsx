import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileStep5 = () => {
    const [profileData, setProfileData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('profileData'));
        setProfileData(data);
        console.log(profileData);
    }, []);

    const handleNext = () => {
        const profileData = JSON.parse(localStorage.getItem('profileData'));
        
        localStorage.setItem('profileData', JSON.stringify(profileData));
        navigate('/');
    };

    return (
        <Container 
            className="d-flex justify-content-center align-items-center" 
            style={{ minHeight: '100vh' }}
        >
            <Row className="justify-content-center w-100">
                <Col xs={12} md={8} lg={6} className="p-3 d-flex justify-content-center">
                    <div 
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: '40.9375em',
                            height: '23.4375rem',
                            fontFamily: 'Plus Jakarta Sans',
                            borderRadius: '0.625em',
                            background: '#FFF',
                        
                        }}
                    >
                        <h1 
                            className="text-left mt-1 mb-1"
                            style={{
                                color: 'var(--Black, #1A202C)',
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '2.5rem',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                lineHeight: '121.2%',
                                width: '11.625rem',
                                marginRight:'18rem'
                            }}
                        >
                            가입완료
                        </h1>
                        <h2 
                            className="text-left mb-5 mt-1"
                            style={{
                                color: 'var(--Black, #1A202C)',
                                fontFamily: 'Plus Jakarta Sans',
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '121.2%',
                                marginRight:'7rem',
                                width: '21.91019rem'
                            }}
                        >
                            TravelMate에 오신 것을 환영합니다!
                        </h2>
                        <Button 
                            variant="primary" 
                            size="lg" 
                            
                            style={{
                                padding: '0.75em 1.5em',
                        
                                backgroundColor: '#0064DC',
                                color: 'white',
                                border: 'none',
                                width: '29.1875rem',
                                height: '4.8125rem',
                                fontFamily: '"DM Sans", sans-serif',
                                fontWeight: 'normal'
                            }}
                            onClick={handleNext}
                        >
                            확인
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileStep5;
