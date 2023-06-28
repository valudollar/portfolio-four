"use client";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
export default function Navbar() {
  return (
    <>
      <nav className="  font-bold text-yves-blue grid grid-cols-2 mt-5 text-2xl">
        <div className="ml-5 mr-5 ">
          <Link href="/">
            <HomeIcon className="bg=yves-blue" fontSize="large" />
          </Link>
        </div>
        <div className=" flex justify-end gap-5 mr-5">
          <Link href="/about">
            <button className=" text-base ">ABOUT</button>
          </Link>
          <Link href="/portfolio">
            <button className=" text-base">PORTFOLIO</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
