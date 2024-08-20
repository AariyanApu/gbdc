'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Dashboard from '@/components/dashboard/Dashboard'

export default function Dasboard() {
  const { data: session }: any = useSession()

  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center">
      {session?.user?.isAdmin === true ? (
        <Dashboard />
      ) : (
        <div className="mx-auto flex flex-col gap-4">
          <div className="mt-5 text-2xl text-red-500">
            Please login with Admin Email
          </div>
          <button
            onClick={() => signOut()}
            className="mt-5 rounded-md border border-red-400 px-4 py-2 "
          >
            Logout from this Email
          </button>
          <button
            onClick={() => signIn()}
            className="rounded-md border border-sky-400 px-4 py-2"
          >
            Login with another Email
          </button>
        </div>
      )}
    </div>
  )
}
