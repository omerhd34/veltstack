import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params

  try {
    const service = await prisma.service.findUnique({ where: { slug } })
    if (!service) return NextResponse.json({ error: "Not found" }, { status: 404 })
    return NextResponse.json(service)
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
