import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginApp.css'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate(); // Define navigate function

  async function login() {
    try {
      const loginData = {
        email: email,
        password: pass
      };

      // Send POST request to the API
      const response = await axios.get('http://localhost:3030/users', loginData);

      // Assuming the API returns some response data upon successful login
      console.log('Login successful', response.data);

      // Redirect to home page
      navigate('/');
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // Call the login function when the form is submitted
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email'/>

        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id='password' name='password'/>
        <button type="submit">Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
