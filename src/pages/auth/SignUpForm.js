import React, {useState} from "react";
import appStyles from "../../styles/SignUpForm.module.css";

import { Row, Container, Form, Button, Col, Alert} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { username, email, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={appStyles.Row}>
    <Col
      md={4}
      className={`my-auto d-none d-md-block p-2 ${appStyles.SignUpCol}`}
    >
    </Col>
    <Col className="my-auto py-2 p-md-2" md={4}>
      <Container className={`${appStyles.Content} p-4 `}>
        <h1 className={appStyles.Header}>sign up</h1>
        
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={appStyles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="d-none">Email</Form.Label>
              <Form.Control
                className={appStyles.Input}
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
                />
            </Form.Group>
            {errors?.email?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="d-none">Create Password</Form.Label>
              <Form.Control
                className={appStyles.Input}
                type="password"
                placeholder="Create Password"
                name="password1"
                value={password1}
                onChange={handleChange}
                />
            </Form.Group>
            {errors?.password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

            <Form.Group className="mb-3" controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                className={appStyles.Input}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

            <Button variant="primary" type="submit" className={appStyles.Button}>
              SignUp
            </Button>
        </Form>

      </Container>
      <Container className={`mt-3 ${appStyles.Content}`}>
        <Link className={appStyles.Link} to="/signin">
          Already have an account? <span>Sign in</span>
        </Link>
      </Container>
    </Col>
    <Col
      md={4}
      className={`my-auto d-none d-md-block p-2 ${appStyles.SignUpCol}`}
    >
    </Col>
  </Row>
  );
};

export default SignUpForm;
