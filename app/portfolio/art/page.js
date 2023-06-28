"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function Portofolio() {
  function flip() {}
  return (
    <>
      <head></head>
      <body>
        <Navbar />
        <header className=" mt-10 mb-10 flex justify-center text-yves-blue text-4xl">
          <Link href="/portfolio">
            <h1> PORTFOLIO</h1>
          </Link>
        </header>
        <section className=" mb-10 flex flex-col items-center">
          <div className="flex flex-row gap-4 flex-wrap">
            <Link href="/portfolio/digital">
              <div className="flex flex-col gap-1 items-center  ">
                <p>WEB/APPS</p>
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[12rem] h-[16rem] bg-slate-200">
                  <div className="w-[10rem] h-[14rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                </div>
              </div>
            </Link>{" "}
            <Link href="/portfolio/product">
              <div className="flex flex-col gap-1  items-center  ">
                <p>PRODUCT DESIGN</p>
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[12rem] h-[16rem] bg-slate-200">
                  <div className="w-[10rem] h-[14rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/art">
              <div className="flex flex-col gap-1  items-center  ">
                <p>ART </p>
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[12rem] h-[16rem] bg-slate-200">
                  <div className="w-[10rem] h-[12rem] rounded-md bg-magician bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>THE MAGICIAN</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="mt-10">
          <div className=" justify-center  first-letter:ml-10 mr-10 flex-row flex gap-5 flex-wrap  ">
            <div className="bg-yves-blue w-[20rem] h-[20rem]"></div>
            <div className="bg-yves-blue w-[20rem] h-[20rem]"></div>
            <div className="bg-yves-blue w-[20rem] h-[20rem]"></div>
            <div className="bg-yves-blue w-[20rem] h-[20rem]"></div>
            <div className="bg-yves-blue w-[20rem] h-[20rem]"></div>
            <div className="bg-yves-blue w-[20rem] h-[20rem]"></div>
          </div>
        </section>
      </body>
    </>
  );
}
