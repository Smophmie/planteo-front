import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/footer.css" ;

const navLinks = [
    { href: '/', name: "Accueil" },
    { href: '/all-plants', name: "Toutes les plantes" },
]

const navLinksConnected = [
    { href: '/', name: "Accueil" },
    { href: '/all-plants', name: "Toutes les plantes" },
    { href: '/profile', name: "Mon espace" },
]

function Footer ({ isAuthenticated, isAdmin }) {

    return <footer className="mx-3 my-2">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-start sm:justify-between">
                <Link to="/" className="">
                    <img
                    src="/img/logo-removebg-preview.png"
                    alt="Logo Planteo"
                    className="logo"
                    />
                </Link>
                <div className='menu mb-3 sm:mb-0 items-center justify-center'>
                    <ul className="md:menu-horizontal md:flex-row sm:flex-col justify-center">
                        {!isAuthenticated && navLinks.map( (navLink) => <li key={navLink.name} className='items-center'><a href={navLink.href}>{navLink.name}</a></li>)}
                        {isAuthenticated && navLinksConnected.map( (navLink) => <li key={navLink.name} className='items-center'><a href={navLink.href}>{navLink.name}</a></li>)}   
                        {isAdmin && <li className='items-center'><a href='/dashboard'>Tableau de bord</a></li>}                 
                    </ul>
                    <ul className="menu-horizontal items-end mt-4">
                        <li><a href="mailto:sophiethereau@hotmail.fr">Me joindre par e-mail</a></li>
                        <li><a href="tel:+33648437627">Me joindre par téléphone</a></li>
                    </ul>
                </div>
                <div className='menu mb-3 sm:mb-0 space-y-4'>
                    <ul className="menu-horizontal">
                        <li><a href="/legals" className="">Mentions légales</a></li>
                        <li><a href="/privacy-policy" className="">Politique de confidentialité</a></li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
        
    </footer>
    
    
}

export default Footer