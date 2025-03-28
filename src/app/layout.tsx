import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const josephinSans = localFont({
  src: "./fonts/JosefinSans-VariableFont_wght.ttf",
  variable: "--font-josefin-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Novaa",
  description: "Your everyday assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josephinSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
