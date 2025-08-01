import {  NextResponse } from "next/server";

export function middleware(request){
    const {pathname} = request.nextUrl;
    const allowed = ['/Coming-Soon',];
    const isStatic = 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/favicon.ico') || 
    pathname.startsWith('/_images');

    if (allowed.includes(pathname)
    || isStatic
    ){
        return NextResponse.next();
    }
    //redirect everything to coming soon page
    const url = request.nextUrl.clone();
    url.pathname = '/Coming-Soon';
    return NextResponse.redirect(url);
     
}