import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    if (url.pathname.includes(' ')) {
        url.pathname = url.pathname.split(' ').join('%20');
        return NextResponse.redirect(url);
    }
}
