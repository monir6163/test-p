/* eslint-disable no-unused-vars */
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { authKey } from './constant/authKey';
import { CustomJwtPayload } from './types/common.types';

const authRoute = ['/login'];
const privateRoute = ['/dashboard'];

export async function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(authKey)?.value;

  //protect auth and private route
  if (!accessToken) {
    if (authRoute.includes(pathname)) {
      return NextResponse.next();
    } else if (privateRoute.includes(pathname)) {
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  let decodedData = null;

  try {
    if (accessToken) {
      decodedData = jwtDecode(accessToken);
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const { email, role } = decodedData as CustomJwtPayload;

  if (accessToken && authRoute.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (accessToken && privateRoute.includes(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};
