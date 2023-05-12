import React from 'react'
import { useApp } from "../context/AppProvider";
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {

  const {deleteProduct} = useApp();
  const navigate = useNavigate();

  return (
    <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only"></h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <a href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.product_image}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.product_name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.product_description}</p>
                  <h4 className="mt-4 text-sm text-gray-700">{product.product_category}</h4>
                  <h2 className="mt-4 text-sm text-gray-700">{product.product_price}</h2>
                  
                  <button onClick={() => navigate(`/edit/${product.product_id}`)}>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Editar</span>
                  </button>

                  <button onClick={() => deleteProduct(product.product_id)} >
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Eliminar</span>
                  </button>
                </a>
            </div>
          </div>
        </div>
    </div>
  )
}