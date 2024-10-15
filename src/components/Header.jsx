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
    { href: '/mycalendar', name: "Mon calendrier"},
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
            await axios.post(`${import.meta.env.VITE_BACK_URL_LARAVEL}logout`, {}, config);
            localStorage.removeItem('token');
            localStorage.removeItem('is_admin');
            localStorage.removeItem('name');
            localStorage.removeItem('city');
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
            <nav className="navbar navbar-header">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" aria-label="Ouvrir le menu de navigation" className="btn btn-ghost lg:hidden">
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
                            {!isAuthenticated && navLinks.map( navLink => 
                                <li key = {navLink.name}><Link to={navLink.href} >{navLink.name}</Link></li>
                            )}
                            {isAuthenticated && navLinksConnected.map( navLink => 
                                <li key = {navLink.name}><Link to={navLink.href} >{navLink.name}</Link></li>
                            )}
                            {isAdmin && 
                                <li><Link to='/dashboard'>Tableau de bord</Link></li>
                            }
                            {isAuthenticated && (
                                <li>
                                    <button onClick={handleLogout} aria-label="Se déconnecter" className="">
                                        Me déconnecter
                                    </button>
                                </li>
                            )}
                            {!isAuthenticated && 
                                <li><Link to="/login" className="">Me connecter</Link></li>
                            }
                            {!isAuthenticated && 
                                <li><Link to="/register" className="">Créer un compte</Link></li>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn-ghost">
                        <img
                        src="/img/logo-removebg-preview.png"
                        alt="Logo Planteo"
                        className="logo"
                        />
                    </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {!isAuthenticated && navLinks.map( navLink => <li key = {navLink.name}><Link to={navLink.href} >{navLink.name}</Link></li>)}
                        {isAuthenticated && navLinksConnected.map( navLink => <li key = {navLink.name}><Link to={navLink.href} >{navLink.name}</Link></li>)}
                        {isAdmin && <li><Link to='/dashboard'>Tableau de bord</Link></li>}
                    </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {isAuthenticated && (
                            <li>
                                <button onClick={handleLogout} aria-label="Se déconnecter" className="">
                                Me déconnecter
                                </button>
                            </li>
                            )}
                            {!isAuthenticated && <li><Link to="/login" className="">Me connecter</Link></li>}
                            {!isAuthenticated && <li><Link to="/register" className="">Créer un compte</Link></li>}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
  }
  
  export default Header