import React, {useEffect} from 'react'
import Header from '../components/header.jsx'
import {useApp} from "../context/AppProvider"
import ProductCard from '../components/productCard.jsx';

export function Home(){
  const {products, loadProducts} = useApp();

  useEffect(() => {
    loadProducts()
  }, [])

  function renderMain() {
    if (products.length === 0) return <h1>No hay productos aún</h1>

    return products.map(product => (<ProductCard product={product} key={product.product_id}/>))
  }
  return (
    <div>
        <Header/>
        <div className= 'grid grid-cols-3 gap-4'>
          {renderMain()}
        </div>
    </div>
  )
}
