'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export default function AddDonor() {
  const [imgUrl, setImgUrl] = useState(' ')

  const router = useRouter()
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch('/api/donors', {
      method: 'POST',
      body: JSON.stringify({
        imgUrl,
      }),
    })
    setImgUrl('')
    router.push('/donors')
  }

  const handleUpload = (result: any) => {
    setImgUrl(result.info.public_id)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex w-96 flex-col items-center justify-center gap-4 rounded-md border border-sky-400 p-4"
    >
      <h1 className="text-3xl ">Add Donor Image</h1>
      <CldUploadButton
        uploadPreset="izet8iap"
        className=" rounded-md  bg-sky-600 px-4 py-2"
        onUpload={handleUpload}
      />

      <button type="submit" className="rounded-md bg-sky-400 px-4 py-2">
        Submit Donor Image
      </button>
    </form>
  )
}
