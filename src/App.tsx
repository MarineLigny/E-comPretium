//ici je pre créé mes components puis je les envoies dans un autre fichier .tsx et je les appels ici 

import { useState, useRef, useEffect } from 'react';
import Banner from './components/Banner';
import CategoriesContainer from './components/Categories';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Posts from './components/Posts';
import ProductsContainer from './components/ProductsContainer';
import Promotions from './components/Promotions';
import SliderProducts from './components/SliderProducts';


function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const searchContainerRef = useRef<HTMLElement>(null);

  // Gérer le clic à l'extérieur pour fermer la barre de recherche
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchVisible]);

  // Gérer la classe has-menu sur le body
  useEffect(() => {
    if (isMobileMenuVisible) {
      document.body.classList.add('has-menu');
    } else {
      document.body.classList.remove('has-menu');
    }

    return () => {
      document.body.classList.remove('has-menu');
    };
  }, [isMobileMenuVisible]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
  };

  return (
    <div>

      <Header onSearchToggle={toggleSearch} onMobileMenuToggle={toggleMobileMenu} />
      
      {/* Barre de recherche mobile conditionnelle */}
      <header className="Navbar container" ref={searchContainerRef}>        
        {isSearchVisible && (
          <form action="" className='navbar-search'>
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
        )}
      </header>

      <main className='sections'>
        <Banner />
        <CategoriesContainer />
        <SliderProducts />
        <ProductsContainer />
        <Posts />
        <Promotions />
      </main>

      <MobileMenu isVisible={isMobileMenuVisible} onClose={closeMobileMenu} />

    </div>
  )
}

export default App;
