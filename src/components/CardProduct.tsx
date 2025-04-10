//ici il s'agit de la mise en page pour un seul article en vente qui sera dupliqué dans ProductsContainer

import { MapPin } from 'lucide-react';

function CardProduct() {

  return (
      <article className="product-card">
          <img 
          className="product-card-image" 
          src="/images/shoes-thumb.jpg"
          srcSet='/images/shoes-thumb.jpg 161w, /images/shoes-thumb-desktop.jpg 338w'
          sizes='(max-width:700px) 161px, 338px'
          alt="" 
          width="161" 
          height="124" 
          />
          <div className="location">
            <MapPin />
            Montpellier, 34000
          </div>
          <div className="product-card_body">
            <a rel="stylesheet" href="product.html" className='product-card_title'> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </a>
            <div className='product-card_price'>
              15.00€
            </div>
          </div>
          <button 
          className='btn-like'
          type='button'
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
      
      </article>
  )
}
export default CardProduct;


