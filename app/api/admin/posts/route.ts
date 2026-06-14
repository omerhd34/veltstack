import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({ message: "Create post" }, { status: 501 })
}
