import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  workType?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, phone, workType, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Ime, e-mail i poruka su obavezni.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL ?? 'info@gipsarko.rs';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            'Email servis nije konfigurisan. Pišite nam na info@gipsarko.rs ili pozovite 069 579 1925.',
        },
        { status: 503 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT) || 587;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: contactEmail,
      replyTo: email,
      subject: `Kontakt upit: ${name}${workType ? ` — ${workType}` : ''}`,
      text: [
        `Ime i prezime: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${phone?.trim() || '—'}`,
        `Vrsta radova: ${workType?.trim() || '—'}`,
        '',
        'Poruka:',
        message,
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Greška pri slanju poruke. Pokušajte ponovo.' },
      { status: 500 }
    );
  }
}
