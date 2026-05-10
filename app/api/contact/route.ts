import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 400 });
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.CONTACT_TO ?? user;

    if (!user || !pass || !to) {
      return NextResponse.json({ ok: false, error: "Email configuration missing." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass }
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${user}>`,
      to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}
