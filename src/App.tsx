import Banner from './components/Banner';
import CategoriesContainer from './components/Categories';
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
      </main>
    </div>
    
  )
}

export default App;
