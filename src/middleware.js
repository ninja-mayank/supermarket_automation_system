'use client'
import { NextResponse } from 'next/server'
import { useState } from 'react';
 
export function middleware(request) {
    const token = request.cookies.get("next-auth.session-token")?.value;
    const loggedInUser = request.nextUrl.pathname === "/login"
    if(loggedInUser){
      if(token){
        if(typeof localStorage !== 'undefined'){
          const role = localStorage.getItem('role')
          if(role === manager) return NextResponse.redirect(new URL("/manager",request.url))
          else return NextResponse.redirect(new URL("/employee",request.url))
        }
      }
    }
}
 
export const config = {
  matcher: [
    "/login"
  ]
}