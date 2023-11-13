import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  try {
    const posts = await prisma.post.findMany()

    return new NextResponse(JSON.stringify(posts))
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
