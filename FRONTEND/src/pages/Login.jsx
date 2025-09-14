// src/pages/Login.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      
      if (res.data.message === "Login successful") {
        localStorage.setItem("login", "true");
        setMessage("✅ Login successful!");
        setTimeout(() => navigate('/home'), 1000);
      } else {
        setMessage("❌ Login failed. Please check credentials.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || '❌ Error occurred');
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}




