import React from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Alert,
  Card,
} from "react-bootstrap";
import appStyles from "../../styles/SignUpForm.module.css";

import useEditAccountPasswordHook from "../../hooks/useEditAccountPasswordHk";
import { useCurrentUser } from "../../context/CurrentUserContext";

const EditProfilePassword = () => {
  const currentUser = useCurrentUser();
  const { pk } = currentUser;
  const { new_password1, new_password2, errors, handleChange, handleSubmit } =
    useEditAccountPasswordHook(pk);

  return (
    <Row className={appStyles.Row}>
      <Col
        md={4}
        className={`my-auto d-none d-md-block p-2 ${appStyles.SignUpCol}`}
      ></Col>
      <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={appStyles.Header}>Update Password</h1>

          <Form className="editForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="new_password1">
              <Form.Label>Edit Password</Form.Label>
              <Form.Control
                type="password"
                name="new_password1"
                value={new_password1}
                onChange={handleChange}
                className={appStyles.Input}
              />

              {errors.new_password1?.map((message, idx) => (
                <Alert className="mt-3" key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="new_password2">
              <Form.Label>Confirm Edit Password</Form.Label>
              <Form.Control
                type="password"
                name="new_password2"
                value={new_password2}
                onChange={handleChange}
                className={appStyles.Input}
              />

              {errors.new_password2?.map((message, idx) => (
                <Alert className="mt-3" key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Button type="submit" className={appStyles.Button}>
              Submit
            </Button>
          </Form>
        </Container>
      </Col>
      <Col
        md={4}
        className={`my-auto d-none d-md-block p-2 ${appStyles.SignUpCol}`}
      ></Col>
    </Row>
  );
};

export default EditProfilePassword;
