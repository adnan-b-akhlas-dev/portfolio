const env = {
  node_env: process.env.NODE_ENV as string,
  smtp_host: process.env.SMTP_HOST as string,
  smtp_port: process.env.SMTP_PORT as string,
  smtp_user: process.env.SMTP_USER as string,
  smtp_pass: process.env.SMTP_PASS as string,
  admin_email: process.env.ADMIN_EMAIL as string,
  next_public_app_url: process.env.NEXT_PUBLIC_APP_URL as string,
  vercel_url: process.env.VERCEL_URL as string,
};

export default env;
