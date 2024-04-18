import prisma from "../../../../lib/prisma";
import { NextResponse} from "next/server";
import { hash } from "bcryptjs";

export async function POST(request){
    try{
        const body = await request.json();
        const {name,price,quantity} = body;
        //check is already exists
        console.log(name,price,quantity)
        const newProduct = await prisma.product.create({
            data: {
                name:name,
                price:price,
                quantity:quantity
            },
        })
        return NextResponse.json({user: null, message:"Employee Created Successfully"})
    }catch(error){
        return NextResponse.json({error : error})
    }
}