import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const figtree = localFont({
  src: "../fonts/figtree.ttf",
  display: "swap",
  variable: "--figtree-font",
});

export const metadata: Metadata = {
  title: "card design",
  description: "Desing and developed by Sudhir Gadpayle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
