import React from "react";
import appStyles from "../../styles/MyProfile.module.css";
import { Link } from "react-router-dom";

import {
  Col,
  Row,
  Button,
  Container,
  Card,

} from "react-bootstrap";

const MyProfile = () => {
  return (
    <Container style={{ paddingTop: "60px" }}>
      <Row className="justify-content-center">
    <Col md=" d-flex justify-content-center align-items-center">
      <Card className={appStyles.profileCard} style={{ width: '18rem' }}>
      <Card.Img className={appStyles.myCard} variant="top" src="your-image-url" />
      <Card.Body>
          <Card.Title>Account Name:</Card.Title>
          <Card.Title className="mb-2 text-muted">Bio:</Card.Title>
          <Card.Text>
             Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button as={Link} className={appStyles.EditProfileBtn} to="/editprofile" variant="primary">
            Edit Profile
          </Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
    </Container>
  );
};

export default MyProfile;
