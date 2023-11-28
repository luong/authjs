import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import Twitter from 'next-auth/providers/twitter'

export const nextAuthConfig: NextAuthConfig = {
  secret: process.env.AUTHJS_SECRET,
  session: {
    strategy: 'jwt'
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    Twitter({
      clientId: process.env.X_ID,
      clientSecret: process.env.X_SECRET
    })
  ],
  callbacks: {
    authorized(params: any): boolean {
      return !!params.auth?.user
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(nextAuthConfig)