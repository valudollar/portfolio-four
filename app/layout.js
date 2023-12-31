"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

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
      <Head>
        {/* Add the viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other meta tags or custom headers here if needed */}
      </Head>
      <title>valu's portfolio</title>
      <body>
        {/* <Navbar /> */}

        {children}
      </body>
    </html>
  );
}
