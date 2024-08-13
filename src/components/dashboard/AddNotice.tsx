'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { mutate } from 'swr'

import { slugify } from '@/libs/slugify'
import TextEditor from '../Editor'
import { validationSchemaForNotice } from '@/libs/validationSchema'

export default function AddNotice() {
  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      await fetch('/api/notice', {
        method: 'POST',
        body: JSON.stringify({
          title: values.title,
          slug: slugify(values.slug),
          desc: values.desc,
        }),
      })
      resetForm()
      // Send Success message
    } catch (error) {
      console.error('Error Posting Notice', error)
    } finally {
      mutate('/api/notice')
    }
  }
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        title: '',
        slug: '',
        desc: '',
      }}
      validationSchema={validationSchemaForNotice}
    >
      {({ setFieldValue }) => (
        <Form className="mx-auto mb-20 flex w-[800px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4">
          <h1 className="text-3xl ">Add Notice</h1>

          <Field
            name="title"
            placeholder="Enter Notice Title...."
            className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
          />

          <ErrorMessage name="title" component="div" className="text-red-500" />

          <Field
            placeholder="Enter Notice Slug...."
            className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
            name="slug"
          />

          <ErrorMessage name="slug" component="div" className="text-red-500" />
          <TextEditor
            input={{ desc: '' }}
            setInput={(input: any) => setFieldValue('desc', input.desc)}
            height={300}
          />
          <ErrorMessage name="desc" component="div" className="text-red-500" />
        </Form>
      )}
    </Formik>
  )
}
