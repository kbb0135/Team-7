import React, { useState } from "react";
import "../style.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isFormComplete, setFormComplete] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const email = event.target[2].value;
    const password = event.target[4].value;
    console.log(firstName + lastName + email);
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          await setDoc(doc(db, "Users", user.uid), {
            FirstName: firstName,
            LastName: lastName,
            email: email,
          });
          // ...
        navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setSignUpError(error.message);
          return;
          // ..
        });

    } catch {
     }
  };
  return (
    <div className="signup p-32">
      <h1 className="m-b-32 te-color-neutralgray-5">
        Sign up with UNT Cafeteria{" "}
      </h1>
      {signUpError != "" ? (
        <div className="te-color-red-5 te-size-14 m-b-16">
          <span className="te-size-12"><FaRegCircleXmark />  </span>
          {signUpError}
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="m-b-32 flex-col">
        <div className="flex-row gap-8">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              className="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              className="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          className="confirmPassword .m-b-32"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="flex-row">
          <button
            className="da-primary-button te-size-16 flex-1"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex-row jc-center">
        <Link to="/login" className="te-size-14 te-color-da-green-5 direct">
          Already have an account? Log in here.
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
