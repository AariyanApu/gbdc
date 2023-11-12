// 'use client'
// import AddAchievement from '@/components/AddAchievement'
// import AddActivity from '@/components/AddActivity'
// import AddSingleBlog from '@/components/AddSingleBlog'

// export default function Dasboard() {
//   return (
//     <div className="mt-4 flex flex-col gap-y-4">
//       <AddSingleBlog />
//       <div className="flex flex-row items-center justify-center gap-x-6">
//         <AddAchievement />
//         <AddActivity />
//       </div>
//     </div>
//   )
// }

'use client'
import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

interface imgUrl {
  imgUrl: string
}
export default function Dasboard() {
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
    <div className="mt-4 flex flex-col gap-y-4">
      {/*Single Blog  */}
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

      <div className="flex flex-row items-center justify-center gap-x-6"></div>
    </div>
  )
}
