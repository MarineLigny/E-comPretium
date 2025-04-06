{/*ici il s'agit du container des différents articles tendances, on ne s'occupe que du front, mais il faudra limiter à 6 articles par exemple puis cliquer sur voir tout pour voir le reste*/}

import CardProduct from "./CardProduct";

function ProductsContainer() {

    return (
        <section className='container section-trending'>
            <h2 className="section-title">
            Produits tendances
            </h2>
            <div className="products-grid">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
            <a href="/products.html" className='btn-bordered'>Voir tous les articles</a>
      </section>  
    )
  }
  export default ProductsContainer;