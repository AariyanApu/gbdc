'use client'
import { Editor } from '@tinymce/tinymce-react'
import { useRef, useState } from 'react'

export default function TextEditor({
  input,
  setInput,
  height,
}: {
  height: number
  input: any
  setInput: any
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const editorRef = useRef(null)

  const log = () => {
    if (editorRef.current) {
      setIsSubmitting(true)
      setInput({ ...input, desc: (editorRef.current as any).getContent() })
      ;(editorRef.current as any).setContent('') // Clear the editor content
      setIsSubmitting(false)
    }
  }

  const apikey = process.env.NEXT_PUBLIC_EDITOR_API_KEY
  return (
    <>
      <Editor
        apiKey={apikey}
        onInit={(evt, editor) => (editorRef.current = editor as any)}
        initialValue={''}
        init={{
          height: height,
          width: '100%',
          menubar: true,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button
        onClick={log}
        className="btn btn-outline btn-neutral disabled:opacity-20"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </>
  )
}
