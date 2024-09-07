// /app/api/send-email/route.ts (Next.js 13+ with app directory)

import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mail"; // Import fungsi dari lib

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const { name, email, phone, message }: FormData = await req.json();

  const emailBody = `
    <h1>Pengaduan Baru</h1>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telepon:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  try {
    // Panggil fungsi sendMail yang ada di lib/mail.ts
    await sendMail({
      to: "raenaldsyaputra22@gmail.com",
      name,
      subject: "Pengaduan Baru",
      body: emailBody,
    });

    return NextResponse.json({ message: "Email terkirim!" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengirim email." }, { status: 500 });
  }
}
