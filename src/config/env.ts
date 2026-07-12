const env = {
  smtp_host: process.env.SMTP_HOST as string,
  smtp_port: process.env.SMTP_PORT as string,
  smtp_user: process.env.SMTP_USER as string,
  smtp_pass: process.env.SMTP_PASS as string,
  admin_email: process.env.ADMIN_EMAIL as string,
};

export default env;
