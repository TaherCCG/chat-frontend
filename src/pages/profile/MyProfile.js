import React from "react";
import appStyles from "../../styles/MyProfile.module.css";
import { Link } from "react-router-dom";

import { useCurrentUser } from "../../context/CurrentUserContext";
import useAccountHook from "../../hooks/useAccountHk";

import { Col, Row, Button, Container, Card } from "react-bootstrap";

const MyProfile = () => {
  const currentUser = useCurrentUser();
  const id = currentUser?.pk;
  const { accountData } = useAccountHook(id);
  const { owner, image, bio } = accountData;

  console.log(currentUser);
  console.log(accountData);
  return (
    <Container style={{ paddingTop: "60px" }}>
      <Row className="justify-content-center">
        <Col md=" d-flex justify-content-center align-items-center">
          <Card className={appStyles.profileCard} style={{ width: "18rem" }}>
            <Card.Img
              className={appStyles.profileImg}
              variant="top"
              src={image}
            />
            <Card.Body>
              <Card.Title>{owner}</Card.Title>
              <Card.Title className="mb-2 text-muted">
                {bio ? bio : "You have not provided a bio."}
              </Card.Title>
              <Card.Text>
                {bio
                  ? bio
                  : "Help us better understand you to provide the best romance advice cupid can offer"}
              </Card.Text>
              <Button
                as={Link}
                className={appStyles.EditProfileBtn}
                to="editprofile-password"
                variant="primary"
              >
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
