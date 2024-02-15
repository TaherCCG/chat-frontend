import React from "react";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className= {styles.LandingArea}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>Do you want to ask help from Cupid?</p>
        <Button href="" variant="secondary">Login</Button>
        <Button href="" variant="signup">Signup</Button>
    </div>
  );
};

export default LandingPage;
