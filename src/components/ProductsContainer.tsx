//ici c'est le container qui detient les différentes cardProduct

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
                <CardProduct />
            </div>
            <a href="/products.html" className='btn-bordered'>Voir tous les articles</a>
      </section>  
    )
  }
  export default ProductsContainer;