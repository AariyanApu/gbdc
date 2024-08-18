'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { UploadResult } from '@/types/randomTypes'
import { mutate } from 'swr'
import { validationSchema } from '@/libs/validationSchema'

export default function AddAchievement() {
  const [imgUrl, setImgUrl] = useState(' ')

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true)

    try {
      await fetch('/api/achievements', {
        method: 'POST',
        body: JSON.stringify({
          title: values.title,
          imgUrl: values.imgUrl,
        }),
      })
      resetForm()
      setIsSubmitting(false)

      toast.success('Achievement Image Added Successfully')
    } catch (error) {
      console.error('Error Posting Image', error)
    } finally {
      mutate('/api/achievements')
    }
  }

  const handleUpload = (result: UploadResult) => {
    setImgUrl(result.info.public_id)
  }
  return (
    <Formik
      initialValues={{
        title: '',
        imgUrl: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue }) => (
        <Form className=" flex w-96 flex-col items-center justify-center gap-4 rounded-md border border-sky-400 p-4">
          <h1 className="text-3xl ">Add Achivments</h1>
          <Field
            name="title"
            placeholder="Enter Image Title...."
            className="mt-4 rounded-md bg-gray-200 px-4 py-2 text-black "
          />
          <ErrorMessage name="title" component="div" className="text-red-500" />

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

          <button
            type="submit"
            className="rounded-md bg-sky-400 px-4 py-2"
            disabled={isSubmitting}
          >
            Submit Achivments
          </button>
        </Form>
      )}
    </Formik>
  )
}
