import { User } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      picture?: string
    } & Omit<User, 'id'>
  }
}