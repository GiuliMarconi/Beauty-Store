import React, {useEffect} from 'react'
import HeaderAdmin from '../components/headerAdmin.jsx'
import {useApp} from "../context/AppProvider"
import ProductCardAdmin from '../components/productsCardAdmin.jsx';

export function HomeAdmin(){

  const {products, loadProducts} = useApp();

  useEffect(() => {
    loadProducts()
  }, [])

  function renderMain() {
    if (products.length === 0) return <h1>No hay productos aún</h1>

    return products.map(product => (<ProductCardAdmin product={product} key={product.product_id}/>))
  }

  return (
    <div>
      <HeaderAdmin/>
      <div className="container mx-auto py-4">
        <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4">Tus Productos</h1>
        </div>
        <div className= 'grid grid-cols-3 gap-4'>
          {renderMain()}
        </div>
      </div>
    </div>
  )
}
