"use server";

import { TContact } from "@/components/forms/ContactForm";
import env from "@/config/env";
import ContactAutoReplyEmail from "@/emails/ContactAutoReplyEmail";
import ContactNotificationEmail from "@/emails/ContactNotificationEmail";
import { verifyEmail } from "@/lib/mailboxlayer";
import transporter from "@/lib/nodemailer";
import { IApiResponse } from "@/types/apiResponse";
import { render } from "@react-email/components";

export const sendContactEmail = async <T>(
  payload: TContact,
): Promise<IApiResponse<T>> => {
  try {
    const { name, email, phone, subject, message } = payload;

    const emailCheck = await verifyEmail(email);

    if (!emailCheck.format_valid) {
      return {
        success: false,
        message: "Invalid email address.",
      };
    }

    if (emailCheck.disposable) {
      return {
        success: false,
        message: "Disposable email addresses are not allowed.",
      };
    }

    if (!emailCheck.mx_found) {
      return {
        success: false,
        message: "Email domain cannot receive mail.",
      };
    }

    const notificationHtml = await render(
      ContactNotificationEmail({ name, email, phone, subject, message }),
    );
    const autoReplyHtml = await render(
      ContactAutoReplyEmail({ name, subject, message }),
    );

    await Promise.all([
      transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.SMTP_FROM}>`,
        to: env.admin_email,
        replyTo: email,
        subject: `New message: ${subject}`,
        html: notificationHtml,
      }),
      transporter.sendMail({
        from: "Adnan Bin Akhlas",
        to: email,
        subject: "Thanks for reaching out!",
        html: autoReplyHtml,
      }),
    ]);

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
