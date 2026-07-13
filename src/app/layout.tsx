import { DevelopmentNoticeModal } from "@/components/shared/DevelopmentNoticeModal";
import { Toaster } from "@/components/ui/sonner";
import { appUrl, user } from "@/constants/user";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-victor",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: `${user.name} | ${user.designation}`,
  description: user.description,
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "Node.js Backend",
    "MERN Stack Developer",
    "Web Application Architecture",
  ],
  authors: [{ name: user.name }],
  creator: user.name,
  openGraph: {
    title: `${user.name} | Full-Stack Developer Portfolio`,
    description: user.description,
    url: appUrl,
    siteName: `${user.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${user.name} | Full-Stack Developer`,
    description: user.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        "font-victor",
        victorMono.variable,
      )}
    >
      <body className="min-h-screen bg-[url('/dots.svg')] bg-cover bg-fixed bg-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={5000}
            toastOptions={{
              classNames: {
                toast:
                  "!group !flex !items-start !gap-3 !rounded-lg !border !border-border !bg-background !text-foreground !shadow-lg",
                content: "!flex-1",
                title: "!font-medium !text-foreground",
                description: "!text-sm !text-muted-foreground",
                closeButton:
                  "!absolute !-right-1 !top-3 !left-auto !h-6 !w-6 !rounded-md !border !border-border !bg-background !text-muted-foreground hover:!bg-accent hover:!text-accent-foreground",
                icon: "!size-5 !shrink-0 !rounded-full !p-0.5 !border",
                success:
                  "!border-primary/20 !bg-primary/10 !text-foreground [&_.sonner-icon]:!border-primary/30 [&_.sonner-icon]:!bg-primary/15 [&_.sonner-icon]:!text-primary",
                error:
                  "!border-destructive/20 !bg-destructive/10 !text-foreground [&_.sonner-icon]:!border-destructive/30 [&_.sonner-icon]:!bg-destructive/15 [&_.sonner-icon]:!text-destructive",
                warning:
                  "!border-yellow-500/20 !bg-yellow-500/10 !text-foreground [&_.sonner-icon]:!border-yellow-500/30 [&_.sonner-icon]:!bg-yellow-500/15 [&_.sonner-icon]:!text-yellow-600 dark:[&_.sonner-icon]:!text-yellow-400",
                info: "!border-secondary !bg-secondary !text-secondary-foreground [&_.sonner-icon]:!border-border [&_.sonner-icon]:!bg-background [&_.sonner-icon]:!text-secondary-foreground",
                loading:
                  "!border-muted !bg-muted !text-foreground [&_.sonner-icon]:!border-border [&_.sonner-icon]:!bg-background [&_.sonner-icon]:!text-muted-foreground",
              },
            }}
          />
          <DevelopmentNoticeModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
