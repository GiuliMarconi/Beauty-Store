import React, {useState, useEffect} from 'react'
import {Drawer, List} from 'antd'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import {useApp} from "../context/AppProvider"
import ProductCard from '../components/productCard.jsx';
import { useParams} from "react-router-dom";

export function FlipCart() {
    const {showProduct} = useApp();
    const [isActive, setIsActive] = useState(false)

    const [products, setProduct] = useState(
        {
        product_name: '',
        product_price: '',
        product_description: '',
        product_image: '',
        product_category: '',
        product_stock: ''
      }
    )

    const params = useParams();

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
  
    return (
        <div className=''>
            <button onClick={() => setIsActive(true)}>
                <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
            </button>

            <Drawer onClose={() => setIsActive(false)} open= {isActive}>
                <h1>Hola</h1>
                <List dataSource={products} renderItem={(product, index) => ( 
                    <List.Item>
                        <List.Item.Meta title= {product.product_name}></List.Item.Meta>
                    </List.Item>
                )}>
                    
                </List>
            </Drawer>
        </div>
    )
}