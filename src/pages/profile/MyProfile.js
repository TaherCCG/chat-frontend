import React from "react";
import image from "../../assets/profile.png"
import appStyles from "../../styles/MyProfile.module.css";
import { Link } from "react-router-dom";
import { Container, Card, ListGroup} from "react-bootstrap";

const MyProfile = () => {

  return (
    <Container>
          
          <Card className={appStyles.ProfileWrapper} style={{ width: '18rem' }}>

            <Card.Title>My Profile</Card.Title>
            <Card.Img className={appStyles.ProfileImg} variant="top" src={image} />
            
            <Card.Body>
              <Card.Img variant="top" src="" />
              <Card.Title>Username</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>

            <Card.Body>
              <Link className={appStyles.EditProfileBtn} to="/editprofile">
                Edit Profile
              </Link>
            </Card.Body>
        </Card>
    </Container>


  );
};

export default MyProfile;
