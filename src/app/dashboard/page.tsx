'use client'

import AddAchievement from '@/components/dashboard/AddAchievement'
import AddActivity from '@/components/dashboard/AddActivity'
import AddSingleBlog from '@/components/dashboard/AddSingleBlog'
import AddActivityBanner from '@/components/dashboard/AddActivityBanner'
import DeletePost from '@/components/DeletePost'
import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Dasboard() {
  const { data: session }: any = useSession()
  const [deleteButton, setDeleteButton] = useState(false)
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center">
      {session?.user?.email === 'aariyanapu1@gmail.com' ? (
        <div className="mx-auto mt-4 flex max-w-5xl flex-col gap-y-4">
          <button
            onClick={() => setDeleteButton((prevValue) => !prevValue)}
            className="ml-auto w-36 rounded-md border border-sky-400 px-4 py-2 font-semibold text-sky-400 hover:text-sky-500 hover:shadow-md"
          >
            {deleteButton ? 'Add Post' : 'Delete Post'}
          </button>
          {!deleteButton ? <AddSingleBlog /> : <DeletePost />}
          {!deleteButton && (
            <div className="flex flex-row flex-wrap items-center justify-center gap-6">
              <AddActivity />
              <AddActivityBanner />
              <AddAchievement />
            </div>
          )}
        </div>
      ) : (
        <div className="mx-auto flex flex-col gap-4">
          <div className="mt-5 text-2xl text-red-500">
            Please login with Correct Email
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
            Login with Correct Email
          </button>
        </div>
      )}
    </div>
  )
}
