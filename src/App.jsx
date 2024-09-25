import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import axios from 'axios';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plants from "./pages/Plants";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from './components/Footer';
import Plant from './pages/Plant';
import Legals from './pages/Legals';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    if (isAuthenticated) {
      axios.get('http://localhost:8000/api/isadmin', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setIsAdmin(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };


  return (
    <BrowserRouter>
    <Header isAuthenticated={isAuthenticated} isAdmin={isAdmin} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />}/>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/all-plants" element={<Plants/>}/>
        <Route path="/plant/:id" element={<Plant isAuthenticated={isAuthenticated}/>}/>
        {isAuthenticated && <Route path="/profile" element={<Profile isAuthenticated={isAuthenticated}/>}/>}
        <Route path="/legals" element={<Legals/>}/>
        {isAdmin && <Route path="/dashboard" element={<Dashboard isAdmin={isAdmin}/>}/>}
      </Routes>
    <Footer isAuthenticated={isAuthenticated} isAdmin={isAdmin} onLogout={handleLogout}/>
    </BrowserRouter>
  );
}

export default App
