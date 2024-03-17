'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import 'react-quill/dist/quill.bubble.css'
import dynamic from 'next/dynamic'

const ReactQuill: any = dynamic(() => import('react-quill'), { ssr: false })

export default function AddNotice() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [slug, setSlug] = useState('')

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  const router = useRouter()
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch('/api/notice', {
      method: 'POST',
      body: JSON.stringify({
        title,
        slug,
        desc,
      }),
    })
    setTitle('')
    router.push('/notice')
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-20 flex w-[800px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4"
    >
      <h1 className="text-3xl ">Add Notice</h1>

      <input
        placeholder="Enter Notice Title...."
        className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <input
        placeholder="Enter Notice Slug...."
        className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
        onChange={(e) => setSlug(slugify(e.target.value))}
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
        Submit Notice
      </button>
    </form>
  )
}
