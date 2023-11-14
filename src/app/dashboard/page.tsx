'use client'

import AddAchievement from '@/components/AddAchievement'
import AddActivity from '@/components/AddActivity'
import AddSingleBlog from '@/components/AddSingleBlog'
import DeletePost from '@/components/DeletePost'
import { useState } from 'react'

export default function Dasboard() {
  const [deleteButton, setDeleteButton] = useState(false)
  return (
    <div className="mx-auto mt-4 flex max-w-5xl flex-col gap-y-4">
      <button
        onClick={() => setDeleteButton((prevValue) => !prevValue)}
        className="ml-auto w-36 rounded-md border border-sky-400 px-4 py-2 font-semibold text-sky-400 hover:text-sky-500 hover:shadow-md"
      >
        {deleteButton ? 'Add Post' : 'Delete Post'}
      </button>
      {!deleteButton ? <AddSingleBlog /> : <DeletePost />}
      {!deleteButton && (
        <div className="flex flex-row items-center justify-center gap-x-6">
          <AddAchievement />
          <AddActivity />
        </div>
      )}
    </div>
  )
}
