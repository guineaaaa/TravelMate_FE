import { Container, Row, Col, Button, Nav, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div> {/* 모든 컨테이너와 로우를 포함하는 최상위 <div> */}
      <div>
        <Container fluid className="px-0">
          <div className="cover-image">커버</div>
          <Row className="profile-header-wrapper position-relative">
            <Col className="text-center position-absolute profile-image-wrapper">
              <div className="profile-image"></div>
            </Col>
            <Col className="d-sm-inline-flex flex-column justify-content-end align-items-left">
              <h5>닉네임 (27/여)</h5>
              <span>idhdb1004@naver.com</span>
              <span className="rating">40.3</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav className="profile-nav justify-content-left mt-3">
                <Nav.Item>
                  <Nav.Link href="#" active>홈</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">소개</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">사진</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">여행 여정</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">리뷰</Nav.Link>
                </Nav.Item>
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
              <div className="main">
                <Container fluid>
                  <Row className="mb-3">
                    <Col>
                     <p>본인인증이 필요해요!</p>
                     <Button variant="primary" className="mr-2">본인인증 하기</Button>
                    </Col>
                  </Row>
                 <Row className="divider">
              </Row>
      
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label>이름</Form.Label>
                      <Form.Control type="text" placeholder="이름 입력" />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                      <Form.Label>휴대폰 번호</Form.Label>
                      <Form.Control type="text" placeholder="휴대폰 번호 입력" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>이메일</Form.Label>
                      <Form.Control type="email" placeholder="이메일 입력" />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Control type="password" placeholder="비밀번호 입력" />
                    </Form.Group>
                  </Form>
                </Col>

                <Col md={6}>
                  <Form>
                    <Form.Label>SNS 연동</Form.Label>
                    <ToggleButtonGroup type="checkbox" className="mb-3">
                      <ToggleButton id="tbg-btn-1" value={1} variant="outline-success">
                        네이버 연동
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-2" value={2} variant="outline-warning">
                        카카오 연동
                      </ToggleButton>
                      <ToggleButton id="tbg-btn-3" value={3} variant="outline-danger">
                        인스타그램 연동
                      </ToggleButton>
                    </ToggleButtonGroup>

                    <Form.Group controlId="marketingConsent">
                      <Form.Check type="switch" label="마케팅 수신 동의" />
                    </Form.Group>

                    <Form.Group controlId="locationConsent">
                      <Form.Check type="switch" label="위치 정보 수집 동의" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
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
