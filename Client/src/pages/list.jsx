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

      <h1>{params.id ? 'Editando tu Producto' : 'Creando un nuevo Producto'}</h1>

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
          }
          setProduct({
            product_name: product.product_name,
            product_price: product.product_price,
            product_description: product.product_description,
            product_image: product.product_image,
            product_category: product.product_category,
            product_stock: product.product_stock,
          });
        }}
      >
        {/* handleChange para cambiar los estados de arriba segun lo que ponga en el formulario */}
        
      {({handleChange, handleSubmit, values, isSubmitting}) => (
        <Form onSubmit={handleSubmit} encType='multipart/form-data'>
          <label>Nombre del Producto</label>
          <input 
            type="text" 
            name='product_name' 
            placeholder='Escriba el nombre' 
            onChange={handleChange} 
            value={values.product_name}
          />

          <label>Precio</label>
          <input 
            type="number" 
            name="product_price" 
            min="0" 
            onChange={handleChange}
            value={values.product_price}
          />

          <label>Descripción del producto</label>
          <input 
            type="textarea"  
            name='product_description' 
            rows='4' 
            placeholder='Escriba una breve descripción' 
            onChange={handleChange}
            value={values.product_description} 
          />

          <label>Imágen del Producto</label>
          <input
            type='url'
            name='product_image' 
            onChange={handleChange}
            value={values.product_image}
          />

          <label>Categoría del Producto</label>
          <input 
            type="text" 
            name='product_category' 
            placeholder='Escriba la categoría' 
            onChange={handleChange}
            value={values.product_category}
          />

          <label>Stock de Productos</label>
          <input 
            type="number" 
            name="product_stock" 
            min="1" 
            onChange={handleChange}
            value={values.product_stock}
          />

          <button type='submit' disabled= {isSubmitting}>
            {isSubmitting ? 'Guardando...' : 'Guardar'}
          </button>
        </Form>
      )}
      </Formik>
    </div>
  )
}