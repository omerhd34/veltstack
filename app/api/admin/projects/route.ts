import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({ message: "Create project" }, { status: 501 })
}
