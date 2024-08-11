import { useState } from 'react';
import { Container, Row, Col, Button, Nav, Form, Image } from 'react-bootstrap';
import './Home.css';

function Home() {

  const [profileImage] = useState('profile-image.png'); // 기본 프로필 이미지
  const [coverImage] = useState('cover-image.png'); // 기본 커버 이미지
  
  return (
    <div> {/* 모든 컨테이너와 로우를 포함하는 최상위 <div> */}
      <div>
      <Container fluid className="px-0 cover-container">
        <Image src={coverImage} alt="Cover" fluid className="cover-image"/>

        <Row className="justify-content-md-center align-items-center profile-row">
          <Col md={1} className="text-center">
            <Image src={profileImage} alt="Profile" roundedCircle className="profile-image" />
          </Col>
          <Col md={10}>
            <Row className="align-items-center">
              <Col xs="auto" className="nickname-container">
                <div className="nickname-text"><strong>닉네임 (27/여)</strong></div>
              </Col>
              <Col xs="auto">
                <Image src="/instagram-icon.png" alt="Instagram" style={{ width: '24px', height: '24px' }} />
              </Col>
              <Col xs="auto">
                <div className="rating-container">
                <span className="rating-score">40.3</span>
                <Image src="/rating-icon.png" alt="Rating" style={{ width: '24px', height: '24px' }} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>idhdb1004@naver.com</p>
              </Col>
            </Row>
          </Col>
        </Row>

          <Row>
            <Col>
              <Nav className="profile-nav justify-content-left mt-3">
                <Nav.Item><Nav.Link href="#" active>홈</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">소개</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">사진</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">여행 여정</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">리뷰</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col>
              <div className="d-flex justify-content-end mt-3">
                <Button variant="primary" className="mr-2">글쓰기</Button>
                <Button variant="primary" className="mr-2">프로필 수정</Button>
                <Button variant="primary" className="mr-2">프로필 공유</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>  

      <div className="main-content-wrapper">
        <Container fluid>
          <Row>
            {/* 메인 구역 */}
            <Col>
              <div className="main my-2">
                <Container fluid>
                  <Row className="mb-3">
                    <Col>
                     <p><strong>본인인증이 필요해요!</strong></p>
                     <Button variant="primary" className="mr-2">본인인증 하기</Button>
                    </Col>
                  </Row>
                  <Row className="divider"/>
                <Container>
                  <Row>
                    <Col md={3} className="px-3" style={{ borderRight: '2px solid #dee2e6' }}>
                    <Form>
                      <Form.Group className="formName my-5">
                        <Row>
                        <p> </p>
                        <Form.Label><strong>이름</strong></Form.Label>
                        <p> </p>
                        <p> </p>
                        </Row>
                      </Form.Group>

                      <Form.Group className="formPhone my-5">
                        <Row>
                        <Form.Label><strong>휴대폰 번호</strong></Form.Label>
                        <p>  </p>
                        </Row>
                      </Form.Group>

                      <Form.Group className="formEmail my-5">
                        <Row>
                        <Form.Label><strong>이메일</strong></Form.Label>
                        </Row>
                      </Form.Group>

                      <Form.Group className="formInstagram mt-5 mb-3">
                        <Row>
                        <Form.Label><strong>인스타 계정 연동</strong></Form.Label>
                        <p> </p>
                        <p> </p>
                        </Row>
                      </Form.Group>

                      <Form.Group className="formPassword my-4">
                        <Form.Label><strong>비밀번호</strong></Form.Label>
                      </Form.Group>
                    </Form>
                    </Col>

                    <Col md={5} className="px-3">
                      <Form>
                        <Form.Group className="formName my-5">
                          <Row className="px-3">
                          <Form.Control plaintext readOnly defaultValue="안태주"/>
                          <div className="small text-danger px-0">본인인증 필요</div>
                          </Row>
                        </Form.Group>

                        <Form.Group className="formPhone my-5">
                          <Row className="px-3">
                          <Form.Control plaintext readOnly defaultValue="+82 01066840840"/>
                          <div className="small text-danger px-0">본인인증 필요</div>
                          </Row>
                        </Form.Group>

                        <Form.Group className="formEmail my-5">
                          <Form.Control plaintext readOnly defaultValue="sadsaf@naver.com"/>
                        </Form.Group>

                        <Form.Group className="formInstagram my-5">
                          <Form.Control type="text" placeholder="@를 제외한 user ID만 입력해주세요"/>
                        </Form.Group>

                        <Form.Group className="formPassword my-5">
                          <Form.Control plaintext readOnly defaultValue="********"/>
                        </Form.Group>
                      </Form>
                    </Col>
                    <Row className="divider"/>
                    <Col md={3} className="px-3" style={{ borderRight: '2px solid #dee2e6' }}>
                    <Form>
                      <Form.Group className="formName my-5">
                        <Row>
                        <p> </p>
                        <Form.Label><strong>마케팅 수신 동의</strong></Form.Label>
                        <p> </p>
                        <p> </p>
                        </Row>
                      </Form.Group>

                      <Form.Group className="formName my-5">
                        <Row>
                        <p> </p>
                        <Form.Label><strong>위치 정보 수집</strong></Form.Label>
                        <p> </p>
                        <p> </p>
                        </Row>
                      </Form.Group>
                    </Form>
                    </Col>

                    <Col md={5} className="px-3">
                    <Form>
                      <Row className="px-3">
                        <p> </p>
                      <Form.Check className="mt-5 custom-switch-reverse"
                      label="이메일 수신"
                      type="switch"
                      id="custom-switch"
                      ></Form.Check>
                      </Row>

                      <Row className="px-3">
                      <Form.Check
                      label="SMS 수신"
                      type="switch"
                      id="custom-switch"
                      className="custom-switch-reverse"
                      ></Form.Check>
                      </Row>

                      <Row className="px-3">
                      <Form.Check
                      label="앱 푸쉬"
                      type="switch"
                      id="custom-switch"
                      className="custom-switch-reverse"
                      ></Form.Check>
                      </Row>

                      <Row className="px-3">
                      <Form.Check className="mt-5 custom-switch-reverse"
                      label="위치 정보 수집 동의"
                      type="switch"
                      id="custom-switch"
                      ></Form.Check>
                      </Row>
                    </Form>
                    </Col>
                  </Row>
                </Container>
              </Container>
              </div>
            </Col>

            {/* 찜한 동행 및 광고 구역 */}
            <Col md={4}>
              {/* 찜한 동행 구역 */}
              <div className="favorites">
                <h2>찜한 동행</h2>
                <p>1. 6/27 LA 다운타운에서 봐요~</p>
                <p>1. 6/27 LA 다운타운에서 봐요~</p>
                <p>1. 6/27 LA 다운타운에서 봐요~</p>
                <p>1. 6/27 LA 다운타운에서 봐요~</p>
              </div>
            
              {/* 광고 페이지 구역 */}
              <div className="ads">
                <h3>광고 페이지</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
