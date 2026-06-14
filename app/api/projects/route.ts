import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured") === "true"

  try {
    const projects = await prisma.project.findMany({
      where: {
        ...(category ? { category: category as never } : {}),
        ...(featured ? { isFeatured: true } : {}),
      },
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(projects)
  } catch {
    return NextResponse.json([])
  }
}
