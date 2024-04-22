// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file for custom styling
import logo from './EventManagementLogo.png'; // Import logo image

function App() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    username: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', formData);
      console.log(res.data);
      // Handle successful registration
    } catch (err) {
      console.error(err);
      // Handle registration error
    }
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Event Management Logo" className="logo" />
      </div>
      <div className="form-container">
        <h1 className="title">Register Now</h1>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="input" />
          <br />
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" required className="input" />
          <br />
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required className="input" />
          <br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input" />
          <br />
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required className="input" />
          <br />
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
