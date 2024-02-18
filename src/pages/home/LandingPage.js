import React from "react";
import { Container} from "react-bootstrap";
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
      <div className={appStyles.ButtonContainer}>
        <Link className={`${appStyles.SignButton} ${appStyles.Link}`} to="/signup">
          Sign Up
        </Link>

        <Link className={`${appStyles.SignButton} ${appStyles.Link}`} to="/signin">
            Sign in
        </Link>
      </div>

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
