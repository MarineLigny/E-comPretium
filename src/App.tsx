//import { useState } from 'react'
//import './App.css'
//import { MapPin } from 'lucide-react';
//import CardProduct from './components/CardProduct';
import Banner from './components/Banner';
import ProductsContainer from './components/ProductsContainer';
//import { Link } from 'react-router-dom';


function App() {

  return (
    
    <div>
      <main className='sections'>
        <Banner />
        <ProductsContainer />
      </main>
    </div>
    
  )
}

export default App;
