import { Sequelize } from 'sequelize'

const newdb = new Sequelize('ecommerce', 'root', '',{

    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    user: 'root',
    password: '',
})

export default newdb;