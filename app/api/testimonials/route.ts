import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  try {
    const testimonials = await prisma.testimonial.findMany({
      where: {
        isApproved: true,
        ...(category ? { category: category as never } : {}),
      },
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(testimonials)
  } catch {
    return NextResponse.json([])
  }
}
