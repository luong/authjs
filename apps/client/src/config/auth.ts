import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import Twitter from 'next-auth/providers/twitter'
import Credentials from 'next-auth/providers/credentials'

export const nextAuthConfig: NextAuthConfig = {
  secret: process.env.AUTHJS_SECRET,
  session: {
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      name: 'Email And Password',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'john@gmail.com' },
        password: {  label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const response = await fetch(process.env.SERVER_ENDPOINT + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        if (!response.ok) {
          return null
        }
        const data = await response.json()
        return data.data
      }
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      
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
    async signIn({ user, account, profile, email, credentials }) {
      console.log(['signIn', user, account, profile, email, credentials])
      return true
    },
    async jwt({ token, user, account, profile }) {
      console.log(['jwt', token, user, account, profile])
      return token
    },
    authorized({ request, auth }): boolean {
      console.log(['authorized', auth])
      return !!auth?.user
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(nextAuthConfig)