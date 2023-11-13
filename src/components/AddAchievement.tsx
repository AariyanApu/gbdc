'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

interface imgUrl {
  imgUrl: string
}
export default function AddAchievement() {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState(' ')

  const router = useRouter()
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch('/api/achievements', {
      method: 'POST',
      body: JSON.stringify({
        title,
        imgUrl,
      }),
    })
    setTitle('')
    setImgUrl('')
    router.push('/achievements')
  }

  const handleUpload = (result: any) => {
    setImgUrl(result.info.public_id)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex w-96 flex-col items-center justify-center gap-4 rounded-md border border-sky-400 p-4"
    >
      <h1 className="text-3xl ">Add Achivments</h1>
      <textarea
        placeholder="Enter Image Title...."
        className="mt-4 py-2 text-black"
        onChange={(e) => setTitle(e.target.value)}
      />

      <CldUploadButton
        uploadPreset="gbdc_achivements"
        className=" rounded-md  bg-sky-600 px-4 py-2"
        onUpload={handleUpload}
      />

      <button type="submit" className="rounded-md bg-sky-400 px-4 py-2">
        Submit Achivments
      </button>
    </form>
  )
}
