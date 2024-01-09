import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {

const path = request.nextUrl.pathname;

const publicPath = path === '/auth/login' || path === '/auth'
const notPublicPath = (
  path === '/dashboard/customer' || 
  path === '/dashboard/customer/profile' ||
  path === '/dashboard/customer/complete-registration' ||
  path === '/dashboard/service-provider' ||
  path === '/dashboard/service-provider/profile' ||
  path === '/dashboard/service-provider/complete-registration'
  )

const token = request.cookies.get('__Secure-next-auth.session-token')

if (!token && notPublicPath){
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
    '/dashboard/customer/:path*',
    '/dashboard/service-provider/:path*'
  ],
}