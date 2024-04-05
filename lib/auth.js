import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials"
import prisma from "./prisma"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/login'
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "yourname@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    return null;
                }

                const existingUser = await prisma.employee.findUnique({
                    where: {email:credentials?.email}
                });
                if(!existingUser){
                    return null
                }
                const passwordMatch = await compare(credentials.password,existingUser.password);
                if(!passwordMatch){
                    return null
                }
                return {
                    id: existingUser.id,
                    username: existingUser.username,
                    email: existingUser.email,
                }
            }
        })
    ]
}