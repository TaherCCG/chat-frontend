import React from "react";
import { Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import appStyles from "../../styles/LandingPage.module.css";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import ChatGptRequest from "../../components/ChatGptRequest";

const LandingPage = () => {
  const currentUser = useCurrentUser();

  const loggedOutContent = (
    <>
      <p>Want help from Cupid?</p>
      <div className={appStyles.TextBox}>
      <p>
        Be a Better Partner with Ask Cupid! 🚀 Elevate connections with tailored
        gift suggestions and dreamy holiday destinations. Your ultimate
        companion for unforgettable moments. Sign up to get started!
      </p>
      </div>
      <Button className={`${appStyles.SignButton}`}>
        <Link className={appStyles.Link} to="/signup">
          Sign Up
        </Link>
      </Button>
      <div style={{ margin: '0 10px' }}></div>
      <Button className={`${appStyles.SignButton}`}>
        <Link className={appStyles.Link} to="/signin">
          Sign In
        </Link>
      </Button>
    </>
  );

  const loggedInContent = (
    <>
      <p>Welcome {currentUser?.username}!</p>
      <ChatGptRequest />
    </>
  );

  return (
    <div className={appStyles.LandingArea}>
      <img src={logo} className={appStyles.AppLogo} alt="logo" />
      <Container>{currentUser ? loggedInContent : loggedOutContent}</Container>
    </div>
  );
};

export default LandingPage;
