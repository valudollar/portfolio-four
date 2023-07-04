"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
  function toggleLeft4() {
    document.getElementById("row4").scrollLeft -= 200;
  }
  function toggleRight4() {
    document.getElementById("row4").scrollLeft += 200;
  }

  function toggleLeft5() {
    document.getElementById("row5").scrollLeft -= 200;
  }
  function toggleRight5() {
    document.getElementById("row5").scrollLeft += 200;
  }
  function toggleLeft6() {
    document.getElementById("row6").scrollLeft -= 200;
  }
  function toggleRight6() {
    document.getElementById("row6").scrollLeft += 200;
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
        <header className="mt-5 mb-5 flex items-center justify-center">
          <h1 className="text-yves-blue font-light text-3xl">
            DESIGN PROJECTS
          </h1>
        </header>
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
                  <div className="w-[9rem] h-[12rem] rounded-md bg-magician bg-cover bg-center"></div>
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
                  <div className="w-[9rem] h-[12rem] rounded-md bg-yves-blue bg-cover bg-center"></div>
                  <div className=" w-full h-[1rem] mt-3 flex justify-center items-center">
                    <h1 className="text-sm font-medium text-yves-blue">ART</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section> */}
        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{
            ease: "linear",
            type: "spring",
            stiffness: 50,
            duration: 2,
          }}
          className="flex justify-center items-center gap-10 mt-10 flex-wrap mb-10 flex-row"
        >
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleLeft1}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-5 "
                id="row1"
              >
                <div className="min-w-[20rem] h-[20rem] bg-dnatapres bg-cover bg-no-repeat bg-center"></div>
                <div className="min-w-[17rem] h-[20rem] bg-pds12 bg-cover bg-no-repeat bg-center"></div>
                <div className="min-w-[14rem] h-[20rem] bg-pds13 bg-cover bg-no-repeat bg-left"></div>
                <div className="min-w-[32rem] h-[20rem] bg-pds10 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[27rem] h-[20rem] bg-pds11 bg-cover bg-no-repeat bg-center"></div>{" "}
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
              <ArrowForwardIos
                className="text-yves-blue"
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
              <button className="text-yves-blue text-base hover:underline decoration-my-yellow decoration-2">
                See Video
              </button>
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{
            ease: "linear",
            type: "spring",
            stiffness: 50,
            duration: 2,
          }}
          className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row"
        >
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
              Applied physics and research knowledge through setting of
              structural loads, as well as influencing design outcomes using
              starting shapes, preserved geometry and obstacle geometry.
            </p>
          </div>
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
                className="text-yves-blue"
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
              <ArrowForwardIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleRight2}
              />
            </button>
          </div>
        </motion.section>

        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleLeft3}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-10  "
                id="row3"
              >
                <div className="min-w-[20rem] h-[20rem] bg-kueh1 bg-cover bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-kueh3 bg-cover bg-no-repeat bg-center "></div>{" "}
                <div className="min-w-[28rem] h-[20rem] bg-kueh2 bg-cover bg-no-repeat bg-center "></div>
                {/* <div className="min-w-[20rem] h-[20rem] bg-rainbow1 bg-cover bg-no-repeat bg-center "></div> */}
                <div className="min-w-[20rem] h-[20rem] bg-rainbow2 bg-cover bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-rainbow3 bg-cover bg-no-repeat bg-center "></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="text-yves-blue"
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
            <p className="font-light text-center text-sm">
              inspired by one of my favourite childhood snacks: the local
              traditional, kueh lapis sagu
            </p>
            <Link href="https://www.instagram.com/grapefoot.studio/">
              <button className="text-yves-blue text-base hover:underline decoration-my-yellow decoration-2">
                Visit Grapefoot Studio
              </button>
            </Link>
          </div>
        </section>

        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue text-center">
              Bread Basket Keyboard Caps
            </h1>
            <h1 className="font-light text-sm"> Personal Small Business</h1>
            {/* <p>
              <u>My Contributions</u>
            </p> */}
            <div className="flex flex-col gap-1">
              <p>
                <b>Store</b>: valubahloo
              </p>
              <p>
                <b>Materials</b>: Polymer Clay, PBT Blanks, Acrylic, UV Resin
              </p>
            </div>
            <p className="font-light text-center text-sm">
              earlier keycap work with polymer clay and paint. sold on
              CannonKeys, Daily Clack and Desk Hero.
            </p>
            <Link href="https://www.instagram.com/valubahloo/">
              <button className="text-yves-blue text-base hover:underline decoration-my-yellow decoration-2">
                Visit valubahloo
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleLeft4}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-10  "
                id="row4"
              >
                <div className="min-w-[28rem] h-[20rem] bg-bread4 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[16rem] h-[20rem] bg-bread1 bg-contain bg-no-repeat bg-top "></div>
                <div className="min-w-[16rem] h-[20rem] bg-bread2 bg-contain bg-no-repeat bg-top"></div>{" "}
                <div className="min-w-[16rem] h-[20rem] bg-bread3 bg-contain bg-no-repeat bg-top "></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleRight4}
              />
            </button>
          </div>
        </section>
        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleLeft5}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-10  "
                id="row5"
              >
                <div className="min-w-[20rem] h-[20rem] bg-fruit1 bg-cover bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-fruit3 bg-cover bg-no-repeat bg-center "></div>{" "}
                <div className="min-w-[20rem] h-[20rem] bg-fruit2 bg-cover bg-no-repeat bg-center "></div>{" "}
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleRight5}
              />
            </button>
          </div>
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue text-center">
              Fruit Polymer Clay Jewellery
            </h1>
            <h1 className="font-light text-sm"> Personal Small Business</h1>
            {/* <p>
              <u>My Contributions</u>
            </p> */}
            <div className="flex flex-col gap-1">
              <p>
                <b>Store</b>: valubahloo
              </p>
              <p>
                <b>Materials</b>: Polymer Clay, Acrylic, UV Resin
              </p>
            </div>
            <p className="font-light text-center text-sm">
              inspired by one of my favourite childhood snacks: the local
              traditional, kueh lapis sagu
            </p>
            <Link href="https://www.instagram.com/grapefoot.studio/">
              <button className="text-yves-blue text-base hover:underline decoration-my-yellow decoration-2">
                Visit valubahloo
              </button>
            </Link>
          </div>
        </section>

        <section className="flex justify-center items-center gap-10 mt-20 flex-wrap mb-10 flex-row">
          <div className=" w-[20rem] h-[20rem] gap-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue text-center">
              Polymer Clay Keyboard Caps
            </h1>
            <h1 className="font-light text-sm"> Personal Small Business</h1>
            {/* <p>
              <u>My Contributions</u>
            </p> */}
            <div className="flex flex-col gap-1">
              <p>
                <b>Store</b>: valubahloo
              </p>
              <p>
                <b>Materials</b>: Polymer Clay, PBT Blanks, Acrylic, UV Resin
              </p>
            </div>
            <p className="font-light text-center text-sm">
              Earlier keycap work with polymer clay and paint. Sold on
              CannonKeys, Daily Clack and Desk Hero.
            </p>
            <Link href="https://www.instagram.com/valubahloo/">
              <button className="text-yves-blue text-base hover:underline decoration-my-yellow decoration-2">
                Visit valubahloo
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center flex-row w-[50rem]">
            <button>
              <ArrowBackIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleLeft6}
              />
            </button>

            <div className=" flex-nowrap ml-5 mr-5 overflow-x-scroll  flex flex-row">
              <div
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap gap-10  "
                id="row6"
              >
                {" "}
                <div className="min-w-[30rem] h-[20rem] bg-kc4 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-kc3 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[22rem] h-[20rem] bg-kc1 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-kc2 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-kc5 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[22rem] h-[20rem] bg-kc6 bg-contain bg-no-repeat bg-center "></div>
              </div>
            </div>
            <button>
              <ArrowForwardIos
                className="text-yves-blue"
                fontSize="large"
                onClick={toggleRight6}
              />
            </button>
          </div>
        </section>
        <Footer />
      </body>
    </>
  );
}
