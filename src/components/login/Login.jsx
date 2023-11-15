import React, { useState } from 'react';

  const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  async function login() {
    //Send axios request
    const loginData = {
      email: email,
      password: pass
    }

    console.log('login', loginData);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email'/>

        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id='password' name='password'/>
        <button onClick={login}>Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;