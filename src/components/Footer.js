import React from "react";
import styles from "../styles/Footer.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={styles.GithubLinks}>
                    Meet the team
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.DropdownContent}>
                    <div className={styles.DropdownItem}> 
                        Herbert
                        <div className={styles.DropdownLinks}>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Hilla
                        <div className={styles.DropdownLinks}>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Joe
                        <div className={styles.DropdownLinks}>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Jorgan
                        <div className={styles.DropdownLinks}>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Sian
                        <div className={styles.DropdownLinks}>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Taher
                        <div className={styles.DropdownLinks}>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </footer>
    );
};

export default Footer;