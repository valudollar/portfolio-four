"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
export default function Portofolio() {
  function flip() {}
  return (
    <>
      <head></head>
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

        <header className=" mt-5 mb-5 flex items-center gap-5 justify-center flex-col">
          <p className="font-light text-yves-blue">
            click on the cards below to view by the type of project/work{" "}
          </p>
        </header>
        <section className=" mb-10 flex justify-center">
          <div className="flex flex-row gap-4">
            <Link href="/portfolio/digital">
              <div className="flex flex-col gap-3 items-center  ">
                <div className=" items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>WEB/APPS</h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/product">
              <div className="flex flex-col gap-3  items-center  ">
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>PRODUCT DESIGN</h1>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/portfolio/art">
              <div className="flex flex-col gap-3  items-center  ">
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-magician bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>ART</h1>
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
