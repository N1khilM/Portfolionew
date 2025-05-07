import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NikhilPortfolio",
  description: "Created by Nikhil Mugali",
  icons: {
    icon: "/favicon.ico", // Default favicon for browsers
    shortcut: "/favicon.ico", // Shortcut icon (optional, can be same as icon)
    apple: "/apple-touch-icon.png", // For iOS devices (e.g., 180x180 PNG)
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png", // Additional favicon for other use cases
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest", // Add this line
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
