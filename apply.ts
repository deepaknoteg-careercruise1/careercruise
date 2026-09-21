import type { NextApiRequest, NextApiResponse } from "next";

type ApplyResponse = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApplyResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { firstName, lastName, email } = req.body || {};

  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      success: false,
      message: "First name, last name, and email are required.",
    });
  }

  // TODO: persist this application (database, ATS, or email notification).
  // For now we just log it server-side so the form has somewhere real to go.
  console.log("New job application received:", req.body);

  return res.status(200).json({
    success: true,
    message: "Application received. We'll be in touch soon!",
  });
}
