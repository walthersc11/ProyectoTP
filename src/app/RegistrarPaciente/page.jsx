'use client'
import React, { useState } from 'react';
import {Input} from "@nextui-org/react";

export default function RegistrarPaciente () {
    const [values, setValues] =useState({
        email:'',
        password:'',
        confirmpassword: '',
    })

    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const [errors, setErrors] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({ ...values, [name] : value })
    }

    const handleSubmit  = (e) => {
        e.preventDefault()
        const validationErrors= {}
        
        if(!values.email.trim()){
            validationErrors.email = "Se requiere ingresar correo "
        }else if(!regex.test(values.email)){
            validationErrors.email = "Correo no valido"
        }
        
        if(!values.password.trim()){
            validationErrors.password = "Se requiere ingresar contraseña"
        }else if(values.password.length <6){
            validationErrors.email = "Contraseña debe ser mayor a 6 digitos"
        }


        if(values.confirmpassword!==values.password){
            validationErrors.confirmpassword = "Contraseña no es igual"
        }



        setErrors(validationErrors)     


    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-col bg-slate-800 border border-slate-400 rounded-md m-16 p-8 shadow-lg
                backdrop-filter backdrop-blur-sm bg-opacity-30 relative space-y-12">

                <div className="px-16 py-16">
                    <h1 className="text-[30px] font-bold leading-7 text-white">Regístrate como Paciente</h1>
                    <p className="mt-1 text-sm leading-6 font-semibold text-teal-400">Por favor introducir sus datos personales </p>

                    <div className="flex justify-center items-center mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                                Nombres
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                            Apellidos
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                        </div>
                        
                        <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                            Telefono
                        </label>
                        <div className="mt-2">
                            <input
                            type="tel"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="Age" className="block text-sm font-medium leading-6 text-white">
                            Edad
                        </label>
                        <div className="mt-2">
                            <input
                            type="number"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="birth-date" className="block text-sm font-medium leading-6 text-white">
                            Fecha de Nacimiento
                        </label>
                        <div className="mt-2">
                            <input
                            type="date"
                            name="birth-date"
                            id="birth-date"
                            autoComplete="birth-date"
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="student-code" className="block text-sm font-medium leading-6 text-white">
                            Codigo de Estudiante
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="student-code"
                            id="student-code"
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="semester" className="block text-sm font-medium leading-6 text-white">
                            Ciclo actual
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="semester"
                            id="semester"
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                        <label htmlFor="mayor" className="block text-sm font-medium leading-6 text-white">
                            Carrera
                        </label>
                        <div className="mt-2">
                            <select
                            id="mayor"
                            name="mayor"
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 p-3"
                            >
                            <option>Ingeniería de Sistema de Información</option>
                            <option>Ingeniería de Software</option>
                            <option>Ciencias de la computación</option>
                            </select>
                        </div>
                        </div>
                        
                        <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            Correo
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={handleChange}
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                            {errors.email && <p className="text-red-400 text-left text-[13px]">{errors.email}</p>}
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                            Contraseña
                        </label>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            onChange={handleChange}
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                            {errors.password && <p className="text-red-400 text-left text-[13px]">{errors.password}</p>}
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                            Confirmar Contraseña
                        </label>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            onChange={handleChange}
                            className="font-sans block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                            {errors.confirmpassword && <p className="text-red-400 text-left text-[13px]">{errors.confirmpassword}</p>}
                        </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-3">

                            <div className="mt-2 font-bold">
                            <button className="font-sans text-white bg-teal-500 w-full rounded-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 p-3">
                                <a href='/'>Registrar</a>
                            </button>
                            </div>

                        </div>
                        
                    </div>
                </div>

            </div>

        </form>
    )
}
