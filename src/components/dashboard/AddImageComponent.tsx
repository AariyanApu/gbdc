import { validationSchema } from '@/libs/validationSchema'
import { UploadResult } from '@/types/randomTypes'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { CldUploadButton } from 'next-cloudinary'
export default function AddImageComponent({
  handleSubmit,
  handleUpload,
  isSubmitting,
  imgUrl,
  titleOfComponent,
}: any) {
  return (
    <Formik
      initialValues={{
        title: '',
        imgUrl: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className=" flex w-96 flex-col items-center justify-center gap-4 rounded-box bg-base-200  p-4">
          <h1 className="text-3xl ">Add {titleOfComponent}</h1>
          <Field
            name="title"
            placeholder="Enter Image Title...."
            className="input input-bordered mt-4 w-full "
          />

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
            Submit {titleOfComponent}
          </button>
        </Form>
      )}
    </Formik>
  )
}
