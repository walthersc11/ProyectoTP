import Navegation from "@/components/Navegation"; 
import React from "react";

export default function ContactarPsicologo() {
  return (
    
    <div>
        
        <div className="space-y-12 pt-12 pb-12">

            <div className="border-b border-gray-900/10 p-16 ml-24 mr-24 bg-white rounded-lg">
                <h1 className="text-center font-bold">Psicologos Disponibles</h1>
                <div className="pt-6 pb-6 grid gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombre de Psicologo
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="font-sans block w-full bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-1">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Código
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


                    <div className="sm:col-span-1">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Sede
                        </label>
                        <div className="mt-2">
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="font-sans block bg-gray-300 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                            >
                            <option>San Isidro</option>
                            <option>San Miguel</option>
                            <option>Monterrico</option>
                            <option>Villa</option>
                            </select>
                        </div>
                    </div>                        
                
                </div>

                <table className=" pl-4 pr-4 w-full border-collapse border border-slate-400 text-center">
                  <thead>
                    <tr>
                      <th className="border border-slate-300" scope="col">Código</th>
                      <th className="border border-slate-300" scope="col">Nombre y apellido</th>
                      <th className="border border-slate-300" scope="col">Sede</th>
                      <th className="border border-slate-300" scope="col">Estado</th>
                      <th className="border border-slate-300" scope="col">Contacto</th>                 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td className="border border-slate-300">ps7364</td>
                        <td className="border border-slate-300">Alberto Peña</td>
                        <td className="border border-slate-300">San Isidro</td>
                        <td className="border border-slate-300 text-green-600 font-medium">Disponible</td>
                        <td className="border border-slate-300">
                            <button className='text-[14px] font-bold border-2 border-black px-2 my-1 text-black rounded-full bg-slate-300'>Contactar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300">ps7366</td>
                        <td className="border border-slate-300">Maria Fernandez</td>
                        <td className="border border-slate-300">San Miguel</td>
                        <td className="border border-slate-300 text-orange-500 font-medium">Ocupado</td>
                        <td className="border border-slate-300">
                            <button className='text-[14px] font-bold border-2 border-black px-2 my-1 text-black rounded-full bg-slate-300'>Contactar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300">ps7367</td>
                        <td className="border border-slate-300">Alejandra Rodriguez</td>
                        <td className="border border-slate-300">Monterico</td>
                        <td className="border border-slate-300 text-red-500 font-medium">Fuera de línea</td>
                        <td className="border border-slate-300">
                            <button className='text-[14px] font-bold border-2 border-black px-2 my-1 text-black rounded-full bg-slate-300'>Contactar</button>
                        </td>
                    </tr>
                  </tbody>
                </table>
                





            </div>

        

        </div>
        
    </div>

  )

}