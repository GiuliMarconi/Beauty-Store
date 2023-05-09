import { pool } from "../db.js"

//para traer todos los productos
export const getProducts = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM products"
        );
        res.json(result) 
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

//para traer uno de los productos
export const getProduct = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM products WHERE product_id = ?', [
            req.params.id
        ]);
    
        if(result.length === 0) {
            return res.status(404).json({message: 'El producto no fue encontrado'})
        }
    
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({message: error.message});    
    }
}

//para crear uno de los productos
export const createProduct = async (req, res) => {
    try {
        const { product_name, product_price, product_description, product_image, product_category, product_stock } = req.body;
        const [result] = await pool.query(
            "INSERT INTO products (product_name, product_price, product_description, product_image, product_category, product_stock) VALUES (?, ?, ?, ?, ?, ?)", 
            [
                product_name, 
                product_price, 
                product_description, 
                product_image, 
                product_category,   
                product_stock
            ]
        )
        console.log(result);
        res.json({
            id: result.insertId,
            product_name, 
            product_price, 
            product_description, 
            product_image, 
            product_category,   
            product_stock
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

//para editar uno de los productos
export const updateProduct = async (req, res) => {
    try {
        const result = await pool.query('UPDATE products SET ? WHERE product_id = ?', [
            req.body,
            req.params.id,
        ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

//para borrar uno de los productos
export const deleteProduct = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM products WHERE product_id = ?', [
            req.params.id
            ]);
        
            if(result.affectedRows === 0)
                return res.status(404).json({message: 'Producto no encontrado'})
        
            return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}