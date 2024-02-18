import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import styles from "../../styles/LandingPage.module.css";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import ChatGptRequest from "../../components/ChatGptRequest";

const LandingPage = () => {
  const currentUser = useCurrentUser();

  const loggedOutContent= (<>
    <p>Want help from Cupid?</p>
    <Link className={styles.Link} to="/signup">
      Sign Up
    </Link>
    <Link className={styles.Link} to="/signin">
      Sign In
    </Link>
  </>
  );

  const loggedInContent= (<>
    <p>Welcome {currentUser?.username}!</p>
    <ChatGptRequest/>
  </>
  );


  return (
    

    <div className= {styles.LandingArea}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <Container>
          {currentUser ? loggedInContent : loggedOutContent}
        </Container>

    </div>
  );
};

export default LandingPage;
