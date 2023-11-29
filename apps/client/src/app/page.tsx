'use client'

import UserProfile from '@/components/user-profile'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Page() {
  const { data: session } = useSession()
  return (
    <main className="flex flex-col items-center justify-between mt-10 text-center">
      <h1 className="text-3xl md:text-4xl">An Example of AuthJs</h1>
      { session && session.user ? (
          <div className="mt-4">
            <UserProfile session={session} />
            <button onClick={ () => signOut() } className="text-sky-500 font-medium">Sign Out</button>
          </div>
        ) : (
          <div className="mt-4">No user found.  
            Please <button onClick={ () => signIn() } className="text-sky-500 font-medium">sign in</button> first.
          </div>
        )
      }
    </main>
  )
}
