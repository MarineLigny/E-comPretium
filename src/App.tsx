//ici je pre créé mes components puis je les envoies dans un autre fichier .tsx et je les appels ici 

import Banner from './components/Banner';
import CategoriesContainer from './components/Categories';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Posts from './components/Posts';
import ProductsContainer from './components/ProductsContainer';
import SliderProducts from './components/SliderProducts';


function App() {

  return (
    <div>

      <Header />
      <header className="Navbar container">
        <form action="" className='navbar-search'>
          <input type="search" placeholder="Rechercher un produit, une marque..." aria-label="Rechercher un produit, une marque..." />
          <button type="submit" title='recherche'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </form>
      </header>

      <main className='sections'>
        <Banner />
        <CategoriesContainer />
        <SliderProducts />
        <ProductsContainer />
        <Posts />
      </main>

      <MobileMenu />

    </div>
  )
}

export default App;
