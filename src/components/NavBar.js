import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import {NavLink} from "react-router-dom";
import { useSetCurrentUser } from "../context/CurrentUserContext";

const NavBar = () => {
    const currentUser = useSetCurrentUser();

    const loggedInIcons = <>{currentUser?.username}</>; 
    const loggedOutIcons = (
    <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin"
        >
            <i className="fas fa-sign-in-alt m-1"></i>Sign in
        </NavLink>
        <NavLink
            to="/signup"
            className={styles.NavLink}
            activeClassName={styles.Active}
        >
            <i className="fas fa-sign-in-alt m-1"></i>Sign up
        </NavLink>
    </>
    );


    return (
        <Navbar expand="md" fixed="top" className={styles.NavBar}>

            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/"
            >
                <Navbar.Brand className={styles.NavMenuLogo}>
                    <img src={logo} alt="logo" height="45" />
                    <p>Ask Cupid</p>
                </Navbar.Brand>
            </NavLink>



            <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-3"/>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">

                    {currentUser ? loggedInIcons: loggedOutIcons}

                    <NavLink
                        to="/myprofile"
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                    >
                        <i className="fas fa-sign-in-alt m-1"></i>My Profile
                    </NavLink>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default NavBar;