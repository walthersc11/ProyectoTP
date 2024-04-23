
import { NextResponse } from "next/server";
import {conn} from '@/libs/mysql'

export async function GET(){
    const result = await conn.query('select now()');
    console.log(result);
    
    return  NextResponse.json({ message: 'Hola mundo' }); 
}

export async function POST(request){
    const {nombre, apellido, NumTelefono, Edad, Correo, CodEstudiante,
    CodCarrera, FechNacimiento, Estado} = await request.json();

    const result = await conn.query("insert into estudiante set ?",{
    nombre,
    apellido,
    NumTelefono, 
    Edad, 
    Correo, 
    CodEstudiante,
    CodCarrera, 
    FechNacimiento, 
    Estado});

console.log(result)

    return NextResponse.json("Usuario Insertado")
}