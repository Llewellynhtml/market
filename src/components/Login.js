// Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './Auth.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData?.email === formData.email && storedData?.password === formData.password) {
      login(storedData); // Call login with user data
      console.log('User logged in');
      navigate('/'); // Redirect to homepage after successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account?{' '}
          <span onClick={() => navigate('/register')}>Register here</span>
        </p>
        <p>
          Forgot password?{' '}
          <span onClick={() => navigate('/forgot-password')}>Click here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
