import Banner from './components/Banner';
import ProductsContainer from './components/ProductsContainer';



function App() {
  // biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
  {/*ici a modifier pour afficher autant de catégorie qu'il y aura de svg et son title*//*ici a modifier pour afficher autant de catégorie qu'il y aura de svg et son title*/}
  const categories = Array.from({ length: 6 });
  return (
    
    <div>
      <main className='sections'>
        <Banner />

        <section className="container categories">
          <div className="categories_text">
            <h2 className='section-title'>Catégories Recommandées</h2>
            <p className="text-body">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum ipsam labore</p>
          </div>

          <div className="categories-grid">
            {categories.map((_, index) => (
              <a 
                href="/#" 
                className='category-link'
                key={index}>
                  <span className="category-link_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shirt-icon lucide-shirt" aria-hidden="true">
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                    </svg>
                  </span>
                  Mode
              </a>
            ))}
          </div>
          
        </section>

        <ProductsContainer />
      </main>
    </div>
    
  )
}

export default App;
