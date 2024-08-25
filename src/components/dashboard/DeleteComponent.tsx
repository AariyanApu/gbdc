import { FaXmark } from 'react-icons/fa6'
import CloudImage from '../CloudImage'

export default function DeleteComponent({ item, deletePost }: any) {
  return (
    <div className=" group relative mx-auto flex h-48 w-48  items-center justify-center  rounded-box  p-2 shadow">
      <CloudImage
        width={200}
        height={200}
        src={item.imgUrl}
        alt={"Donor's Image"}
        customStyles="h-full w-full rounded-box object-cover shadow-lg object-center"
      />
      <div className="absolute h-44 w-44 rounded-box bg-black opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-30" />
      <button
        onClick={() => deletePost(item.id)}
        className="btn btn-circle btn-outline  btn-error btn-sm absolute ml-1 opacity-0 group-hover:opacity-100"
      >
        <FaXmark className="h-6 w-6" />
      </button>
    </div>
  )
}
