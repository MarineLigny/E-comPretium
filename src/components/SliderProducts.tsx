//ici c'est la barre de slide "continuez vos achats"
import { MapPin } from 'lucide-react';



function SliderProducts() {
     //ici a modifier pour afficher autant de catégorie qu'il y aura de svg et son title
    const shopping = Array.from({ length: 6 });

    return (
        <section className="container resume-shopping">
          <h2 className="section-title">Continuez vos achats</h2>
          <div className="slider-navigation">
            <button type='button' disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left" aria-hidden="true">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
            </button>
            <button type='button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right" aria-hidden="true">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="slider-products">
            {shopping.map((_, index) => (
              <article className="product-card-full" key={index}>

                  <picture className='product-card-full_image'>
                    <source 
                        width={428}
                        height={574}
                        media="(min-width:1100px)"
                        srcSet="https://picsum.photos/428/574"
                        />
                    <img src="https://picsum.photos/270/358" alt="" className='product-card-full_image'width={270} height={358}/>
                  </picture>


                <div className="location is-white is-bigger">
                  <MapPin />
                  Montpellier, 34000
                </div>
                <div className="product-card-full_body">
                  <a rel="stylesheet" href="product.html" className='product-card-full_title'> 
                    Lorem ipsum dolor sit amet lorem
                  </a>
                  <div className='product-card-full_price'>
                    15.00€
                  </div>
                </div>
                <button 
                className='btn-like'
                type='button'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </button>
              </article>

            ))}  
          </div>
        </section>
    )

}
export default SliderProducts;