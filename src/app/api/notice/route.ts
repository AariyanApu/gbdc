import prisma from '@/db/connect'
import { NextResponse } from 'next/server'

// Fetch All Post
export const GET = async (req: Request) => {
  try {
    const posts = await prisma.notice.findMany()

    return new NextResponse(JSON.stringify(posts))
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

// Create New post
export const POST = async (req: Request) => {
  // const session = await getAuthSession();

  // if (!session) {
  //   return new NextResponse(
  //     JSON.stringify({ message: 'Not Authenticated!' }, { status: 401 })
  //   );
  // }

  try {
    const body = await req.json()
    const posts = await prisma.notice.create({
      data: body,
    })

    return new NextResponse(JSON.stringify(posts))
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
