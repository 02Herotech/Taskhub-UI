import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {

const path = request.nextUrl.pathname;

const publicPath = path === '/auth' || path === '/auth/login'
// const notPublicPath = path === 'dashboard/customer' || path === 'dashboard/service-provider'

const token = request.cookies.get('next-auth.session-token')

if (!token && !publicPath){
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl))
    } 

if (token && publicPath){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
}

 

export const config = {
  matcher: [

    '/auth/login',
    '/auth',
    '/dashboard/customer',
    '/dashboard/service-provider'
  ],
}