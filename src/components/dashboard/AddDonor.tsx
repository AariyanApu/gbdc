'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { mutate } from 'swr'

import { UploadResult } from '@/types/randomTypes'
import { validationSchema } from '@/libs/validationSchema'

export default function AddDonor() {
  const [imgUrl, setImgUrl] = useState(' ')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true)

    try {
      await fetch('/api/donors', {
        method: 'POST',
        body: JSON.stringify({
          imgUrl: values.imgUrl,
        }),
      })
      toast.success('Donor Image Added Successfully')
      resetForm()
    } catch (error) {
      console.error('Error Posting Donor Image', error)
    } finally {
      setIsSubmitting(false)
      mutate('/api/donors')
    }
  }

  const handleUpload = (result: UploadResult) => {
    setImgUrl(result.info.public_id)
  }

  return (
    <Formik
      initialValues={{
        imgUrl: ' ',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue }) => (
        <Form className=" flex w-96 flex-col items-center justify-center gap-4 rounded-box  bg-base-200 p-4  py-8">
          <h1 className="text-3xl ">Add Donor Image</h1>
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

          <button
            type="submit"
            className="btn btn-outline btn-neutral disabled:opacity-20"
            disabled={isSubmitting}
          >
            Submit Donor Image
          </button>
        </Form>
      )}
    </Formik>
  )
}
