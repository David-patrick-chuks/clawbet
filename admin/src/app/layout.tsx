import { fontMono, fontSans } from "@/lib/fonts";
import { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "clawbet Admin",
  description: "Agentic Betting Platform - Admin",
  icons: {
    icon: '/clawbet.png',
    shortcut: '/clawbet.png',
    apple: '/clawbet.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
