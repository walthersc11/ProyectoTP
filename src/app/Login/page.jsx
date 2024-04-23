import Navegation from "@/components/Navegation"; 
import React from 'react';
import Image from "next/image";
import {Input} from "@nextui-org/react";

export default function Login(){
    return (
                
        <section className="flex justify-center justify-items-center text-center">
            <div className="flex-col bg-slate-800 border border-slate-400 rounded-md m-16 p-16 shadow-lg
            backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="font-poppins font-bold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">Login</h1>
                <div className="flex-col p-3 gap-2" >
                    <h3 className="text-left text-white font-semibold">Correo</h3> 
                    <div className="flex bg-white rounded-lg p-3 gap-3">
                        <Image src="/email.svg" width={19} height={19}/>
                        <input type="email" placeholder="Ingresar Correo"                        
                        ></input>
                    </div>
                </div>
                <div className="flex-col p-3 gap-2">
                    <h3 className="text-left text-white font-semibold">Contraseña</h3> 
                    <div className="flex bg-white rounded-lg p-3 gap-3">
                        <Image src="/lock.svg" width={19} height={19}/>
                        <input type="password" placeholder="Ingresar Contraseña"                        
                        ></input>
                    </div>
                </div>
                <button className='text-[20px] shadow-lg font-bold h-12 w-full text-slate-50 my-6 
                rounded-full bg-teal-400'>Ingresar</button>
                <div className="flex p-3 justify-center">                    
                    <a href="/Recuperar" className="underline">¿Olvidaste tu contraseña?</a>
                </div>

            </div>
        </section>       

    );
}
