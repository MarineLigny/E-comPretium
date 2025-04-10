//ici je pre créé mes components puis je les envoies dans un autre fichier .tsx et je les appels ici 

import Banner from './components/Banner';
import CategoriesContainer from './components/Categories';
import Header from './components/Header';
import Posts from './components/Posts';
import ProductsContainer from './components/ProductsContainer';
import SliderProducts from './components/SliderProducts';


function App() {
 
  return (
    <div>

      <Header />

      <main className='sections'>
        <Banner />
        <CategoriesContainer />
        <SliderProducts />
        <ProductsContainer />
        <Posts />
      </main>

      <aside className='mobile-menu'>
        <button className="btn-icon" type='button'title='Fermer le menu'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x" aria-hidden="true">
          <path d="M18 6 6 18"/>
          <path d="m6 6 12 12"/>
          </svg>
        </button>

      </aside>

    </div> 
  )
}

export default App;
