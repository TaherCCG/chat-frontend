import React from "react";
import appStyles from "../../styles/SignInForm.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const MyProfile = () => {

  return (
    <Container>
        <Link className={appStyles.Link} to="/editprofile">
          Edit Profile
        </Link>
        <div>
            <image></image>
        <p>Image Here</p>
        </div>
        <div className="mx-2 ">
            <strong>Profile username</strong>
        </div>
        <div className= "ml-auto">
            <p>Details Go Here</p>
        </div>
    </Container>


  );
};

export default MyProfile;
