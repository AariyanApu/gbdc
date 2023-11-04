import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const anothers = await prisma.another.findMany()
    return new NextResponse(JSON.stringify(anothers), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
