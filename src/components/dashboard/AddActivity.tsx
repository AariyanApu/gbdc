'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

interface imgUrl {
  imgUrl: string
}

export default function AddActivity() {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState(' ')
  const [tag, setTag] = useState('')

  const router = useRouter()
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch('/api/activities', {
      method: 'POST',
      body: JSON.stringify({
        title,
        imgUrl,
        tag,
      }),
    })
    setTitle('')
    setImgUrl('')
    router.push('/activities')
  }

  const handleUpload = (result: any) => {
    setImgUrl(result.info.public_id)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex w-96 flex-col items-center justify-center gap-4 rounded-md border border-sky-400 p-4"
    >
      <h1 className="text-3xl ">Add Single Activity Image</h1>
      <textarea
        placeholder="Enter Image Title...."
        className="mt-4 rounded-md bg-gray-200 px-4 py-2 text-black"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Tag"
        onChange={(e) => setTag(e.target.value)}
        className="rounded-md bg-gray-200 px-4 py-2 text-black"
      />

      <CldUploadButton
        uploadPreset="gbdc_activities"
        className=" rounded-md  bg-sky-600 px-4 py-2"
        onUpload={handleUpload}
      />

      <button type="submit" className="rounded-md bg-sky-400 px-4 py-2">
        Submit Activities
      </button>
    </form>
  )
}
