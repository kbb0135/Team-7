import React, { useState } from 'react';
import './style.css';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle sign up logic
  }
  return (
    <div className="signup">
      <h1>UNT Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="sign">First Name:</label>
        <input type="text" id="firstName" className="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <label htmlFor="lastName" className="sign">Last Name:</label>
        <input type="text" id="lastName" className="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <label htmlFor="email" className="sign">Email:</label>
        <input type="email" id="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="confirmEmail" className="sign">Confirm Email:</label>
        <input type="email" id="confirmEmail" className="confirmEmail" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
        <label htmlFor="password" className="sign">Password:</label>
        <input type="password" id="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label htmlFor="confirmPassword" className="sign">Confirm Password:</label>
        <input type="password" id="confirmPassword" className="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
         <input type="submit" value="Sign Up"/>
      </form>
    </div>
  );
}

export default SignUp;
