"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowCircleLeft } from "@mui/icons-material";
import { ArrowCircleRight } from "@mui/icons-material";

export default function Portofolio() {
  function flip() {}
  function toggleLeft1() {
    document.getElementById("row1").scrollLeft -= 200;
  }
  function toggleRight1() {
    document.getElementById("row1").scrollLeft += 200;
  }
  function toggleLeft2() {
    document.getElementById("row2").scrollLeft -= 200;
  }
  function toggleRight2() {
    document.getElementById("row2").scrollLeft += 200;
  }
  function toggleLeft3() {
    document.getElementById("row3").scrollLeft -= 200;
  }
  function toggleRight3() {
    document.getElementById("row3").scrollLeft += 200;
  }
  return (
    <>
      <head></head>
      <body>
        <Navbar />
        <header className=" mt-5 mb-5 flex items-center gap-5 justify-center flex-col">
          <Link href="/portfolio">
            <h1 className=" text-yves-blue text-4xl hover:underline">
              PORTFOLIO
            </h1>
          </Link>
          <p className="font-light text-yves-blue">
            click on the cards below to view by the type of project/work{" "}
          </p>
        </header>
        <section className=" mb-10 flex justify-center">
          <div className="flex flex-row gap-4">
            <Link href="/portfolio/digital">
              <div className="flex flex-col gap-3 items-center  ">
                <p className="text-yves-blue">WEB/APPS</p>
                <div className=" items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>THE MAGICIAN</h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/product">
              <div className="flex flex-col gap-3  items-center  ">
                <p className="text-yves-blue">PRODUCT DESIGN</p>
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-magician bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>THE MAGICIAN</h1>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/portfolio/art">
              <div className="flex flex-col gap-3  items-center  ">
                <p className="text-yves-blue">ART </p>
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1>THE MAGICIAN</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowCircleLeft
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleLeft1}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-5 "
                id="row1"
              >
                {" "}
                <div className="min-w-[27rem] h-[20rem] bg-pds11 bg-cover bg-no-repeat bg-center"></div>
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[14rem] h-[20rem] bg-pds13 bg-cover bg-no-repeat bg-left"></div>
                <div className="min-w-[17rem] h-[20rem] bg-pds12 bg-cover bg-no-repeat bg-center"></div>
                <div className="min-w-[40rem] h-[20rem] bg-pds8 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[40rem] h-[20rem] bg-pds6 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[30rem] h-[20rem] bg-pds7 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[24rem] h-[20rem] bg-pds5 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[75rem] h-[20rem] bg-pds3 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[43rem] h-[20rem] bg-pds1 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[30rem] h-[20rem] bg-pds2 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[20rem] h-[20rem] bg-pds4 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[24rem] h-[20rem] bg-pds9 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowCircleRight
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue">
              Handcarry Baggage Checker
            </h1>
            <h1 className="font-light text-sm"> Partnered with Dnata</h1>
            <p>
              <u>My Contributions</u>
            </p>
            <div className="flex flex-col gap-1">
              <p>
                <b>Fabrication</b>: 3D Printing, Laser Cutting, Physical
                Assembly
              </p>
              <p>
                <b>Design & Modelling</b>: Fusion360 and Design Sketches
              </p>
            </div>
            <p className="font-light text-sm text-center">
              a portable tool for counter staff to quickly identify overweight
              and oversized handcarry baggages
            </p>
            <Link href="https://dai.sutd.edu.sg/dai-projects/cabin-baggage-detector/">
              <button className="text-white bg-yves-blue p-2 text-sm  rounded">
                See Video
              </button>
            </Link>
          </div>
        </section>

        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue text-center">
              Generative Design for Prosthetic Legs
            </h1>
            <p>
              <u>My Contributions</u>
            </p>
            <div className="flex flex-col gap-1">
              <p>
                <b>Generative Design</b>: F360 Generative Design
              </p>
            </div>
            <p className="font-light text-sm text-center">
              Module: AI Applications
            </p>
          </div>
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowCircleLeft
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleLeft2}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-10  "
                id="row2"
              >
                <div className="min-w-[18rem] h-[20rem] bg-aiapp1 bg-cover bg-no-repeat bg-center "></div>
                <div className="min-w-[21rem] h-[20rem] bg-aiapp2 bg-cover bg-no-repeat bg-center "></div>
                <div className="min-w-[25rem] h-[20rem] bg-aiapp3 bg-cover bg-no-repeat bg-center "></div>
              </div>
            </div>
            <button>
              <ArrowCircleRight
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight2}
              />
            </button>
          </div>
        </section>

        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowCircleLeft
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleLeft3}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-10  "
                id="row3"
              >
                <div className="min-w-[20rem] h-[20rem] bg-weightlift bg-cover bg-no-repeat bg-center "></div>
              </div>
            </div>
            <button>
              <ArrowCircleRight
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight3}
              />
            </button>
          </div>
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue text-center">
              Kueh Lapis Keyboard Caps
            </h1>
            <h1 className="font-light text-sm"> Personal Small Business</h1>
            {/* <p>
              <u>My Contributions</u>
            </p> */}
            <div className="flex flex-col gap-1">
              <p>
                <b>Store</b>: Grapefoot Studio
              </p>
              <p>
                <b>Materials</b>: Epoxy Resin
              </p>
            </div>
            <p className="font-light text-center text-sm">some other text</p>
            <Link href="https://www.instagram.com/grapefoot.studio/">
              <button className="text-white bg-yves-blue p-2 text-sm  rounded">
                Visit Grapefoot Studio
              </button>
            </Link>
          </div>
        </section>
      </body>
    </>
  );
}
