import React, {useState} from "react";
import appStyles from "../../styles/SignInForm.module.css";
import { Form, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import styles from "../../styles/LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {

  const [questionData, setQuestionData] = useState({
    question: ""});

  const { question} = questionData;
  
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post("/dj-rest-auth/login/", signInData);
  //     history.push("/");
  //   } catch (err) {
  //     setErrors(err.response?.data);
  //   }
  // };

  const handleChange = (event) => {
    setQuestionData({
      ...questionData,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div className= {styles.LandingArea}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>Do you want to ask help from Cupid?</p>
        <Container >

          <Link className={styles.Link} to="/signup">
            Sign Up
          </Link>
          <Link className={styles.Link} to="/signin">
            Sign In
          </Link>

          <Form onSubmit={""}>

            <Form.Group className="mb-3 mt-3" controlId="questions">
              <Form.Label className="d-none">Questions</Form.Label>
              <Form.Select
                  className={appStyles.Input}
                  type="text"
                  placeholder="Select a Question"
                  name="questions"
                  onChange={handleChange}>
                <option value="gift">Perfect Gift</option>
                <option value="movie">Good Movie Suggestion</option>
                <option value="travel">Travel Destination</option>
                <option value="music">Music they might like</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>

          <div>
            <p> Generate Answer Here </p>
          </div>
        
        </Container>

    </div>
  );
};

export default LandingPage;
