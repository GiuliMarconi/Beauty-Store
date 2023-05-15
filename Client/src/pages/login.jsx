import React, { useState, useEffect } from 'react'
import Header from "../components/header";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppProvider";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Cookies from "universal-cookie";


export function Login (){
    const {registerUser, loginUser} = useApp();
    const [users, setUsers] = useState({
        username: '',
        mail: '',
        password: '',
        Admin:''
    })

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            if (params.id) {
                const user = await loginUser(params.id);
                setUsers({
                    username: user.username,
                    mail: user.mail,
                    password: user.password,
                    Admin: user.Admin,
                });
            }
        }
        loadUser();
    }, [])

  return (
    <div>
        <Header/>
        <section>
            <div div class="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600 font-serif ">Iniciar Sesión</h2>
                </div>
                <Formik>
                    enableReinitialize={true}
                    initialValues={users}
                    onSubmit={async (values, actions) => {
                        console.log(values)

                        if(users.Admin === true) {
                            navigate('/Admin')
                        } else {
                            navigate('/')
                        }
                        setUsers({
                            username: users.username,
                            mail: users.mail,
                            password: users.password,
                            Admin: users.Admin,
                        });
                    }}
                    
                    validate={(values) => {
                        let errores = {};
                            if (!values.mail) {
                                errores.mail = "Ingrese su correo";
                            } else if (
                                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                values.mail
                                )
                            ) {
                                errores.mail =
                                "Su correo solo puede contener letras, números, puntos, guiones bajo y medio.";
                            }

                            if (!values.clave) {
                                errores.password = "Ingrese su contraseña";
                            } else if (!/^.{4,15}$/.test(values.password)) {
                                errores.password = "Su contraseña debe tener entre 4 a 12 dígitos.";
                        }
                        return errores;
                    }}

                    {({ handleChange, handleSubmit ,values }) => (
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                <Form onSubmit={handleSubmit} className="space-y-6" >
                                    <div>
                                        <input 
                                            type="text" 
                                            name='user_name' 
                                            placeholder='Escriba su correo'
                                            onChange={handleChange} 
                                            value={values.mail}
                                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
                                        />
                                    </div>

                                    <div>
                                        <input 
                                            type="password" 
                                            name='password' 
                                            placeholder='Escriba su contraseña'
                                            onChange={handleChange}  
                                            value={values.password}
                                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        />
                                        </div>
                                    <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gray-600 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        Iniciar Sesión
                                    </button>
                                    <div className='text-center text-blue'>
                                        <a href="">¿Aun no estas registrado? Registrate</a>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )};
                </Formik>
            </div>
        </section>
    </div>
  )
}
