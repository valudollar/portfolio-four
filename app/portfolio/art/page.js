"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
export default function Portofolio() {
  function flip() {}
  function toggleLeft1() {
    document.getElementById("row1").scrollLeft -= 200;
  }
  function toggleRight1() {
    document.getElementById("row1").scrollLeft += 200;
  }
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

        {/* <header className=" mt-5 mb-5 flex items-center gap-5 justify-center flex-col">
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
                    <h1 className="text-sm font-medium text-yves-blue">
                      WEB/APPS
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/product">
              <div className="flex flex-col gap-3  items-center  ">
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1 className="text-sm font-medium text-yves-blue">
                      PRODUCT DESIGN
                    </h1>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/portfolio/art">
              <div className="flex flex-col gap-3  items-center  ">
                <div className="items-center flex-col justify-center shadow-md rounded-md flex w-[10rem] h-[15rem] bg-slate-200 hover:scale-110">
                  <div className="w-[9rem] h-[12rem] rounded-md bg-magician bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1 className="text-sm font-medium text-yves-blue">ART</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section> */}
        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
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
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue">DUMMY TITLE</h1>
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
            <h1 className="font-bold text-xl text-yves-blue">DUMMY TITLE</h1>
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
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
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
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
        </section>
        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
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
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue">DUMMY TITLE</h1>
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
            <h1 className="font-bold text-xl text-yves-blue">DUMMY TITLE</h1>
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
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
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
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
        </section>
        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
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
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue">DUMMY TITLE</h1>
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
            <h1 className="font-bold text-xl text-yves-blue">DUMMY TITLE</h1>
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
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
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
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
        </section>
        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
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
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="bg=yves-blue"
                fontSize="large"
                onClick={toggleRight1}
              />
            </button>
          </div>
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue">DUMMY TITLE</h1>
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
        <Footer />
      </body>
    </>
  );
}
