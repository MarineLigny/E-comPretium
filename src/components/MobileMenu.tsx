interface MobileMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

function MobileMenu({ isVisible, onClose }: MobileMenuProps) {
    if (!isVisible) return null;

    return (
        <nav className='mobile-menu' aria-label="Menu mobile">
        <div className="mobile-menu_header">
          <button 
            type="button"
            onClick={onClose}
            className="btn-icon" 
            title='Fermer le menu' 
            aria-label="Fermer le menu de navigation mobile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x" aria-hidden="true">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
            </svg>
          </button>
          <a href="index.html" className='mobile-menu_logo'>Pretium</a>
        </div>
          <hr />
          <ul className="mobile-menu_nav">
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
          <a href="/#" className='btn-bordered'>Vendez vos objets</a>
          <a href="/#" className='btn-bordered-grey'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user" aria-hidden="true">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Se connecter
          </a>
      </nav>
    )
}

export default MobileMenu;