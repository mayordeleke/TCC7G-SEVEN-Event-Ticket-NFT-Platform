import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Ticket NFT",
  description: "A simple NFT ticket platform UI built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
