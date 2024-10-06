import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/footer.css" ;
import axios from 'axios';

const navLinks = [
    { href: '/', name: "Accueil" },
    { href: '/all-plants', name: "Toutes les plantes" },
]

const navLinksConnected = [
    { href: '/', name: "Accueil" },
    { href: '/all-plants', name: "Toutes les plantes" },
    { href: '/profile', name: "Mon espace" },
]

const handleLogout = async () => {
    console.log('Déconnexion en cours...');
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        await axios.post(`${import.meta.env.VITE_BACK_URL_LARAVEL}logout`, {}, config);
        localStorage.removeItem('token');
        onLogout(); 
        navigate('/');
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };

function Footer ({ isAuthenticated, isAdmin, onLogout }) {
    return <footer className="m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to="/" className="">
                    <img
                    src="/img/logo-removebg-preview.png"
                    alt="Logo Planteo"
                    className="logo"
                    />
                </Link>
                <ul className="menu menu-horizontal mb-3 sm:mb-0">
                    {!isAuthenticated && navLinks.map( (navLink) => <li key={navLink.name}><a href={navLink.href} >{navLink.name}</a></li>)}
                    {isAuthenticated && navLinksConnected.map( (navLink) => <li key={navLink.name}><a href={navLink.href} >{navLink.name}</a></li>)}   
                    {isAdmin && <li><a href='/dashboard'>Tableau de bord</a></li>}                 
                </ul>
                <ul className="menu menu-horizontal mb-3 sm:mb-0">
                    <li><a href="/legals" className="">Mentions légales</a></li>
                    <li><a href="/" className="">Contact</a></li>
                </ul>
            </div>
        </div>
    </footer>
    
    
}

export default Footer