import prisma from "../../../../lib/prisma";
import { NextResponse} from "next/server";
import { hash } from "bcryptjs";
import * as z from 'zod';

const userSchema = z
    .object({
        name: z.string().min(1,'Name is required').max(100),
        email: z.string().min(1,'Email is required').email('Invlid email'),
        password: z
            .string()
            .min(1,'Password is required')
            .min(8,'Password must have atleast 8 characters'),
    })

export async function POST(request){
    try{
        const body = await request.json();
        const {name,email,password} = userSchema.parse(body);

        //check is already exists
        const existingEmployeeByEmail = await prisma.employee.findUnique({
            where: {email:email}
        });
        if(existingEmployeeByEmail){
            return NextResponse.json({user:null, message:"Employee with this email exists"});
        }
        const hashesPassword = await hash(password,10);
        const newEmployee = await prisma.employee.create({
            data: {
                name:name,
                email:email,
                password: hashesPassword,
            },
        })
        return NextResponse.json({user: newEmployee, message:"Employee Created Successfully"})
    }catch(error){
        return NextResponse.json({error : error})
    }
}