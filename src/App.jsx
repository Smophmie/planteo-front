import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plants from "./pages/Plants";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from './components/Footer';
import Plant from './pages/Plant';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
    <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />}/>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/all-plants" element={<Plants/>}/>
        <Route path="/plant/:id" element={<Plant/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    <Footer isAuthenticated={isAuthenticated} onLogout={handleLogout}/>
    </BrowserRouter>
  );
}

export default App
