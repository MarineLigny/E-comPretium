//ici je pre créé mes components puis je les envoies dans un autre fichier .tsx et je les appels ici 

import Banner from './components/Banner';
import CategoriesContainer from './components/Categories';
import Posts from './components/Posts';
import ProductsContainer from './components/ProductsContainer';
import SliderProducts from './components/SliderProducts';


function App() {
 
  return (
    
    <div>
      <main className='sections'>
        <Banner />
        <CategoriesContainer />
        <SliderProducts />
        <ProductsContainer />
        <Posts />
      </main>
    </div>
    
  )
}

export default App;
