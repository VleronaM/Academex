import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3030/users/create', {
        email,
        password: pass,
        name,
        surname
      });

      console.log('Registration successful', response.data);
      setSuccessMessage('Registration successful. Redirecting to home page...');
      // After 3 seconds, navigate to the home page
      setTimeout(() => {
        navigate('/'); // Navigate to the home page
      }, 3000);
    } catch (error) {
      console.error('Registration failed', error.response.data);
      // Handle registration failure
    }
  };

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Name.." required></input>

        <label htmlFor="surname">Surname</label>
        <input value={surname} onChange={(e) => setSurname(e.target.value)} name="surname" id="surname" placeholder="Surname.." required></input>

        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required></input>

        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required></input>

        <button type="submit">Register</button>
      </form>
      <p>{successMessage}</p>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>
        Already have an account? Log in here.
      </button>
    </div>
  );
};

export default Register;
