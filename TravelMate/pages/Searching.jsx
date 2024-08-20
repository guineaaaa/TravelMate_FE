import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Searching.css";
// import placeholderImage from '../src/assets/hollywood.jpg';

const FilterSection = () => {
  return (
    <div className="filter-section p-3">
      <Form>
        <Form.Group controlId="search">
          <Form.Label>검색</Form.Label>
          <Form.Control type="text" placeholder="나라, 지역 혹은 도시를 입력하세요" />
        </Form.Group>
        <Form.Group controlId="type" className="mt-3">
          <Form.Label>동행 유형</Form.Label>
          <Form.Control as="select">
            <option>전체 동행</option>
            <option>유형 1</option>
            <option>유형 2</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="region" className="mt-3">
          <Form.Label>지역</Form.Label>
          <Form.Control type="text" placeholder="나라, 지역 혹은 도시를 입력하세요" />
        </Form.Group>
        <Form.Group controlId="dates" className="mt-3">
          <Form.Label>날짜</Form.Label>
          <div className="d-flex">
            <Form.Control type="date" className="me-2" />
            <Form.Control type="date" />
          </div>
        </Form.Group>
        <Form.Group controlId="language" className="mt-3">
          <Form.Label>언어</Form.Label>
          <Form.Control type="text" placeholder="동행자가 사용할 수 있는 언어를 선택하세요" />
        </Form.Group>
        <Form.Group controlId="age" className="mt-3">
          <Form.Label>나이 / 성별</Form.Label>
          <div className="d-flex">
            <Form.Control type="number" placeholder="이상" className="me-2" />
            <Form.Control type="number" placeholder="미만" />
          </div>
          <div className="mt-2">
            <Form.Check inline label="전체" type="radio" name="gender" id="gender1" />
            <Form.Check inline label="남자" type="radio" name="gender" id="gender2" />
            <Form.Check inline label="여자" type="radio" name="gender" id="gender3" />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

const PostCard = ({ post }) => {
  return (
    <Card className="mb-3">
      <Row noGutters>
        <Col md={4}>
          {/* <Card.Img src={placeholderImage} /> */}
        </Col>
        <Col md={8}>
          <Card.Body className="text-start">
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <i className="bi bi-calendar3 me-2"></i>{post.date} <br />
              <i className="bi bi-geo-alt me-2"></i>{post.location} <br />
              <i className="bi bi-people me-2"></i>{post.participants} <br />
              {post.name}
            </Card.Text>
            <Button variant="primary" className="me-2">전체 동행</Button>
            <Button variant="secondary" className="me-2">최소 동행</Button>
            <Button variant="outline-secondary">쉐어 위치</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

const PostList = () => {
  const posts = [
    { title: 'LA 할리우드를 보고, 시내 같이 걸어요~', date: '2024.07.01 15:00 ~ 21:00', location: 'LA / 미국', participants: '1/4 (여성만 가능)', name: '말랑콩 (27/여)' },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
      <div className='text-end'>
      <Button className="btn primary rounded-pill btn-sm">글쓰기</Button>
      </div>
      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

const Searching = () => {
  return (
    <>
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100px', backgroundColor: '#cccccc' }}>
        커버
    </Container>
    <Container className="m-3 mb-5 border">
    <Container fluid>
      <Row>
        <Col md={4}>
          <FilterSection />
        </Col>
        <Col md={8}>
          <h5 className="mt-3">추천 포스팅</h5>
          <PostList />
        </Col>
      </Row>
    </Container>
    </Container>
    </>
  );
};

export default Searching;
