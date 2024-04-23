import { NextResponse } from "next/server";
import {conn} from '@/libs/mysql'

export async function GET(){
    return NextResponse.json({mesage:"Hello World"})
}