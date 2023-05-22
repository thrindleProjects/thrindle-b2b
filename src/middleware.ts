export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    // '/app/dashboard',
    // '/app/wallet',
    // '/app/profile',
    // '/app/orders',
    // '/app/shopping-list',
    // '/app/recurrent-list',
    '/((?!api|_next/static|_next/image|favicon.ico|app/register|app/login|app/reset-password|app/verify-email|app/kyc|app/password-reset|assets|svg|images|favicon|index|fonts).*)(.+)',
  ],
  // matcher: [
  // '/((?!api|_next/static|_next/image|favicon.ico|app/register|app/login|app/reset-password|index|assets|fonts).*)',
  // ],
};
