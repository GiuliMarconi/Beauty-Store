import  pool from "../db.js"
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'

dotenv.config();
process.env.TOKEN_SECRET;

export const createUser = async (req, res) => {
    try {
        const { username, mail, password} = req.body;
        const [result] = await pool.query(
        `INSERT INTO users (username, mail, password) VALUES (?, ?, ?)`, [
                username,
                mail,
                password
            ]
        )
        console.log(result);
        res.json({
            username,
            mail,
            password
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const ckeckUser = async (req, res) => {
    const {mail, password} = req.body;
    const userWithEmail= await userModel.findOne({where: {mail}}).catch(
        (error) => {
            console.log('Error', error)
        }
    )

    if (!userWithEmail)
        return res.status(400).json({message: 'El email o la contraseña no coinciden'})
    
    if (userWithEmail.password !== password)
    return res.status(400).json({message: 'El email o la contraseña no coinciden'})

    res.json({message: "Bienvenido"})
};




    
   



