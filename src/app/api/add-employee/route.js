import { NextResponse } from "next/server"

export async function EMPLOYEE(request){
    const res = await request.json()
    return NextResponse.json({data:res})
}