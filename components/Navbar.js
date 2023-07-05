"use client";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <>
      <nav className="  font-bold text-yves-blue grid grid-cols-2 mt-5 text-2xl">
        <div className="ml-5 mr-5 ">
          <Link href="/">
            <button className=" text-base ">VALU'S PORTFOLIO</button>
          </Link>
        </div>
        <div className=" flex justify-end space-x-5 mr-5">
          <Link href="/about">
            <button className=" text-base hover:underline decoration-my-yellow decoration-2">
              ABOUT
            </button>
          </Link>
          {/* <Link href="/portfolio">
            <button className=" text-base">PORTFOLIO</button>
          </Link> */}

          <Link href="/portfolio/digital">
            <button className=" text-base hover:underline decoration-my-yellow decoration-2">
              WEB/APP
            </button>
          </Link>
          <Link href="/portfolio/product">
            <button className=" text-base hover:underline decoration-my-yellow decoration-2">
              DESIGN
            </button>
          </Link>
          {/* <Link href="/portfolio/art">
            <button className=" text-base hover:underline decoration-my-yellow decoration-2">
              ART
            </button>
          </Link> */}
        </div>
      </nav>
    </>
  );
}
