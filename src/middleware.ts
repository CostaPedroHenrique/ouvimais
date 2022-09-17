import {NextFetchEvent, NextRequest, NextResponse} from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent){
  const {hostname, pathname} = req.nextUrl
  // console.log(req.nextUrl);
  

  let slug = hostname
  if(hostname.indexOf('.reciclaseletiva.com.br' || '.local')){
    slug = hostname.split('.')[0]
  }

  if(hostname==='localhost'){
    slug = 'meutenant'
  }
  
  return NextResponse.rewrite(new URL('/'+slug+pathname, req.url))
}
export const config = {
  matcher: ['/public/:path'],
}