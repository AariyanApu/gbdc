'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { mutate } from 'swr'

import { UploadResult } from '@/types/randomTypes'
import AddImageComponent from './AddImageComponent'

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
    <AddImageComponent
      imgUrl={imgUrl}
      handleSubmit={handleSubmit}
      handleUpload={handleUpload}
      isSubmitting={isSubmitting}
      titleOfComponent="Donor"
    />
  )
}
