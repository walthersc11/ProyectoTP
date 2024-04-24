import React from 'react'
import {Input} from "@nextui-org/react";

export default function InfoPsicologo () {
  return (
    <form>
        <div className="space-y-12  m-16">

            <div className="bg-neutral-50 rounded-3xl border-b border-gray-900/10 px-24 py-16">
                <h1 className="text-xl font-bold leading-7 text-gray-900">Información Personal del Psicólogo</h1>
                <p className="mt-1 text-sm leading-6 text-gray-600">Puede modificar su información personal aqui </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombres
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
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
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
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
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
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
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
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
                            name="birth-date"
                            id="birth-date"
                            autoComplete="birth-date"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                    </div>                    
                    
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Correo
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
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
                            placeholder="**********"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-2">

                        <div className="mt-2 ">
                        <button className="font-sans bg-gray-100 w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 p-3">
                            <a href="/">Cancelar</a>
                        </button>
                        </div>

                    </div>

                    <div className="sm:col-span-2 sm:col-start-4">

                        <div className="mt-2 font-bold">
                        <button className="font-sans text-white bg-violet-500 w-full rounded-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 p-3">
                            <a href="/">Modificar</a>
                        </button>
                        </div>

                    </div>
                    
                </div>
            </div>

        </div>

    </form>
  )
}
