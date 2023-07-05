"use client";
import Link from "next/link";
import Image from "next/image";
import github from "images/github-mark.svg";
import telegram from "images/Telegram_logo.svg";
import instagram from "images/Instagram.svg";
import gmail from "images/gmail.svg";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-end  space-x-2 flex-row m-5">
        <p className=" text-yves-blue text-2xl">reach out to me</p>
        <Link href="https://github.com/valudollar/portfolio-four">
          <Image src={github} className="w-8 h-8"></Image>
        </Link>
        <Link href="mailto:valerie.luxuanhui@gmail.com">
          <Image src={gmail} className="w-8 h-8"></Image>
        </Link>
        <Link href="https://t.me/grapejiz">
          <Image src={telegram} className="w-8 h-8"></Image>
        </Link>
        <Link href="https://instagram.com/grapefoot.studio">
          <Image src={instagram} className="w-8 h-8"></Image>
        </Link>
      </footer>
    </>
  );
}
