function Footer () {
    return (
        <footer className="footer">
          <div className="container">
            <a href="index.html" className='footer_logo'>Pretium</a>

            <div className="footer_section">
              <div className="footer_title">
                A propos de Pretium
              </div>
              <ul>
                <li><a href="/#">Qui sommes-nous ?</a></li>
                <li><a href="/#">Nous rejoindre</a></li>
                <li><a href="/#">Nos engagements</a></li>
                <li><a href="/#">Notre équipe</a></li>
                <li><a href="/#">Presse</a></li>
                <li><a href="/#">Status de nos services</a></li>
                <li><a href="/#">Espace annonceur</a></li>
              </ul>
            </div>

            <div className="footer_section">
              <div className="footer_title">
                Informations légales
              </div>
              <ul>
                <li><a href="/#">Conditions d'utilisation</a></li>
                <li><a href="/#">Conditions de ventes</a></li>
                <li><a href="/#">Affiliation</a></li>
                <li><a href="/#">Avis utilisateurs</a></li>
                <li><a href="/#">Code de conduite</a></li>
                <li><a href="/#">Accessibilité</a></li>
              </ul>
            </div>

            <div className="footer_section">
              <div className="footer_title">
                Nos solutions professionnelles
              </div>
              <ul>
                <li><a href="/#">Publicité</a></li>
                <li><a href="/#">Recrutement</a></li>
                <li><a href="/#">Professionnel immobilier</a></li>
              </ul>
            </div>

            <div className="footer_socials">
              <a href="/#" aria-label="Suivez-nous sur Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook" aria-hidden="true">
                  <path d="M18 2h4v4h-4zM14 22v-8h-4v-4h4v-3c0-2.21 1.79-4 4-4h3v4h-3c-.55 0-1 .45-1 1v3h4l-1 4h-3v8z"/>
                </svg>
              </a>
              <a href="/#" aria-label="Suivez-nous sur Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram" aria-hidden="true">   
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="/#" aria-label="Suivez-nous sur LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>

            <div className="footer_bottom">
              <div className="footer_copyright">
                &copy; 2024 Pretium - Tous droits réservés.
              </div>
              
              <ul className="footer_mentions_list">
                <li><a href="/#">Conditions d'utilisation</a></li>
                <li><a href="/#">Politique de données</a></li>
              </ul>
            </div>
          </div>

        </footer>
    );
}

export default Footer;