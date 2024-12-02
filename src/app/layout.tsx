import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Dockitt",
  description: "Simple Task Management",
};

const inter = Inter({
  weight: "400",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="corporate">
      <body
        className={`${inter.className} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
