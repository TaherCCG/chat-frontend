import React, { useState } from "react";
import appStyles from "../../styles/SignInForm.module.css";

import { Row, Container, Form, Button, Col, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function SignInForm () {

  const [signInData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
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
        <h1 className={appStyles.Header}>Sign In</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group  className="mb-3" controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={appStyles.Input}
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group  className="mb-3" controlId="email">
              <Form.Label className="d-none">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                className={appStyles.Input}
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.email?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group  className="mb-3" controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className={appStyles.Input}
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button type="submit" className={appStyles.Button}
            >
              Sign in
            </Button>
            {errors?.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>

      </Container>

      <Container className={`mt-3 ${appStyles.Content}`}>
        <Link className={appStyles.Link} to="/signup">
          Don't have an account? <span>Sign Up!</span>
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
}

export default SignInForm;
