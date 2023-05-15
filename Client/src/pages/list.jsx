import React, { useState, useEffect } from 'react'
import {Form, Formik} from 'formik'
import HeaderAdmin from '../components/headerAdmin.jsx'
import { useApp } from "../context/AppProvider";
import { useParams, useNavigate } from "react-router-dom";

export function List(){

  const {createProduct, showProduct, updateProduct} = useApp();
  const [products, setProduct] = useState({
    product_name: '',
    product_price: '',
    product_description: '',
    product_image: '',
    product_category: '',
    product_stock: ''
  })

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
          const product = await showProduct(params.id);
          setProduct({
            product_name: product.product_name,
            product_price: product.product_price,
            product_description: product.product_description,
            product_image: product.product_image,
            product_category: product.product_category,
            product_stock: product.product_stock,
          });
        }
    }
    loadProduct();
  }, [])

  return(
    <div>
      <HeaderAdmin/>

      <section>
        <div class="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600 font-serif ">{params.id ? 'Editando tu Producto' : 'Creando un nuevo Producto'}</h2>
          </div>
          <Formik 
            enableReinitialize={true}
            initialValues={products}
            onSubmit={async (values, actions) => {
              console.log(values)

              if(params.id) {
                await updateProduct(params.id, values)
                navigate('/Admin')
              } else {
                createProduct(values)
                navigate('/Admin')
              }
              setProduct({
                product_name: products.product_name,
                product_price: products.product_price,
                product_description: products.product_description,
                product_image: products.product_image,
                product_category: products.product_category,
                product_stock: products.product_stock,
              });
            }}
          >
            {/* handleChange para cambiar los estados de arriba segun lo que ponga en el formulario */}
            
          {({handleChange, handleSubmit, values, isSubmitting}) => (
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <Form onSubmit={handleSubmit} className="space-y-6" >
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                  <div className="mt-1">
                    <input 
                      type="text" 
                      name='product_name' 
                      placeholder='Escriba el nombre' 
                      onChange={handleChange} 
                      value={values.product_name}
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Precio</label>
                  <div className="mt-1">
                    <input 
                      type="number" 
                      name="product_price" 
                      min="0" 
                      onChange={handleChange}
                      value={values.product_price}
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Descripción del producto</label>
                  <div className="mt-1">
                    <textarea
                      type="textarea"  
                      name='product_description' 
                      rows='4' 
                      placeholder='Escriba una breve descripción' 
                      onChange={handleChange}
                      value={values.product_description}
                      className="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Imágen del Producto</label>
                  <div className="mt-1">
                    <input
                      type='url'
                      name='product_image' 
                      onChange={handleChange}
                      value={values.product_image}
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Categoría del Producto</label>
                  <div className="mt-1">
                    <input 
                      type="text" 
                      name='product_category' 
                      placeholder='Escriba la categoría' 
                      onChange={handleChange}
                      value={values.product_category}
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                    </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Stock de Productos</label>
                  <div className="mt-1">
                    <input 
                      type="number" 
                      name="product_stock" 
                      min="1" 
                      onChange={handleChange}
                      value={values.product_stock}
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <button type='submit' disabled= {isSubmitting} className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gray-600 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  {isSubmitting ? 'Guardando...' : 'Guardar'}
                </button>
              </Form>
            </div>
          </div>
          )}
          </Formik>
        </div>
      </section>
    </div>
  )
}