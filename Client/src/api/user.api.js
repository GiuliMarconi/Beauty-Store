import axios from 'axios'

export const LoginRequest = async (user) => 
    await axios.post('http://localhost:5000/login', user);

export const RegisterRequest = async (user) => 
    await axios.post('http://localhost:5000/register', user)