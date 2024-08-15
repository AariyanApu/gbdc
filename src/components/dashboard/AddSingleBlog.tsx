'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'
import { mutate } from 'swr'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import toast from 'react-hot-toast'

import { validationSchemaForPost } from '@/libs/validationSchema'
import { UploadResult } from '@/types/randomTypes'
import { slugify } from '@/libs/slugify'
import TextEditor from '../Editor'

export default function AddBlog() {
  // Make this state sepate for cloudinary
  const [imgUrl, setImgUrl] = useState('')

  // Handeler For Submit
  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: values.title,
          slug: slugify(values.slug),
          imgUrl: values.imgUrl,
          desc: values.desc,
        }),
      })
      // Clear Form
      resetForm()
      // Send Success Message
      toast.success('Blog Added Successfully')
    } catch (error) {
      console.error('Error Posting Blog', error)
    } finally {
      mutate('/api/posts')
    }
  }
  const handleUpload = (result: UploadResult) => {
    setImgUrl(result.info.public_id)
  }

  return (
    <Formik
      initialValues={{
        title: '',
        slug: '',
        imgUrl: '',
        desc: '',
      }}
      validationSchema={validationSchemaForPost}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="mx-auto mb-20 flex w-[800px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4">
          <h1 className="text-3xl ">Add Blog</h1>

          {/* You have to add your upload preset from Cloudinary */}
          <CldUploadButton
            uploadPreset="izet8iap"
            className=" rounded-md  bg-sky-600 px-4 py-2"
            onUpload={(result: any) => {
              const uploadResult = result as UploadResult
              setFieldValue('imgUrl', uploadResult.info.public_id)
              handleUpload(uploadResult)
            }}
          />

          <Field type="hidden" name="imgUrl" value={imgUrl} />
          <ErrorMessage
            name="imgUrl"
            component="div"
            className="text-red-500"
          />

          <Field
            name="title"
            placeholder="Enter Blog Title...."
            className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
          />
          <ErrorMessage name="title" component="div" className="text-red-500" />
          <Field
            name="slug"
            placeholder="Enter Slug"
            className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
          />
          <ErrorMessage name="slug" component="div" className="text-red-500" />

          {/* render from another file */}

          <TextEditor
            input={{ desc: '' }}
            setInput={(input: any) => setFieldValue('desc', input.desc)}
            height={500}
          />

          <ErrorMessage name="desc" component="div" className="text-red-500" />
        </Form>
      )}
    </Formik>
  )
}
