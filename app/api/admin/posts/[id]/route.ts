import { NextResponse } from "next/server"

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function PUT(_request: Request, { params }: RouteParams) {
  const { id } = await params
  return NextResponse.json({ message: "Update post", id }, { status: 501 })
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { id } = await params
  return NextResponse.json({ message: "Delete post", id }, { status: 501 })
}
