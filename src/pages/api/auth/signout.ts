import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Clear token in cookies
  destroyCookie({ res }, '__Secure-next-auth.session-token', {path: '/' });

  // Redirect to the home page after sign-out
  res.writeHead(302, { Location: '/auth/login' });
  res.end();
}