import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './EditProfile.css';

function EditProfile() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container className="mt-4">
      <div className="cover-image-wrapper">
        <div className="cover-image">
          <Form.Label className="cover-label">
            <i className="bi bi-camera"></i> 커버
          </Form.Label>
        </div>
      </div>
      <Row className="align-items-center mt-3">
        <Col xs={3} className="text-center">
          <div className="profile-image-wrapper">
            <label htmlFor="imageUpload" className="profile-image-label">
              <img
                src={image || 'default-image.png'}
                alt="프로필"
                className="profile-image"
              />
              <i className="bi bi-camera"></i>
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="d-none"
            />
          </div>
        </Col>
        <Col xs={9}>
          <Form.Group controlId="formTitle">
            <Form.Control
              type="text"
              placeholder="제목을 입력해주세요. (50자 이내)"
            />
          </Form.Group>
        </Col>
      </Row>
      <p className="mt-3 text-danger">
        <i className="bi bi-exclamation-triangle"></i> 사진 미첨부 시, 기본 사진이 들어갑니다.
      </p>
      <Button variant="primary" className="mt-3">저장</Button>
    </Container>
  );
}

export default EditProfile;
