import express from "express";
import {PORT} from './config.js'

import productsRoutes from './Routes/products.routes.js'

const app = express();

app.use(express.json())

app.use(productsRoutes);

app.listen(PORT)
console.log('server listening on port', PORT)