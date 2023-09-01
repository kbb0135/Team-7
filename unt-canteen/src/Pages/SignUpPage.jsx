import React from "react";
import SignUp from "../Models/SignUp.jsx";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="fullscreen pad-30">
      <div className="flex-col ali-center">
        <div className="flex-row jc-start full-width">
          <Link to="/home" className="direct da-secondary-button">
            Back to Home
          </Link>
        </div>
        <SignUp />
        </div>
    </div>
  );
};
export default SignUpPage;
