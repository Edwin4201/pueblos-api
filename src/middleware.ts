import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


export function middleware(req: NextRequest, res: NextResponse) {
  const token = req.headers.get("apikey");

  if (!token) {
    return NextResponse.json({ error: 'The apikey key is required' }, { status: 401 })
  }
  if (token !== process.env.NEXT_PUBLIC_TOKEN_SECRET) {
    return NextResponse.json({ error: 'apikey does not match' }, { status: 401 })
  }

  return NextResponse.next()

}
export const config = {
  matcher: '/api/:path*',
}