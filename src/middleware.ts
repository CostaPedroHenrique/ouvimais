import {NextFetchEvent, NextRequest, NextResponse} from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent){
  const { pathname} = req.nextUrl
  const hostname = req.headers.get('host') ?? ''
  if (pathname.indexOf("/static") >= 0 || hostname==='localhost:3001') {
    return NextResponse.next();
  }
  
  // console.log(hostname);
  // console.log(pathname);
  

  let slug = hostname
  if(hostname.indexOf('.reciclaseletiva.com.br') >= 0 || hostname.indexOf('.local') >=0){
    slug = hostname.split('.')[0]
    console.log({slug});
    
  }

  if(hostname==='localhost'){
    slug = 'meutenant'
  }
  console.log('/'+slug+pathname);
  
  return NextResponse.rewrite(new URL('/'+slug+pathname, req.url))
}
// export const config = {
//   matcher: ['/public/:path'],
// }