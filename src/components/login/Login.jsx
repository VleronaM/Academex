import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginApp.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate(); 

  async function login() {
    try {
      const loginData = {
        email: email,
        password: pass
      };
  
      const response = await axios.post('http://localhost:3030/login', loginData);
  
      console.log('Login successful', response.data);
  
      const { token, userRole, userId } = response.data; 
  
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', userRole); 
      localStorage.setItem('userId', userId); 
      props.setLoggedIn(true);
      props.setUserRole(userRole);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(); 
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