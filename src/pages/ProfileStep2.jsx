import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Badge, Button, CloseButton, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';
import { SearchIcon } from '../constants/icons';

const ProfileStep2 = () => {
    const [preferSpot, setPreferSpot] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const categories = {
        "액티비티": ["하이킹", "스쿠버다이빙", "자전거"],
        "푸드": ["한식", "일식"],
        "운동": ["조깅", "피트니스"],
        "투어": ["도시 투어", "자연 투어"],
        "역사": ["박물관", "역사 유적지"],
        "자연": ["산책", "캠핑"]
    };

    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('profileData'));
        if (profileData) {
            setPreferSpot(profileData.preferSpot || []);
        }
    }, []);

    const handleNext = () => {
        const profileData = JSON.parse(localStorage.getItem('profileData')) || {};
        profileData.preferSpot = preferSpot;
        localStorage.setItem('profileData', JSON.stringify(profileData));
        navigate('/profilestep3');
    };

    const handleSubCategorySelect = (category, subCategory) => {
        const spot = `${category} | ${subCategory}`;
        if (!preferSpot.includes(spot)) {
            setPreferSpot([...preferSpot, spot]);
        }
    };

    const handleRemoveTag = (tag) => {
        setPreferSpot(preferSpot.filter(item => item !== tag));
    };

    const handleClearAllTags = () => {
        setPreferSpot([]);
    };

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ padding:'2rem',background: '#FFF', borderRadius: '0.625em', margin: '5em auto', maxWidth: '31.25rem', maxHeight: '37.9375rem'}}>
            <h1 className="text-left" style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem', marginBottom: '0.5em', marginRight:'1.5rem'}}>
                선호하는 여행을 선택해주세요.
            </h1>
            <h2 className="text-left mb-4" style={{ color: '#486284', fontFamily: 'DM Sans', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem', textAlign: 'left' }}>
                좋아하거나, 관심있는 여행을 1개 이상 선택해주세요.
                <br />관심사에 맞는 동행자를 추천해 드려요
            </h2>

            {/* 검색창 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', marginBottom: '1rem', border: '1.5px solid #D9D9D9', width:'31.25rem', height:'2.375rem', padding:'0.75rem 1rem', gap:'0.5rem' }}>
                        <SearchIcon style={{ marginRight: '0.5rem' }} />
                        <Form.Control
                            style={{ fontSize: '1rem', border: 'none', boxShadow: 'none' }}
                            placeholder="나라, 지역 혹은 도시를 입력하세요"
                        />
            </div>
            

            <Row style={{width:'100%'}}>
                <Col md={4} className="category-list"
                style={{marginLeft:'-2.5rem'}}>
                    <ListGroup>
                        {Object.keys(categories).map((cat, index) => (
                            <ListGroup.Item
                                key={index}
                                active={selectedCategory === cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{ color: 'black', fontSize: '0.8rem', padding: '0.5rem 1rem', cursor: 'pointer', backgroundColor: selectedCategory === cat ? 'rgba(171, 209, 255, 0.30)' : 'transparent', borderColor: selectedCategory === cat ? 'rgba(171, 209, 255, 0.30)' : 'transparent' }}
                            >
                                {cat}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>

                <Col md={5} className="subcategory-list">
                    <ListGroup>
                        {selectedCategory && categories[selectedCategory].map((subCat, index) => (
                            <ListGroup.Item
                                key={index}
                                active={preferSpot.includes(`${selectedCategory} | ${subCat}`)}
                                onClick={() => handleSubCategorySelect(selectedCategory, subCat)}
                                style={{ color: 'black', fontSize: '0.8rem', padding: '0.5rem 1rem', cursor: 'pointer', backgroundColor: preferSpot.includes(`${selectedCategory} | ${subCat}`) ? 'rgba(171, 209, 255, 0.30)' : 'transparent', borderColor: preferSpot.includes(`${selectedCategory} | ${subCat}`) ? 'rgba(171, 209, 255, 0.30)' : 'transparent' }}
                            >
                                {subCat}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>

                <Col md={4} className="selected-tags d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                        <span style={{ color: '#486284', fontSize: '0.75rem', fontWeight: '500' }}>
                            {preferSpot.length} / {Object.values(categories).flat().length}
                        </span>
                        <Button 
                            variant="link" 
                            onClick={handleClearAllTags} 
                            style={{ fontSize: '0.75rem', color: '#0064DC' }}>
                            전체 삭제
                        </Button>
                    </div>
                    {preferSpot.map((spot, index) => (
                        <Badge className="custom-badge" key={index} pill >
                            {spot.split(' | ')[1]}
                            <CloseButton 
                                variant="black"
                                aria-label="Remove"
                                onClick={() => handleRemoveTag(spot)}
                                className="badge-close"
                            />
                        </Badge>
                    ))}
                </Col>
            </Row>

            <div className="text-center mt-5">
                <Button onClick={handleNext} className="btn btn-dark" style={{ 
                     padding: '0.75em 1.5em', borderRadius: '1.875rem', width: '19.5rem', height: '3.2rem' }}>
                    다음
                </Button>
            </div>
        </Container>
    );
};

export default ProfileStep2;
