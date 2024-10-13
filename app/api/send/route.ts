import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/Email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nombre, email, mensaje } = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'Tu Tienda <noreply@tutienda.com>',
      to: ['juasosua@gmail.com'],
      subject: 'Nuevo mensaje de contacto',
      react: EmailTemplate({ nombre, email, mensaje }),
      text: `${nombre} quiere contactar, su mensaje es: ${mensaje} y su email es ${email}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
