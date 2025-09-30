interface HeaderProps {
  onSearchToggle: () => void;
  onMobileMenuToggle: () => void;
}

function Header({ onSearchToggle, onMobileMenuToggle }: HeaderProps) {
    return (
        <>
        {/* Header mobile (en dessous de 1100px) */}
        <header className="Navbar container mobile-header">
          <button 
            type="button"
            onClick={onMobileMenuToggle}
            className="btn-icon" 
            title="Ouvrir le menu" 
            aria-label="Ouvrir le menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-center-icon lucide-align-center" aria-hidden="true">
            <path d="M17 12H7"/>
            <path d="M19 18H5"/>
            <path d="M21 6H3"/>
            </svg>
          </button>
          
          <a href="/index.html" className='mobile-menu_logo'>Pretium</a>

          <button 
            type="button"
            onClick={onSearchToggle}
            className="btn-icon"  
            title="Rechercher" 
            aria-label="Rechercher"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          </button>
        </header>

        {/* Header desktop (au-dessus de 1100px) */}
        <header className="desktop-header container">
          {/* Première ligne - Logo, actions principales */}
          <div className="desktop-header_top">
            <a href="/index.html" className='desktop-logo'>Pretium</a>
            
            <div className="desktop-header_search">
              <form action="" className='navbar-search-desktop'>
                <input 
                  type="search" 
                  placeholder="Rechercher un produit, une marque..." 
                  aria-label="Rechercher un produit, une marque..."
                />
                <button type="submit" title='recherche'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="desktop-header_actions">
              <a href="/#" className='btn-bordered-small'>Vendez vos objets</a>
              <a href="/#" className='btn-user'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user" aria-hidden="true">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Se connecter
              </a>
            </div>
          </div>

          {/* Deuxième ligne - Navigation des catégories */}
          <nav className="desktop-header_nav" aria-label="Catégories principales">
            <ul>
              <li><a href="/#">Immobilier</a></li>
              <li><a href="/#">Mode</a></li>
              <li><a href="/#">Véhicules</a></li>
              <li><a href="/#">Locations</a></li>
              <li><a href="/#">Emploi</a></li>
              <li><a href="/#">Famille</a></li>
              <li><a href="/#">Electroniques</a></li>
              <li><a href="/#">Loisirs</a></li>
              <li><a href="/#">Jeux vidéos</a></li>
              <li><a href="/#">Autres</a></li>
            </ul>
          </nav>
        </header>
        </>
    )
}

export default Header;