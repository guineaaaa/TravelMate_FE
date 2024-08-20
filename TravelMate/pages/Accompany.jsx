import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProfileIntro.css";
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import profileImage from '../src/assets/e79d606d090bbdd8c20ec94f8bd317f1.png';
import temp from '../src/assets/temperature.png';
import shareImage from '../src//assets/free-icon-share-3989188.png';
import "../css/Accompany.css";

const Accompany = () => {
    const [activeTab, setActiveTab] = useState('동행 일정');
    const posts = [
        { title: 'LA 할리우드 보고, 시내 같이 걸어요~', date: '2024.07.01 15:00 ~ 21:00', location: '파리 / 프랑스', participants: '1/4 (여성만 가능)', name: '말랑콩 (27/여)' },
        { title: 'LA 할리우드 보고, 시내 같이 걸어요~', date: '2024.07.01 15:00 ~ 21:00', location: '파리 / 프랑스', participants: '1/4 (여성만 가능)', name: '말랑콩 (27/여)' },
        // 더 많은 포스팅을 추가할 수 있습니다.
    ];
    return (
        <>
            <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100px', backgroundColor: '#cccccc' }}>
                커버
            </Container>
            <Container fluid className="d-flex align-items-start position-relative bg-white" style={{ height: '220px', borderBottom: '1px solid #ccc'}}>
                <div className="profile-square d-flex align-items-center justify-content-center">
                    프로필
                </div>
                <div style={{marginTop: '10px'}}>
                    <div className="d-flex mb-2">
                        <h4>제목</h4> 
                    </div>
                    <p>조회수 31 * 메시지 1 * 댓글 0</p>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-between align-items-center p-2" style={{height: '60px'}}>
                <div className="d-flex align-items-center" style={{ gap: '40px', paddingLeft: '60px', fontSize: '15px', height: '100%' }}>
                    {['동행 일정', '프로필'].map((tab) => (
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
                    <Button variant="primary" className="rounded-pill mx-1" style={{ width: '135px', height: '30px', fontSize: '13px' }}
                    onClick={()=>setActiveTab('프로필 수정')}>친구 추가</Button>
                    <Button variant="primary" className="rounded-pill mx-1" style={{ width: '135px', height: '30px', fontSize: '13px' }}>메시지</Button>
                    <Button variant="primary" className="rounded-pill mx-1" style={{ width: '135px', height: '30px', fontSize: '13px' }}>프로필 공유</Button>
                    <Button variant="primary" className="rounded-pill mx-1" style={{ width: '135px', height: '30px', fontSize: '13px' }}>동행 제안</Button>
                </div>
            </Container>
            <Container fluid className="mt-0">
                <Row>
                    {activeTab == '동행 일정' && (<Col md={8} className="left-section">
                        <Container className="mt-4">
                            <div className="border-bottom">
                                <h3 className="text-start">여행 정보</h3>
                                <Card className="mb-3 bg-light p-0">
                                    <Card.Body>
                                    <Row>
                                        <Col md={12} className="d-flex text-start">
                                        <i className="bi bi-calendar3 me-2"></i>
                                        <p>일시 : 2024년 07월 01일 15:00 ~ 21:00</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="d-flex text-start">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        <p>위치 : LA / 할리우드</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="d-flex text-start">
                                        <i className="bi bi-people me-2"></i>
                                        <p>인원 : 1/4 (여성만 가능)</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="d-flex text-start">
                                        <i className="bi bi-chat me-2"></i>
                                        <p>언어 : 한국어 사용자</p>
                                        </Col>
                                    </Row>
                                    </Card.Body>
                                </Card>
                            </div>
                            <h3 className="text-start">여행 소개</h3>
                            <p className="text-start mt-3 mb-5">이번 일정은 LA 할리우드를 보고, 사진 찍고 식당에 가서 밥 먹고 헤어질 예정입니다!</p>
                            <h3 className="text-start">동행 유형 및 주요활동</h3>
                            <div className="text-start p-2 mb-5">
                                <Button variant="secondary" className="me-2">전체동행</Button>
                                <span>/</span>
                                <Button variant="primary" className="ms-2 me-2">레스토랑</Button>
                                <Button variant="primary">제조</Button>
                            </div>

                            <div className="border-bottom">
                            <h3 className="text-start">여행장</h3>
                            <Card className="mb-3 p-0 bg-light">
                                <Card.Body>
                                <Row className="border-bottom">
                                    <Col md={4}>
                                    <h5>말랑콩 (27/여) <span className="badge bg-success">40.3</span></h5>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12}>
                                    <p>안녕하세요, 저는 판후이라고 하지만 체리라고 부를 수도 있어요. 저는 구이판과 광저우 근처에 있는 중국 류저우에서 온 32세 여성입니다.</p>
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>

                            <h3>참여중인 동행</h3>
                            <Card className="mb-3 bg-light">
                                <Card.Body>
                                <Row>
                                    <Col md={4}>
                                    <p>말랑콩 (27/여) <span className="badge bg-success">40.3</span></p>
                                    </Col>
                                    <Col md={4}>
                                    <p>말랑콩 (27/여) <span className="badge bg-success">40.3</span></p>
                                    </Col>
                                    <Col md={4}>
                                    <p>말랑콩 (27/여) <span className="badge bg-success">40.3</span></p>
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>

                            <h3>댓글</h3>
                            <Card className="mb-3 bg-light">
                                <Card.Body>
                                <Form.Control as="textarea" rows={3} placeholder="첫 댓글을 작성해보세요!" />
                                </Card.Body>
                            </Card>
                            </div>
                            <h3 className="text-start mb-4">(나라 or 도시) 동행 둘러보기</h3>
                            <Row>
                                {posts.map((post, index) => (
                                <Col md={6} key={index}>
                                    <Card className="mb-3">
                                    <Row noGutters>
                                        <Col md={4}>
                                        {/* <Card.Img src={placeholderImage} /> */}
                                        </Col>
                                        <Col md={8}>
                                        <Card.Body>
                                            <Card.Title>{post.title}</Card.Title>
                                            <Card.Text>
                                            {post.date} <br />
                                            {post.location} <br />
                                            {post.participants} <br />
                                            {post.name}
                                            </Card.Text>
                                        </Card.Body>
                                        </Col>
                                    </Row>
                                    </Card>
                                </Col>
                                ))}
                            </Row>
                            </Container>
                    </Col>)}
                    {activeTab == '프로필' && (<Col md={8} className="left-section">
                        <div className="profile-info-box">
                            <div>
                                <h3 className="font-weight-bold">사진</h3>
                            </div> 
                        </div>
                    </Col>)}
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
        </>
    )
}

export default Accompany;