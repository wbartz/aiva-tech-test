import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL
export const { handlers, signIn, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@exemplo.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return
        // Chamada à URL externa para autenticação
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          },
        )
        if (!response.ok) return
        const data = await response.json()

        if (data && data.access_token) {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}auth/profile`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.access_token}`,
              },
            },
          )
          const user = await response.json()
          return user
        }
        return
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: VERCEL_DEPLOYMENT
          ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
          : undefined,
        secure: VERCEL_DEPLOYMENT,
      },
    },
  },
  session: {
    strategy: 'jwt',
  },
  debug: true,
  pages: {
    signIn: '/login',
    error: '/login',
  },
})
