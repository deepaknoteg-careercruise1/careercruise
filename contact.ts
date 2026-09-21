import type { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  // TODO: wire this up to an email service (e.g. Resend, SendGrid) or a CRM.
  console.log("New contact form submission:", req.body);

  return res.status(200).json({
    success: true,
    message: "Message received. We'll get back to you soon!",
  });
}
