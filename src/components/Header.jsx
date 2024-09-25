import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/header.css" ;
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

function Header({ isAuthenticated, isAdmin, onLogout }) {

    const navigate = useNavigate();

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
            await axios.post('http://localhost:8000/api/logout', {}, config);
            localStorage.removeItem('token');
            onLogout(); 
            navigate('/');
          }
        } catch (error) {
          console.error('Erreur lors de la déconnexion', error);
        }
      };
    
    return (
        <>
        <header>
            <div className="navbar navbar-header">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                        </div>
                        <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                        {!isAuthenticated && navLinks.map( navLink => <li><a href={navLink.href} key = {navLink.name}>{navLink.name}</a></li>)}
                        {isAuthenticated && navLinksConnected.map( navLink => <li><a href={navLink.href} key = {navLink.name}>{navLink.name}</a></li>)}
                        {isAdmin && <li><a href='/dashboard'>Tableau de bord</a></li>}



                        {/* {isAuthenticated && isAdmin && <li><Link to="/all-users" className="">Tous les utilisateurs</Link></li>} */}
                        {isAuthenticated && (
                            <li>
                            <button onClick={handleLogout} className="">
                                Me déconnecter
                            </button>
                            </li>
                        )}
                        {!isAuthenticated && <li><Link to="/login" className="">Me connecter</Link></li>}
                        {!isAuthenticated && <li><Link to="/register" className="">Créer un compte</Link></li>}
                        </ul>
                    </div>
                    <Link to="/" className="btn-ghost">
                        <img
                        src="/img/logo-removebg-preview.png"
                        alt="Logo"
                        className="logo"
                        />
                    </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {!isAuthenticated && navLinks.map( navLink => <li><a href={navLink.href} key = {navLink.name}>{navLink.name}</a></li>)}
                        {isAuthenticated && navLinksConnected.map( navLink => <li><a href={navLink.href} key = {navLink.name}>{navLink.name}</a></li>)}
                        {isAdmin && <li><a href='/dashboard'>Tableau de bord</a></li>}
                    </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {isAuthenticated && (
                            <li>
                                <button onClick={handleLogout} className="">
                                Me déconnecter
                                </button>
                            </li>
                            )}
                            {!isAuthenticated && <li><Link to="/login" className="">Me connecter</Link></li>}
                            {!isAuthenticated && <li><Link to="/register" className="">Créer un compte</Link></li>}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
  }
  
  export default Header