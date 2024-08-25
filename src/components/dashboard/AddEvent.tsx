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

export default function AddEvent() {
  // Make this state sepate for cloudinary
  const [imgUrl, setImgUrl] = useState('')

  // Handeler For Submit
  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      await fetch('/api/events', {
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
      toast.success('Event Added Successfully')
    } catch (error) {
      console.error('Error Posting Blog', error)
    } finally {
      mutate('/api/events')
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
        <Form className="mx-auto mb-2 flex w-[800px] flex-col items-start justify-start gap-4 rounded-box bg-base-200 p-4">
          <h1 className="text-3xl ">Add Event</h1>

          {/* You have to add your upload preset from Cloudinary */}
          <CldUploadButton
            uploadPreset="izet8iap"
            className=" btn btn-outline btn-neutral"
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
            className="input input-bordered mt-4 w-full "
          />
          <ErrorMessage name="title" component="div" className="text-red-500" />
          <Field
            name="slug"
            placeholder="Enter Slug"
            className="input input-bordered mt-4 w-full "
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
