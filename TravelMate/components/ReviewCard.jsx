import React from "react";
import {Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewCard = ({ review }) => (
    <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Text className="mb-4 text-center">"{review.text}"</Card.Text>
          {/* <img src={profileImage} alt="Profile" className="rounded-circle mb-2" width="60" height="60" /> */}
          <Card.Title className="mb-0">{review.name}</Card.Title>
          <Card.Subtitle className="text-muted">{review.date}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
);

export default ReviewCard;