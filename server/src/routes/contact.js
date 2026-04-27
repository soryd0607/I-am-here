import { Router } from 'express';
import { Resend } from 'resend';
import prisma from '../lib/prisma.js';

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    await prisma.contactMessage.create({
      data: { name: name.trim(), email: email.trim().toLowerCase(), subject: subject.trim(), message: message.trim() },
    });

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'I Am H.E.R.R <noreply@iamherr.org>',
        to: process.env.ADMIN_EMAIL || 'hello@iamherr.org',
        subject: `New Contact: ${subject}`,
        html: `
          <h2>New contact message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr/>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });

      await resend.emails.send({
        from: 'I Am H.E.R.R <noreply@iamherr.org>',
        to: email,
        subject: "We got your message — I Am H.E.R.R",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to I Am H.E.R.R! We received your message and will get back to you within 2 business days.</p>
          <p>In the meantime, <a href="${process.env.CLIENT_URL}/programs">explore our programs</a> or <a href="${process.env.CLIENT_URL}/donate">support our work</a>.</p>
          <p>With love,<br/>The I Am H.E.R.R Team</p>
        `,
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

export default router;
