// Looking to send emails in production? Check out our Email API/SMTP product!
const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";
// const { MailtrapTransport } = require("mailtrap");

// const USER = process.env.NEXT_PUBLIC_USER!;
// const PASS = process.env.NEXT_PUBLIC_PASS!;
const mypass = process.env.MYPASS!;
const myuser = process.env.MYUSER!;

console.log("pass", mypass);
console.log("myuser", myuser);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the request method is POST
  // If not, return a 405 Method Not Allowed response
  if (req.method !== "POST") return res.status(405).end();

  const { email, message } = req.body;

  try {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myuser,
        pass: mypass,
      },
    });

    transport.sendMail({
      from: myuser,
      to: "nikhilkingh008@gmail.com",
      subject: message,
      text: `You have a new message from ${email}: ${message}`,
      html: `<p>You have a new message from <strong>${email}</strong>: ${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ success: false });
  }
}
