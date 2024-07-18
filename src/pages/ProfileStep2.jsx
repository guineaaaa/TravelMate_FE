import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Badge, Button, CloseButton } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';

const ProfileStep2 = () => {
    const [preferSpot, setPreferSpot] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const categories = {
        "액티비티": ["하이킹", "스쿠버다이빙", "자전거"],
        "푸드": ["레스토랑 탐방", "스트리트 푸드"],
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

    return (
        <ProfileContainer>
            <ProfileRequest>선호하는 여행을 선택해주세요.</ProfileRequest>
            <Annotation>
                좋아하거나, 관심있는 여행을 1개 이상 선택해주세요.
                <br />관심사에 맞는 동행자를 추천해 드려요
            </Annotation>
            <Container>
                <Row>
                    <Col md={4} className="category-list">
                        <ListGroup>
                            {Object.keys(categories).map((cat, index) => (
                                <StyledListGroupItem
                                    key={index}
                                    active={selectedCategory === cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    selected={selectedCategory === cat}
                                >
                                    {cat}
                                </StyledListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col md={4} className="subcategory-list">
                        <ListGroup>
                            {selectedCategory && categories[selectedCategory].map((subCat, index) => (
                                <StyledListGroupItem
                                    key={index}
                                    active={preferSpot.includes(`${selectedCategory} | ${subCat}`)}
                                    onClick={() => handleSubCategorySelect(selectedCategory, subCat)}
                                    selected={preferSpot.includes(`${selectedCategory} | ${subCat}`)}
                                >
                                    {subCat}
                                </StyledListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col md={4} className="selected-tags d-flex flex-wrap">
                        {preferSpot.map((spot, index) => (
                            <StyledBadge key={index}>
                                {spot.split(' | ')[1]}
                                <CloseButton
                                    variant="white"
                                    aria-label="Remove"
                                    onClick={() => handleRemoveTag(spot)}
                                    className="badge-close"
                                />
                            </StyledBadge>
                        ))}
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <NextButton onClick={handleNext} variant="primary" size="lg">
                        다음
                    </NextButton>
                </div>
            </Container>
        </ProfileContainer>
    );
};

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

const StyledListGroupItem = styled(ListGroup.Item)`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  ${({ selected }) =>
    selected &&
    `
    background: rgba(171, 209, 255, 0.30);
    border-color: rgba(171, 209, 255, 0.30);
  `}
`;

const StyledBadge = styled(Badge)`
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
  margin-right: 0.5px;
  margin-bottom: 0.5px;
  background-color: rgba(171, 209, 255, 0.30);
  color: white;
`;

export default ProfileStep2;
