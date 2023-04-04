import React from 'react';
import './Login.css';
import bgImage from './images/cafeteria-photo.jpg'

export default function Login() {
  return (
    <div className='login-container'>
      <h1>Welcome to the website of UNT Cafeteria.</h1>

      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" placeholder="Enter username" />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" placeholder="Enter password" />

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
