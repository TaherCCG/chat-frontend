import React from "react";
import styles from "../../styles/SignUpForm.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function SignUpFrom () {
  return (
    <Container>
      <Form>
        <Form.Text className="text-muted">
          Sign Up
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCreatePassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control type="password" placeholder="Create Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpFrom;
