import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const published = searchParams.get("published") === "true"
  const limit = searchParams.get("limit")

  try {
    const posts = await prisma.post.findMany({
      where: published ? { isPublished: true } : undefined,
      take: limit ? parseInt(limit, 10) : undefined,
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(posts)
  } catch {
    return NextResponse.json([])
  }
}
