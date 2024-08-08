import prisma from '@/db/connect'
import { NextResponse } from 'next/server'
import { getAuthSession } from '../auth/[...nextauth]/options'

export const GET = async () => {
  try {
    const activities = await prisma.activity.findMany()
    return new NextResponse(JSON.stringify(activities), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error Cant find soultions', {
      status: 500,
    })
  }
}
export const POST = async (req: Request) => {
  const session = await getAuthSession()

  if (!session) {
    return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }))
  }

  try {
    const body = await req.json()
    const activities = await prisma.activity.create({
      data: body,
    })

    return new NextResponse(JSON.stringify(activities))
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
