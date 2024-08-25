'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { mutate } from 'swr'
import { UploadResult } from '@/types/randomTypes'
import AddImageComponent from './AddImageComponent'

export default function AddActivity() {
  const [imgUrl, setImgUrl] = useState(' ')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true)
    try {
      await fetch('/api/activities', {
        method: 'POST',
        body: JSON.stringify({
          title: values.title,
          imgUrl: values.imgUrl,
        }),
      })
      resetForm()
      toast.success('Activity Added Successfully')
    } catch (error) {
      console.error('Error adding activity:', error)
    } finally {
      setIsSubmitting(false)
      mutate('/api/activities')
    }
  }
  const handleUpload = (result: UploadResult) => {
    setImgUrl(result.info.public_id)
  }
  return (
    <AddImageComponent
      handleSubmit={handleSubmit}
      handleUpload={handleUpload}
      isSubmitting={isSubmitting}
      imgUrl={imgUrl}
      titleOfComponent="Activity"
    />
  )
}
