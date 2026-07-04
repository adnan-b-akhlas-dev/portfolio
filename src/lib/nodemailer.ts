import env from "@/config/env";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: env.smtp_host,
  port: Number(env.smtp_port),
  secure: false,
  auth: {
    user: env.smtp_user,
    pass: env.smtp_pass,
  },
});

export default transporter;
