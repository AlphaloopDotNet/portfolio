// pages/api/send-email.js
import nodemailer from 'nodemailer';
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { name, email, message } = req.body;
  // Create a transporter using your email service provider's settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'alphaloopit@gmail.com',
      pass: 'sxgj emhr dmec wvwd',
    },
  });
  const mailOptions = {
    from: `${email}`,
    to: 'alphaloopit@gmail.com',
    subject: 'New Form Submission by Portfolio',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

