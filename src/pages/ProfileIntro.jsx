import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileIntro.css";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ProfileIntro = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
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
                    <button style={{borderRadius: '50px', width: '150px', height: '40px', fontSize: '13px', background: 'blue', color:'white', margin: '0 10px'}}>글쓰기</button>
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
            </Container>
        </div>
        </>
    )
};

export default ProfileIntro;
