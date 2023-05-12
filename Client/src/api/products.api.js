import axios from 'axios'

export const GetProductRequest = async () => 
    await axios.get('http://localhost:5000/products');

export const CreateProductRequest = async (product) => 
    await axios.post('http://localhost:5000/product', product)

export const DeleteProductRequest = async (product_id) => 
    await axios.delete(`http://localhost:5000/product/${product_id}`);

export const ShowProductRequest = async (product_id) => 
    await axios.get(`http://localhost:5000/product/${product_id}`);

export const UpdateProductRequest = async (product_id, newFields) => 
    await axios.put(`http://localhost:5000/product/${product_id}`, newFields);
