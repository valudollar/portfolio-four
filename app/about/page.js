"use client";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Link from "next/link";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
export default function About() {
  return (
    <>
      <body>
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color="253, 191, 23"
          outerAlpha={0.3}
          innerScale={0.8}
          outerScale={2}
          clickables={["a", ".link"]}
        />
        <Navbar />
        <header className=" mt-10 mb-10 flex justify-center text-yves-blue text-4xl">
          <h1> ABOUT</h1>
        </header>
        <section className=" mb-10 flex justify-center">
          <div className="flex flex-row gap-4">
            <Link href="/about/introduction">
              <div className="flex flex-col gap-3 items-center  ">
                <div className=" items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>INTRODUCTION</h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/about/education">
              <div className="flex flex-col gap-3  items-center  ">
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>EDUCATION</h1>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/about/experience">
              <div className="flex flex-col gap-3  items-center  ">
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-magician bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1> EXPERIENCE</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </body>
    </>
  );
}
