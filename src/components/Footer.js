import React from "react";
import styles from "../styles/Footer.module.css";
import Dropdown from 'react-bootstrap/Dropdown';

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
                            <a href="https://github.com/HerFri" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/herbert-frichert-b12486172/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Hilla
                        <div className={styles.DropdownLinks}>
                            <a href="https://github.com/HMuraja" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/hilla-muraja" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Joe
                        <div className={styles.DropdownLinks}>
                            <a href="https://github.com/Joe-Collins-1986" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/joseph-collins-129788b2/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Jorgan
                        <div className={styles.DropdownLinks}>
                            <a href="https://github.com/JorgenDIF" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/jorgenjonsson1980/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Sian
                        <div className={styles.DropdownLinks}>
                            <a href="https://github.com/secarrel" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/sian-carrel" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className={styles.DropdownItem}> 
                        Taher
                        <div className={styles.DropdownLinks}>
                            <a href="https://github.com/TaherCCG" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/taher-m/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </footer>
    );
};

export default Footer;