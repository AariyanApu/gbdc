import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'
import { getAuthSession } from '../auth/[...nextauth]/options'

export const GET = async () => {
  try {
    const anothers = await prisma.achievement.findMany()
    return new NextResponse(JSON.stringify(anothers), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

export const POST = async (req: Request) => {
  const session = await getAuthSession()

  if (!session) {
    return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }))
  }

  try {
    const body = await req.json()
    const another = await prisma.achievement.create({
      data: body,
    })

    return new NextResponse(JSON.stringify(another))
    // return new NextResponse(JSON.stringify({ status: 200 }), { status: 200 });
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({
        message: 'Something went wrong with fucking database!',
      }),
    )
  }
}
