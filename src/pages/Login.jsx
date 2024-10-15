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
      const response = await axios.post(`${import.meta.env.VITE_BACK_URL_LARAVEL}login`, { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('is_admin', response.data.is_admin);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('city', response.data.city);
      onLogin();
      navigate('/');
    } catch (err) {
      setError('La connexion a échoué, veuillez réessayer.');
    }
  };

  return (
    <div className="lg:w-1/3 sm:w-3/4 md:w-3/4 lg:mx-auto lg:my-10 m-10">
      <div className="form space-y-3">
        <h1 className='text-3xl'>Bonjour</h1>
        <p>Connectez-vous et développez votre potager.</p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className="form-group">
            <label htmlFor="email">Votre e-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input bg-transparent w-full"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Votre mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

