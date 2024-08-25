'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { mutate } from 'swr'

import { UploadResult } from '@/types/randomTypes'
import AddImageComponent from './AddImageComponent'

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

      toast.success('Achievement Image Added Successfully')
    } catch (error) {
      console.error('Error Posting Image', error)
    } finally {
      setIsSubmitting(false)
      mutate('/api/achievements')
    }
  }

  const handleUpload = (result: UploadResult) => {
    setImgUrl(result.info.public_id)
  }
  return (
    <AddImageComponent
      handleSubmit={handleSubmit}
      handleUpload={handleUpload}
      imgUrl={imgUrl}
      isSubmitting={isSubmitting}
      titleOfComponent="Achievements"
    />
  )
}
