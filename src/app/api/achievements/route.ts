import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const achievements = await prisma.achievements.findMany()
    return new NextResponse(JSON.stringify(achievements), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
