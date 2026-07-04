"use server";

import { TContact } from "@/components/forms/ContactForm";
import env from "@/config/env";
import transporter from "@/lib/nodemailer";
import { IApiResponse } from "@/types/apiResponse";

export const sendContactEmail = async <T>(
  payload: TContact,
): Promise<IApiResponse<T>> => {
  try {
    const { name, email, phone: _phone, subject: _subject, message } = payload;

    await transporter.sendMail({
      from: env.smtp_user,
      to: email,
      subject: `Portfolio Contact - ${name}`,
      replyTo: email,
      html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
    });

    return {
      success: true,
      message: "Thanks! Your message has been sent successfully.",
    };
  } catch (error: unknown) {
    const err = error as Error;
    console.error(err);
    return { success: false, message: err.message, error: err };
  }
};
