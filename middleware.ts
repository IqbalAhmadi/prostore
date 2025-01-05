export { auth as middleware } from '@/auth';


//! If below is implemented, Vecel will not have an issue with the middleware. Otherwise, it will throw an error. Brad's is using only above code. 
// // middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// // Define routes that require authentication
// const protectedRoutes = ['/cart', '/shipping-address', '/sign-in', '/sign-up', '/product/*'];

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Skip middleware for public routes
//   if (protectedRoutes.some(route => pathname.startsWith(route))) {
//     const token = req.cookies.get('next-auth.session-token')?.value || 
//                   req.cookies.get('__Secure-next-auth.session-token')?.value;

//     if (!token) {
//       // Redirect to sign-in page if no token is found
//       return NextResponse.redirect(new URL('/sign-in', req.url));
//     }
//   }

//   return NextResponse.next();
// }

// // Specify the paths where the middleware should run
// export const config = {
//   matcher: ['/cart/:path*', '/shipping-address/:path*', '/product/:path*'],
// };

