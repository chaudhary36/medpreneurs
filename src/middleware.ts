import { NextResponse, NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const token = await getToken({req: request})
    // console.log('Token middleware: ' , token)
    const url = request.nextUrl

    if(token && 
        (
            url.pathname.startsWith('/sign-in') 
        )
    ){
        return NextResponse.redirect(new URL(`/` , request.url))
    }

    // nya tarika hai 

   


   if (!token && 
    url.pathname.startsWith(`/anuj`) ||
    url.pathname.startsWith(`/kaish`) ||
    url.pathname.startsWith(`/krishna`) ||
    url.pathname.startsWith(`/amit`) 

) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

   return NextResponse.next()

}
 
export const config = {
  matcher: [
    '/sign-in',
    '/',
    '/:path*',
],
};