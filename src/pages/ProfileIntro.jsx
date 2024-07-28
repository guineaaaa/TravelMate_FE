import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileIntro.css";
import { Container, Row, Col, Button, Modal, ProgressBar, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ProfileIntro = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return  (
        <>
        <div>
            <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100px', backgroundColor: '#cccccc' }}>
                커버
            </Container>
            <Container fluid className="d-flex align-items-start position-relative bg-light-custom" style={{ height: '200px' }}>
                <div className="profile-circle d-flex align-items-center justify-content-center">
                    프로필
                </div>
                <div style={{marginTop: '10px'}}>
                    <h3>닉네임 (27/여)</h3>
                    <p>국가 | 최근 활동 내역</p>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-between align-items-center p-3">
                <div style={{display: 'flex', gap: '40px', paddingLeft: '60px', fontSize: '15px'}}>
                    <span style={{cursor: 'pointer', paddingBottom: '5px', position: 'relative'}}>소개</span>
                    <span style={{cursor: 'pointer', paddingBottom: '5px', position: 'relative'}}>사진</span>
                    <span style={{cursor: 'pointer', paddingBottom: '5px', position: 'relative'}}>여행 일정</span>
                    <span style={{cursor: 'pointer', paddingBottom: '5px', position: 'relative'}}>리뷰</span>
                </div>
                <div>
                    <button style={{borderRadius: '50px', width: '150px', height: '40px', fontSize: '13px', background: 'blue', color:'white', margin: '0 10px'}}
                    onClick={handleShow2}>글쓰기</button>
                    <button style={{borderRadius: '50px', width: '150px', height: '40px', fontSize: '13px', background: 'blue', color:'white', margin: '0 10px'}}>프로필 수정</button>
                    <button style={{borderRadius: '50px', width: '150px', height: '40px', fontSize: '13px', background: 'blue', color:'white', margin: '0 10px'}}
                    onClick={handleShow}>프로필 공유</button>
                    <button style={{borderRadius: '50px', width: '150px', height: '40px', fontSize: '13px', background: 'blue', color:'white', margin: '0 10px'}}>채팅</button>
                </div>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>공유</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-around">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faLink} size="3x" />
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
            <Container fluid className="mt-4">
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
        </div>
        </>
    )
};

export default ProfileIntro;
