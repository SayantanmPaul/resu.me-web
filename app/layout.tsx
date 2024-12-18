import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const baseFont = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resu.me",
  description: "Build your professional resume in a matter of minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baseFont.className}>{children}</body>
    </html>
  );
}
