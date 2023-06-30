"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const opensans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={opensans.className}>
      <title>valu's portfolio</title>
      <body>
        {/* <Navbar /> */}

        {children}
      </body>
    </html>
  );
}
