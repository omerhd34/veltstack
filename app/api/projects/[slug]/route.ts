import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params

  try {
    const project = await prisma.project.findUnique({
      where: { slug },
      include: { technologies: true },
    })
    if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 })
    return NextResponse.json(project)
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
