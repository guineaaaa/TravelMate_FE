import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImageIcon from '../images/Ellipse 2544.png';
import CameraIcon from '../images/camera-sharp.png';
import './Base.css'; // Ensure your custom CSS file is imported

const ProfileStep4 = () => {
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('profileData'));
        if (profileData) {
            setProfileImage(profileData.profileImage || '');
        }
    }, []);

    const handleNext = () => {
        let profileData = JSON.parse(localStorage.getItem('profileData')) || {};
        profileData.profileImage = profileImage;
        localStorage.setItem('profileData', JSON.stringify(profileData));
        navigate('/profilestep5');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{fontFamily: 'Pretendard', padding: '2rem', background: '#FFF', borderRadius: '0.625em', margin: '5em auto', maxWidth: '31.25rem', maxHeight: '37.9375rem'}}>
            <h1 className="text-left mb-3" style={{ color: '#486284', fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem', marginTop:'0.5rem',  marginRight: '2rem' }}>
                프로필 사진을 등록해주세요.
            </h1>
            <h2 className="text-left" style={{marginTop:'-0.2rem', color: '#486284', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem', textAlign: 'left', marginRight:'6.5rem' }}>
                프로필 클릭률이 32% 올라가요!
            </h2>

            <Row className="w-100">
                <Col xs={12} className="d-flex justify-content-center mb-3">
                    <div className="position-relative">
                        {profileImage ? (
                            <img src={profileImage} width='100' alt="미리보기" className="rounded-circle" />
                        ) : (
                            <div 
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    background: `url(${ProfileImageIcon}) no-repeat center center`,
                                    backgroundSize: 'cover',
                                    borderRadius: '50%',
                                }}
                                onClick={() => fileInputRef.current.click()}
                            >
                                {!profileImage && <img src={CameraIcon} width='30' alt="카메라 아이콘" className="position-absolute" style={{ zIndex: 1 }} />}
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                </Col>
                <Col xs={12} className="text-center">
                    <Button onClick={handleNext} className="btn btn-dark" style={{ 
                        marginTop:'15.5rem',
                        padding: '0.75em 1.5em', borderRadius: '1.875rem', width: '19.5rem', height: '3.2rem' }}>
                        다음
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileStep4;
