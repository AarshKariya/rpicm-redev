import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";

const raleway = Raleway({
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
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
