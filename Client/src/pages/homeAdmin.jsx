import React, {useEffect} from 'react'
import HeaderAdmin from '../components/headerAdmin.jsx'
import ProductCard from "../components/productsCard.jsx";
import {useApp} from "../context/AppProvider"

export function HomeAdmin(){

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
      <HeaderAdmin/>
      <h1>Productos</h1>
      {renderMain()}
    </div>
  )
}
