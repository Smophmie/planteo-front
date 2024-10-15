import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
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
import PlantForm from './pages/PlantForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MyCalendar from './pages/MyCalendar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('is_admin') === '1');

  const handleLogout = () => { 
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  const handleLogin = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setIsAdmin(localStorage.getItem('is_admin') === '1');
    }
  };


  return (
    <BrowserRouter>
    <Header isAuthenticated={isAuthenticated} isAdmin={isAdmin} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />}/>
        {!isAuthenticated && <Route path="/login" element={<Login onLogin={handleLogin} />} />}
        {!isAuthenticated && <Route path="/register" element={<Register/>}/>}
        <Route path="/all-plants" element={<Plants/>}/>
        <Route path="/plant/:id" element={<Plant isAuthenticated={isAuthenticated}/>}/>
        {isAuthenticated && <Route path="/profile" element={<Profile/>}/>}
        {isAuthenticated && <Route path="/mycalendar" element={<MyCalendar/>}/>}
        <Route path="/legals" element={<Legals/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        {isAdmin && <Route path="/dashboard" element={<Dashboard/>}/>}
        {isAdmin && <Route path="/edit-plant/:id" element={<PlantForm/>}/>}
        {isAdmin && <Route path="/create-plant" element={<PlantForm/>}/>}
      </Routes>
    <Footer isAuthenticated={isAuthenticated} isAdmin={isAdmin}/>
    </BrowserRouter>
  );
}

export default App
