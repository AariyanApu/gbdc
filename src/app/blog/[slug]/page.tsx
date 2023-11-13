import { getDataNoStore, getDataNoStoreLocal } from '@/utils/getData'
import Image from 'next/image'

export default function SingleBlog({ params }: any) {
  const slug = params?.slug

  // const data = getDataNoStoreLocal(`posts/${slug}`)

  // console.log(data)
  return (
    <div className="mx-auto my-4 max-w-5xl px-4 lg:px-0">
      <Image
        src="/assets/about.webp"
        alt=""
        width={800}
        height={800}
        className=" w-full rounded object-cover object-center lg:h-96 lg:w-[700px]"
      />
      <div className="flex flex-col gap-y-4">
        <p className="mt-8">11/11/2023</p>
        <h1 className="text-2xl sm:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsum!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          quos! Temporibus molestiae a expedita veritatis veniam magni itaque
          ipsa repudiandae. Illum aliquam nobis ad ut.
          <br />
          quae debitis incidunt sunt reiciendis voluptatum odit modi possimus
          corporis tempore non eius harum! Quaerat hic labore blanditiis ipsum
          minima, officiis animi, obcaecati eaque eos earum unde ea repellat
          distinctio dolorem ab excepturi sapiente eum nisi quasi quos iusto
          inventore ut quam rem. Reprehenderit.
          <br />
          nisi quisquam. Exercitationem consectetur dolorum natus minima vel?
          Consequatur, explicabo! Quia ex voluptatem, repellat necessitatibus
          sequi molestiae voluptates impedit dicta dolores, dolor excepturi?
          Consectetur quaerat vitae placeat quos, odit omnis voluptas!
        </p>
      </div>
    </div>
  )
}
