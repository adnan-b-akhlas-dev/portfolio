export const verifyEmail = async (email: string) => {
  const url = new URL("https://apilayer.net/api/check");

  url.searchParams.set("access_key", process.env.MAILBOXLAYER_API_KEY!);

  url.searchParams.set("email", email);

  const response = await fetch(url.toString());

  return response.json();
};
