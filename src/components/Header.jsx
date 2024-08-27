import "../assets/css/header.css" ;

const navLinks = [
    { href: '/', name: "Accueil" },
    { href: '/all-plants', name: "Tous les légumes" },
    { href: '/login', name: "Connexion" },
]

const navLinksConnected = [
    { href: '/', name: "Accueil" },
    { href: '/all-plants', name: "Tous les légumes" },
    { href: '/profile', name: "Mon espace" },
]

function Header() {
    return (
        <div className="header">
            <a href="/">
                <img 
                    src="img/logo-removebg-preview.png"
                    alt="Logo Planteo"
                    className="logo"
                ></img>
            </a>
            <nav>
                {navLinks.map( navLink => <a href={navLink.href} key = {navLink.name}>{navLink.name}</a>)}

                {/* Ajouter une condition pour afficher le menu suivant si un utilisateur est connecté: */}
                {/* {navLinksConnected.map( navLink => <a href={navLink.href} key = {navLink.name}>{navLink.name}</a>)} */}

            </nav>
            <input 
                type="search"
                placeholder="Rechercher un légume"
                className="searchBar"
            ></input>
        </div>
      
    )
  }
  
  export default Header