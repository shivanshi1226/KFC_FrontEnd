import React, { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import "./SignUp.css";

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://kfc-clone-backend-3.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailId, password }), 
      });
  
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('User logged in successfully');
        setErrorMessage('');       
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        setTimeout(() => {
          navigate("/cart"); 
        }, 1000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Login failed');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Error occurred during login. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h5 className="signup-title">Sign In</h5>
        <img
          className="signup-logo"
          src="https://login.kfc.co.in/auth/resources/jdsrg/login/kfcIndiaLoginUIDev_02-23-2024-12-20/images/KFC_logo.svg"
          alt="KFC Logo"
        />
        <h1 className="signup-header">Let’s Sign In<br />Email Id!</h1>
        <input
          type="email"
          className="signup-input"
          placeholder="Email Id*"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          required
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Enter your Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="signup-terms">
          By “logging in to KFC”, you agree to our
          <a
            href="https://online.kfc.co.in/privacyPolicy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          and
          <a
            href="https://online.kfc.co.in/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions.
          </a>
        </p>
        <button type="submit" className="signup-button">Submit</button>
        <p className="signup-or">or</p>
        <Link to="/menu"><button className="signup-guest-button">Skip, Continue As Guest</button></Link>
      </form>
    </div>
  );
};

export default Login;
