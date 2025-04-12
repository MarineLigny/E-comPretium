function Header() {
    return (
        <header className="Navbar container">
        <a href="menu.html" className="btn-icon" title="ouvrir le menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-center-icon lucide-align-center" aria-hidden="true">
          <path d="M17 12H7"/>
          <path d="M19 18H5"/>
          <path d="M21 6H3"/>
          </svg>
        </a>
        <a href="/index.html" className='mobile-menu_logo'>Pretium</a>
        <button className="btn-icon" type='button' title="rechercher">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        </button>
      </header>
    )
}

export default Header;