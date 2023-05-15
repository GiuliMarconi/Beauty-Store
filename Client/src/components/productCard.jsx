import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {

  const navigate = useNavigate();

  return (
    <div>
        <div className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-4">
            <h2 className="sr-only"></h2>
              <a href='' className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                      src={product.product_image}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.product_name}</h3>
                <p className="truncate mt-1 text-lg font-medium text-gray-900">{product.product_description}</p>
                <div className='grid grid-cols-2'>
                  <div>
                    <h4 className="mt-4 text-sm text-gray-700">{product.product_category}</h4>
                    <h2 className="mt-4 text-sm text-gray-700">{product.product_price}</h2>
                  </div>
                  <div className='mt-4'> 
                    <div class="inline-flex">
                      <button onClick={() => navigate()} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Ver más
                      </button>
                      <button onClick={() => navigate()} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div> 
              </a>
          </div>
        </div>
    </div>
  )
}