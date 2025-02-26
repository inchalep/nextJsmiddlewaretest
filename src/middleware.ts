import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log('first:::')
  const name = 'test';
  if(!name){
    return NextResponse.json({message:'Unable to proceed'})
  }
  const response = NextResponse.next()
  response.headers.set('x-name','text');
  response.headers.set('x-phone','79654321');
  return response
}

export const config = {
  matcher: ['/','/about'],
}
