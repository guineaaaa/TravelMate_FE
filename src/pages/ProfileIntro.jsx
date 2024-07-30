import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileIntro.css";
import { Container, Row, Col, Button, Modal, ProgressBar, ListGroup, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/e79d606d090bbdd8c20ec94f8bd317f1.png';
import temp from '../assets/temperature.png';
import shareImage from '../assets/free-icon-share-3989188.png';
import copyToClipboard from 'copy-to-clipboard';

const ProfileIntro = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [activeTab, setActiveTab] = useState('소개');
    const [toastVisible, setToastVisible] = useState(false);
    
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCopyLink = () => {
        copyToClipboard(window.location.href);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000); // 3초 후에 토스트 메시지 숨기기
    };

    return  (
        <>
        <div>
            <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100px', backgroundColor: '#cccccc' }}>
                커버
            </Container>
            <Container fluid className="d-flex align-items-start position-relative bg-light-custom" style={{ height: '220px', borderBottom: '1px solid #ccc'}}>
                <div className="profile-circle d-flex align-items-center justify-content-center">
                    프로필
                </div>
                <div style={{marginTop: '10px'}}>
                    <div className="d-flex">
                        <h4 style={{marginRight:'10px'}}>닉네임 (27/여)</h4> 
                        <img src={profileImage} alt="프로필" className="profile-img" height="35px" width="35px" />
                        <img src={temp} alt="온도" className="profile-img" height="35px" width="130px"
                        onClick={handleShow2} />
                    </div>
                    <p>국가 | 최근 활동 내역</p>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-between align-items-center p-2" style={{height: '60px'}}>
                <div className="d-flex align-items-center" style={{ gap: '40px', paddingLeft: '60px', fontSize: '15px', height: '100%' }}>
                    {['소개', '사진', '여행 일정', '리뷰'].map((tab) => (
                        <span 
                            key={tab}
                            style={{ 
                                cursor: 'pointer', 
                                paddingBottom: '5px', 
                                position: 'relative', 
                                fontWeight: 'bold',
                                borderBottom: activeTab === tab ? '2px solid black' : 'none'
                            }}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>
                <div className="ml-auto d-flex align-items-center">
                    <img src={shareImage} alt="공유" className="profile-img" height="35px" width="35px" onClick={handleShow} />
                    <Button variant="primary" className="rounded-pill mx-1" style={{ width: '135px', height: '30px', fontSize: '13px' }}>친구추가</Button>
                    <Button variant="primary" className="rounded-pill mx-1" style={{ width: '135px', height: '30px', fontSize: '13px' }}>채팅</Button>
                    <Button variant="primary" className="rounded-pill mx-1" style={{ width: '135px', height: '30px', fontSize: '13px' }}>동행 제안</Button>
                </div>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>공유</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-around">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faLink} size="3x" onClick={handleCopyLink}/>
                            <p>링크 복사</p>
                        </div>
                        {/* <div className="text-center">
                            <FontAwesomeIcon icon={faKakao} size="3x" />
                            <p>카카오톡</p>
                        </div> */}
                        <div className="text-center">
                            <FontAwesomeIcon icon={faFacebook} size="3x" />
                            <p>페이스북</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faXTwitter} size="3x" />
                            <p>트위터</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {activeTab == '소개' && (
            <Container fluid className="mt-0">
                <Row>
                    <Col md={8} className="left-section">
                        <div className="profile-info-box">
                            <div>
                                <h2 className="font-weight-bold">프로필 정보</h2>
                            </div>
                            <div className="my-3">
                                <p>현재 상태</p>
                                <p>여행 계획 중</p>
                                <p>관심 활동</p>
                                <p>여행 계획 중</p>
                                <p>다음 여행지</p>
                                <p>여행 계획 중</p>
                                <span className="border-bottom text-primary">여행 여정 자세히 보기</span>
                            </div>
                            <hr />
                            <div>
                                <p className="my-3">소개</p>
                                <div className="intro-box">
                                    {/* 소개 글 */}
                                </div>
                            </div>
                            <hr />
                            <div>
                                <p className="my-3">선호하는 여행</p>
                            </div>
                            <hr />
                            <div>
                                <p className="my-3">언어</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="right-section">
                        <div className="badge-page mb-3">
                            {/* 오른쪽 상단 박스 */}
                            <h3>여행 뱃지</h3>
                            <p>지구본 아이콘</p>
                        </div>
                        <div className="ad-page">
                            {/* 오른쪽 하단 박스 */}
                            <h3>광고 페이지</h3>
                        </div>
                    </Col>
                </Row>
                <Modal show={show2} onHide={handleClose2} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>말랑콩떡</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>매너 점수</h5>
                        <ProgressBar now={40} label="37.7°C" />
                        <h5 className="mt-4">만족도 평가</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                20명의 동행자들이 이런 점을 긍정적으로 평가했어요!
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light">
                                <span>덕분에 다양하고 즐거운 경험을 할 수 있어서 좋았어요!</span>
                                <span className="badge bg-danger text-white">15</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>취향이 통하는 멤버를 만나 좋았어요. 다음에 또 만나고 싶어요.</span>
                                <span className="badge bg-warning text-white">3</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light">
                                <span>덕분에 너무 즐거웠어요!</span>
                                <span className="badge bg-secondary text-white">2</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                8명의 동행자들이 이런 점을 부정적으로 평가했어요!
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light">
                                <span>일정이 너무 빡빡했어요</span>
                                <span className="badge bg-secondary text-white">4</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>약속 시간에 늦어서 기다렸어요.</span>
                                <span className="badge bg-secondary text-white">3</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light">
                                <span>계획대로 안 되는게 많았어요.</span>
                                <span className="badge bg-secondary text-white">1</span>
                            </ListGroup.Item>
                        </ListGroup>
                        <h5 className="mt-4">동행자 피드백</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>우O님</strong> <small>2일 전</small>
                                <p>체계적인 계획이 너무 좋았어요! 다음에 또 같이 동행해요~</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>우O님</strong> <small>2일 전</small>
                                <p>체계적인 계획이 너무 좋았어요! 다음에 또 같이 동행해요~</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>우O님</strong> <small>2일 전</small>
                                <p>체계적인 계획이 너무 좋았어요! 다음에 또 같이 동행해요~</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>
                </Modal>
            </Container>
            )}
        </div>
        <Toast
                onClose={() => setToastVisible(false)}
                show={toastVisible}
                delay={3000}
                autohide
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1051,
                }}
            >
                <Toast.Body>링크가 복사되었습니다!</Toast.Body>
            </Toast>
        </>
    )
};

export default ProfileIntro;
