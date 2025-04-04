//import { useState } from 'react'
//import './App.css'
//import { MapPin } from 'lucide-react';
import CardProduct from './components/CardProduct';
//import { Link } from 'react-router-dom';


function App() {

  return (
    <div>
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
      
    </div>
  )
}

export default App;
