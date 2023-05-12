import express from "express";
import cors from "cors";
import {PORT} from './config.js'

import productsRoutes from './Routes/products.routes.js'

const app = express();

//Middleware 
app.use(cors());
app.use(express.json());

//Rutas
app.use(productsRoutes);

app.listen(PORT)
console.log('server listening on port', PORT)