import express from "express";
import cors from "cors";
import {dirname, join} from "path"
import { fileURLToPath } from "url";
import {PORT} from './config.js'

import productsRoutes from './Routes/products.routes.js'
import authRoutes from './Routes/auth.routes.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

//Middleware 
app.use(cors());
app.use(express.json());

//Rutas
app.use(productsRoutes);
app.use(authRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT)
console.log('server listening on port', PORT)