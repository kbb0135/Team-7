import React, {useState} from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle sign up logic
      }

  return (
    <div className="login">
      <h2 className="unt-login">UNT LogIn</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="submit" value="LogIn" /> 
        <Link to="/signup" className="direct"><h4 className="direct">Back to SignUp</h4></Link>
      </form>
    </div>
  );
}

export default Login;
