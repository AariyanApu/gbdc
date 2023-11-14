import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

interface ExtendedPostUpdateInput {
  views: {
    increment: number
  }
}

// Fetch single post
export const GET = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const { slug } = params
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      } as ExtendedPostUpdateInput,
    })

    console.log('post', post)
    return new NextResponse(JSON.stringify(post))
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
