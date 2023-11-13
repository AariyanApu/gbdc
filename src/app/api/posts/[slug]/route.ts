import prisma from '@/utils/connect'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

// Fetch single post
export const GET = async (
  req: NextApiRequest,
  { params }: { params: { slug: string } },
) => {
  const { slug } = params
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    })

    return new NextResponse(JSON.stringify(post))
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
