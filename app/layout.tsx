import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NikhilPortfolio",
  description: "Created by Nikhil Mugali",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
