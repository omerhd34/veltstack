import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    const services = await prisma.service.findMany({ orderBy: { displayOrder: "asc" } })
    return NextResponse.json(services)
  } catch {
    return NextResponse.json([])
  }
}
