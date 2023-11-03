import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const users = await prisma.user.findMany()
    return new NextResponse(JSON.stringify(users))
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
