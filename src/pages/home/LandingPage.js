import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import styles from "../../styles/LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
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
        </Container>

    </div>
  );
};

export default LandingPage;
