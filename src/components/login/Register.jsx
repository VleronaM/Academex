import React, { useState } from 'react';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='auth-form-container'>
        <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Name.."></input>
        
        <label htmlFor="surname">Surname</label>
        <input value={surname} onChange={(e) => setSurname(e.target.value)} name="surname" id="surname" placeholder="Surame.."></input>
        
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
        
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>

        <label htmlFor="birthday">birthday</label>
        <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" placeholder="dd-mm-yyyy" id="birthday" name="birthday"></input>
        
        <label htmlFor="city">city</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="City.." id="city" name="city"></input>
        
        <label htmlFor="address">address</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address.." id="address" name="address"></input>
        
        <button type="submit">Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>
        Already have an account? Log in here.
      </button>
    </div>
  );
};

export default Register;
