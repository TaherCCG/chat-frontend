import React from "react";
import { Button, Container, Form} from "react-bootstrap";
import appStyles from "../../styles/SignUpForm.module.css";

const EditProfile = () => {

  return (
    <Container>
      <p>Edit My Profile</p>

      <Form>
          <Form.Group className="mb-3" controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                  className={appStyles.Input}
                  type="text"
                  placeholder="Username"
                  name="username"
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label className="d-none">username</Form.Label>
            <Form.Control
              className={appStyles.Input}
              type="text"
              placeholder="Username"
              name="username"
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="d-none">Email</Form.Label>
            <Form.Control
              className={appStyles.Input}
              type="email"
              placeholder="Enter email"
              name="email"
              />
          </Form.Group>
          <Button type="submit">Submit</Button>
      </Form>
        
  </Container>
  );
};

export default EditProfile;