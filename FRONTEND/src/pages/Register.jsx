import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/register.css";
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', { name, email, password });
      setMessage(res.data.message);
      setName(''); setEmail(''); setPassword('');

      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error occurred');
      if(err.response?.data?.message.includes('already exists')) {
        setTimeout(() => navigate('/login'), 1500);
      }
    }
  };

  return (
    <>
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input class="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        <p>{message}</p>
        <p class="reg">Already registered? <Link to="/login">Login here</Link></p>
      </div>
    </>
  );
}
