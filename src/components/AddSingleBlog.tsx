'use client'
import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

interface imgUrl {
  imgUrl: string
}
export default function AddSingleBlog() {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState<imgUrl>({ imgUrl: '' })
  const [desc, setDesc] = useState('')

  const router = useRouter()
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        imgUrl,
        desc,
      }),
    })
    setTitle('')
    setImgUrl({ imgUrl: '' })
    router.push('/blog')
  }

  const handleUpload = (result: any) => {
    setImgUrl(result.info.public_id)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-20 flex w-[800px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4"
    >
      <h1 className="text-3xl ">Add Blog</h1>

      <CldUploadButton
        uploadPreset="gbdc_blogs"
        className=" rounded-md  bg-sky-600 px-4 py-2"
        onUpload={handleUpload}
      />
      <input
        placeholder="Enter Blog Title...."
        className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <ReactQuill
        className="w-full rounded-md border border-sky-400 px-4 py-2"
        theme="bubble"
        value={desc}
        onChange={setDesc}
        placeholder="Tell your story..."
      />
      <button type="submit" className="rounded-md bg-sky-400 px-4 py-2">
        Submit Blog
      </button>
    </form>
  )
}
