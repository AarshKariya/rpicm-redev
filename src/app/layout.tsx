import type { Metadata } from "next";
import { Quattrocento } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";

const quattrocento = Quattrocento({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RPICM Redevelopment",
  description: "Learn, Earn, Repeat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quattrocento.className}>{children}</body>
    </html>
  );
}
