import {useContext, useState} from "react";
import { 
    GetProductRequest, 
    DeleteProductRequest, 
    CreateProductRequest,
    ShowProductRequest,
    UpdateProductRequest } from '../api/products.api'
import {
    LoginRequest,
    RegisterRequest } from '../api/user.api'
import { AppContext } from "./AppContext";


//Para no tener que importar ambos en cada pagina que me encuentre
//haré un hook que los una.
export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp debería estar dentro de AppContextProvider')
    }
    return context 
}

//agrupa todos los contextos
export const AppContextProvider = ({children}) => {

    const [products, setProducts] = useState([])

    //PRODUCTOS----------------------------

    //mostrar productos
    async function loadProducts() {
        const response = await GetProductRequest()
        setProducts(response.data)
    }
    //eliminar producto
    const deleteProduct = async (product_id) => {
        try {
          const response = await DeleteProductRequest(product_id);
          setProducts(products.filter(product => product.product_id !== product_id))
        } catch (error) {
          console.error(error);
        }  
    };
    //crear un producto
    const createProduct = async (product) => {
        try {
            await CreateProductRequest(product)
        } catch (error) {
            console.error(error) 
        }
    }
    //mostrar un producto
    const showProduct = async (product_id) => {
        try {
          const response = await ShowProductRequest(product_id);  
          return response.data
        } catch (error) {
            console.error(error)
        }
    }
    //actualizar un producto
    const updateProduct = async (product_id, newFields) => {
        try {
            const response = await UpdateProductRequest(product_id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    //Login------------------------------
    const loginUser = async (user) => {
        try {
            await LoginRequest(user)
        } catch (error) {
            console.error(error) 
        }
    }

    const registerUser = async (user) => {
        try {
            await RegisterRequest(user)
        } catch (error) {
            console.error(error) 
        }
    }


    return (
    <AppContext.Provider value={
        {products, 
        loadProducts, 
        deleteProduct, 
        createProduct, 
        showProduct, 
        updateProduct,
        loginUser,
        registerUser,
        }}>
        {children}
    </AppContext.Provider>
    )
}