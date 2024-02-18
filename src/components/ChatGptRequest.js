import React, { useState } from "react";
import appStyles from "../styles/ChatGptForm.module.css";
import logo from "../assets/logo.png";
import { Row, Container, Form, Button, Col} from "react-bootstrap";

const ChatGptRequest = () => {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [relationship, setRelationship] = useState("Wife");
  const [personType, setPersonType] = useState("Sporty");
  const [age, setAge] = useState("21");
  const [loves, setLoves] = useState("Animals");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update preset just before submitting
    const updatedPreset = `Respond to this as if you are Cupid: My ${relationship} is a ${personType} ${age} year old who loves ${loves}.
    Really tailor the answer to my next question to them focusing on their age, likes, and gender.
    Start out your answer by explaining why it is well suited to them.`;
    // Call your serverless function here with the updatedPreset
    const fetchedResponse = await fetch("/.netlify/functions/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ preset: updatedPreset, question }),
    });
    const jsonResponse = await fetchedResponse.json();
    setResponse(jsonResponse.message);
  };

  return (

    <Row className={appStyles.Row}>
      <Col className="my-auto py-2 p-md-2" md={8} lg={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={appStyles.Header}>Ask a Question</h1>

          <Form onSubmit={handleSubmit}>

            <br />
            <Form.Group className={appStyles.FormGrp} controlId="relationship">
              <Form.Label className={appStyles.FormLabel}>Relationship:  </Form.Label>
              <select
                className={appStyles.Input}
                placeholder="Select Relationship"
                name="relationship"
                as={"select"}
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              >
                <option value="Wife" >Wife</option>
                <option value="Husband">Husband</option>
                <option value="Girlfriend">Girlfriend</option>
                <option value="Boyfriend">Boyfriend</option>
                <option value="Partner">Partner</option>
                <option value="Imaginary Partner">Imaginary Partner</option>
                <option value="Crush">Crush</option>
              </select>
            </Form.Group>

            <br />

            <Form.Group className={appStyles.FormGrp} controlId="personType">
              <Form.Label className={appStyles.FormLabel}>Type of Person:</Form.Label>
              <select
                className={appStyles.Input}
                placeholder="Select Person Type"
                name="personType"
                as={"select"}
                value={personType}
                onChange={(e) => setPersonType(e.target.value)}
              >
                <option value="Sporty">Sporty</option>
                <option value="Intellectual">Intellectual</option>
                <option value="Creative">Creative</option>
                <option value="Adventurous">Adventurous</option>
                <option value="Lazy">Lazy</option>
                <option value="Curious">Curious</option>
                <option value="Passionate">Passionate</option>
                <option value="Heartful">Heartful</option>
                <option value="Introverted">Introverted</option>
                <option value="Extroverted">Extroverted</option>
                <option value="Sociopathic">Sociopathic</option>
                <option value="Self-Confident">Self-Confident</option>
                <option value="Perfectionist ">Perfectionist </option>
                <option value="Skeptical">Skeptical</option>
                <option value="Wild">Wild</option>
                <option value="Humorous">Humorous</option>
              </select>
            </Form.Group>
            <br />

            <Form.Group className={appStyles.FormGrp} controlId="age">
              <Form.Label className={appStyles.FormLabel}>Age:  </Form.Label>
              <input
                className={appStyles.Input}
                type="number"
                value={age}
                min="1"
                max="100"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group className={appStyles.FormGrp} controlId="loves">
              <Form.Label className={appStyles.FormLabel}>Loves:  </Form.Label>
              <select
                className={appStyles.Input}
                placeholder="Select Loves"
                name="loves"
                as={"select"}
                value={loves}
                onChange={(e) => setLoves(e.target.value)}
              >
                <option value="Animals">Animals</option>
                <option value="Books">Books</option>
                <option value="Travel">Travel</option>
                <option value="Music">Music</option>
                <option value="Gaming">Gaming</option>
                <option value="Coding">Coding</option>
                <option value="Food">Food</option>
                <option value="Drinking">Drinking</option>
                <option value="Nature">Nature</option>
                <option value="Sports">Sports</option>
                <option value="Movies">Movies</option>
                <option value="Fashion">Fashion</option>
                <option value="Art">Art</option>
                <option value="Gardening">Gardening</option>
                <option value="Writing">Writing</option>
              </select>
            </Form.Group>
            <br />

            <Form.Group className={appStyles.FormGrp} controlId="question">
              <Form.Label className={appStyles.FormLabel}>Ask a Question:  </Form.Label>
              <input
                className={appStyles.Input}
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Form.Group>
            
            <Button type="submit" className={appStyles.Button}><img src={logo} alt="logo"/> Ask Cupid</Button>

          </Form>
        </Container>
      </Col>
      <div>{response}</div>
    </Row>
  );
}
export default ChatGptRequest;







