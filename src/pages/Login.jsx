import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../assets/css/login.css"


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      onLogin();
      navigate('/');
    } catch (err) {
      setError('La connexion a échoué, veuillez réessayer.');
    }
  };

  return (
    <div className="lg:w-1/3 sm:w-3/4 md:w-3/4 m-auto my-10">
      <div className="form space-y-3">
        <h1 className='text-3xl'>Bonjour</h1>
        <p>Connectez-vous et développez votre potager.</p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
              className="input bg-transparent w-full"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
              className="input bg-transparent w-full"
            />
          </div>
          <button type="submit" className='btn w-full uppercase'>Connexion</button>
          <p className='my-8'>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

