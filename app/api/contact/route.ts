import { NextResponse } from "next/server"
import { z } from "zod"
import prisma from "@/lib/prisma"

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  servicePackage: z.string().min(1),
  serviceTier: z.string().min(1),
  budget: z.string().min(1),
  content: z.string().max(2000).default(""),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    await prisma.message.create({
      data: {
        ...data,
        subject: `İletişim formu - ${data.name}`,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
