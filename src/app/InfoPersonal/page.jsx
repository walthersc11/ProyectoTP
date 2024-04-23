'use client'
import React from "react";
import {Input,Se} from "@nextui-org/react";
import { useState } from "react";
import { data } from "autoprefixer";


export default function InfoPersonal() {
const opciones=[
    {value:1,label:"Ingeniería de Sistema de Información"},
    {value:2,label:"Ingeniería de Software"},
    {value:3,label:"Ciencias de la computación"},
];
const [data,setdata] = useState({
    nombre:"",
    apellido:"",
    NumTelefono:0,
    Edad:0,
    Correo: "",
    CodEstudiante:"",
    CodCarrera:0,
    FechNacimiento:"",
    Estado:true
});



const handleChange = (e) =>{
    setdata({
        ...data,
        [e.target.name]:e.target.value
    });
};

const handleChangeSelect= (e)=>{
    const {value}=e.target
    console.log(value)
        setdata({
            ...data,
            [e.target.name]:parseInt(value)
        });

};

const handleSumit = (e) => {
    e.preventDefault()
    console.log(data)
};


  return (            
    <form
    onSubmit={handleSumit}>
        
        <div className="space-y-12 bg-white rounded-3xl my-16">

            <div className="border-b border-gray-900/10 px-24 py-16">
                <h1 className="text-xl font-bold leading-7 text-gray-900">Información Personal</h1>
                <p className="mt-1 text-sm leading-6 text-gray-600">Por favor introducir sus datos personales </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombres
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="nombre"
                            id="first-name"
                            autoComplete="given-name"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            onChange={handleChange}
                           />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Apellidos
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="apellido"
                        id="last-name"
                        autoComplete="family-name"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>
                    
                    <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Telefono
                    </label>
                    <div className="mt-2">
                        <input
                        type="tel"
                        name="NumTelefono"
                        id="city"
                        autoComplete="address-level2"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="Age" className="block text-sm font-medium leading-6 text-gray-900">
                        Edad
                    </label>
                    <div className="m-2">
                        <input
                        type="number"
                        name="Edad"
                        id="region"
                        autoComplete="address-level1"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="birth-date" className="block text-sm font-medium leading-6 text-gray-900">
                        Fecha de Nacimiento
                    </label>
                    <div className="mt-2">
                        <input
                        type="date"
                        name="FechNacimiento"
                        id="birth-date"
                        autoComplete="birth-date"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="student-code" className="block text-sm font-medium leading-6 text-gray-900">
                        Codigo de Estudiante
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="CodEstudiante"
                        id="student-code"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="semester" className="block text-sm font-medium leading-6 text-gray-900">
                        Ciclo actual
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="semester"
                        id="semester"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>
                    
                    <div className="sm:col-span-3">
                    <label htmlFor="mayor" className="block text-sm font-medium leading-6 text-gray-900">
                        Carrera
                    </label>
                    <div className="mt-2">
                        <select
                        id="mayor"
                        name="CodCarrera"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 p-3"
                      onChange={handleChangeSelect}
                      >
                        <option value=''>Seleccion una carrera</option>
                        {opciones.map((option,index)=>(
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                        </select>
                    </div>
                    </div>
                    
                    <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Correo
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="Correo"
                        type="email"
                        autoComplete="email"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-4">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-2">

                        <div className="mt-2 ">
                        <button className="font-sans bg-gray-100 w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 p-3">
                            Cancelar
                        </button>
                        </div>

                    </div>

                    <div className="sm:col-span-2 sm:col-start-4">

                        <div className="mt-2 font-bold">
                        <button className="font-sans text-white bg-violet-500 w-full rounded-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 p-3">
                            Modificar
                        </button>
                        </div>

                    </div>
                    
                </div>
            </div>

        </div>

    </form>
    
  )
}