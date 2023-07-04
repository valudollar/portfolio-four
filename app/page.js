"use client";
import Link from "next/link";
import Image from "next/image";
import testcircle from "images/testcircle.svg";
import backtest from "images/backtest.png";

import eye from "images/eye.png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);
  return (
    <>
      <head></head>
      <body>
        {/* <Cursor /> */}
        {/* <Navbar /> */}
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color="253, 191, 23"
          outerAlpha={0.3}
          innerScale={0.8}
          outerScale={2}
          clickables={["a", ".link"]}
        />

        <section className=" mt-5 ml-5 mr-5 flex flex-col gap-2 w-full justify-center items-center">
          <h1 className="text-yves-blue font-light text-3xl">
            hello, stranger
          </h1>
          <p className=" text-yves-blue text-2xl">
            i'm valu, aspiring creative developer and illustrator.
          </p>
        </section>

        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{
            ease: "linear",
            type: "spring",
            stiffness: 50,
            duration: 2,
          }}
          className="flex mt-10 mb-10 gap-5 flex-wrap flex-row justify-center"
        >
          <div className="  w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-focus:my-rotate-y-180 group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms] ">
              <div className=" flex-col  items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue font-medium  ">
                    WEB DEVELOPMENT
                  </h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col justify-center items-center text-base flex rounded-xl text-black bg-yves-blue overflow-hidden">
                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">HTML</p>{" "}
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">CSS</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">JAVASCRIPT</p>
                  </div>
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">REACTJS</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">NEXTJS</p>
                  </div>
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">UI/UX</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">FIGMA</p>
                  </div>
                  <div className=" text-my-yellow flex flex-row flex-wrap justify-center items-center">
                    <p className="text-xs w-16 text-center">CLICK ME FOR</p>
                    <Link href="/portfolio/digital">
                      <div className="mt-2 flex justify-center items-center w-[6rem] h-[6rem]">
                        <Image
                          src={eye}
                          className=" mr-2  hover:scale-125"
                          width={50}
                          height={50}
                        ></Image>
                      </div>
                    </Link>
                    <p className="text-xs w-16  text-center">
                      WEB/APP PROJECTS
                    </p>
                  </div>
                  {/* <Link href="/portfolio/digital">
                    <div className="mt-2 bg-testcircle bg-no-repeat bg-center bg-cover flex justify-center items-center w-[8rem] h-[8rem]">
                      <Image
                        src={eye}
                        className=" mr-2  hover:scale-125"
                        width={50}
                        height={50}
                      ></Image>
                    </div>
                  </Link> */}
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">AGILE</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">TDD</p>
                  </div>
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-5">
                    <p className="text-white ">MACHINE LEARNING</p>
                  </div>
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">TAILWIND</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">BOOTSTRAP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem]  cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms]">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-king bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue  font-medium "> ABOUT ME</h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex items-center justify-center rounded-xl text-white bg-yves-blue">
                  <p className="m-4 text-center font-light text-base">
                    hey, valu here! <br />i study
                    <b className="text-my-yellow"> Design and AI </b>at{" "}
                    <b>Singapore University of Technology and Design</b>. i love
                    cats, Yves Klein blue (#002FA7) and doing martial arts!
                  </p>
                  <div className=" text-my-yellow flex flex-row flex-wrap justify-center items-center">
                    <p className="text-xs w-16 text-center">CLICK ME FOR</p>
                    <Link href="/about">
                      <div className="mt-2 flex justify-center items-center w-[6rem] h-[6rem]">
                        <Image
                          src={eye}
                          className=" mr-2  hover:scale-125"
                          width={50}
                          height={50}
                        ></Image>
                      </div>
                    </Link>
                    <p className="text-xs w-16  text-center">MORE ABOUT ME</p>
                  </div>
                  {/* <Link href="/about">
                    <div className="mt-2 bg-testcircle bg-no-repeat bg-center bg-cover flex justify-center items-center w-[8rem] h-[8rem]">
                      <Image
                        src={eye}
                        className=" mr-2  hover:scale-125"
                        width={50}
                        height={50}
                      ></Image>
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms] ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-artisan bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue  font-medium ">
                    {" "}
                    PRODUCT DESIGN
                  </h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex items-center justify-center rounded-xl text-white text-base  bg-yves-blue">
                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">3D PRINTING</p>{" "}
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">LASER CUTTING</p>
                  </div>

                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">RHINO</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">F360</p>
                  </div>
                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">SKETCHUP</p>
                  </div>

                  <div className=" text-my-yellow flex flex-row flex-wrap justify-center items-center">
                    <p className="text-xs w-16 text-center">CLICK ME FOR</p>
                    <Link href="/portfolio/product">
                      <div className="mt-2 flex justify-center items-center w-[6rem] h-[6rem]">
                        <Image
                          src={eye}
                          className=" mr-2  hover:scale-125"
                          width={50}
                          height={50}
                        ></Image>
                      </div>
                    </Link>
                    <p className="text-xs w-16  text-center">DESIGN PROJECTS</p>
                  </div>

                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-5">
                    <p className="text-white hover:underline decoration-my-yellow decoration-2 ">
                      @VALUBAHLOO
                    </p>
                  </div>
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white hover:underline decoration-my-yellow decoration-2">
                      @GRAPEFOOT STUDIO
                    </p>
                  </div>
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">EPOXY RESIN</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">POLYMER CLAY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 2 }}
          className="flex mb-10 flex-wrap mt-10 gap-5 flex-row justify-center"
        >
          <div className=" w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms]">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue  font-medium "> EDUCATION</h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center rounded-xl text-white bg-yves-blue items-center">
                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">SINGAPORE UNIVERSITY OF</p>
                  </div>

                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">TECHNOLOGY AND DESIGN</p>
                  </div>
                  <div className=" text-my-yellow flex flex-row flex-wrap justify-center items-center">
                    <p className="text-xs w-16 text-center">CLICK ME FOR</p>
                    <Link href="/about/education">
                      <div className="mt-2 flex justify-center items-center w-[6rem] h-[6rem]">
                        <Image
                          src={eye}
                          className=" mr-2  hover:scale-125"
                          width={50}
                          height={50}
                        ></Image>
                      </div>
                    </Link>
                    <p className="text-xs w-16  text-center">MORE DETAILS</p>
                  </div>
                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-my-yellow font-medium">DESIGN AND AI</p>
                  </div>

                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">BACHELOR OF SCIENCE</p>
                  </div>
                  <div className="flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">KKH - SUTD SCHOLARSHIP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem]  cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms] ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue  font-medium "> ART </h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center items-center rounded-xl text-white bg-yves-blue">
                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-my-yellow font-bold">•</p>
                    <Link href="https://www.instagram.com/sheeshcat/">
                      <p className="text-white hover:underline decoration-my-yellow decoration-2">
                        @SHEESHCAT
                      </p>
                    </Link>
                    <p className="text-my-yellow font-bold">•</p>
                  </div>

                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <Link href="https://www.instagram.com/bubblesarenotblue/">
                      <p className="text-white hover:underline decoration-my-yellow decoration-2">
                        @BUBBLESARENOTBLUE
                      </p>
                    </Link>
                  </div>

                  <div className=" text-my-yellow flex flex-row flex-wrap justify-center items-center">
                    <p className="text-xs w-16 text-center">CLICK ME FOR</p>
                    <Link href="/portfolio/art">
                      <div className="mt-2 flex justify-center items-center w-[6rem] h-[6rem]">
                        <Image
                          src={eye}
                          className=" mr-2  hover:scale-125"
                          width={50}
                          height={50}
                        ></Image>
                      </div>
                    </Link>
                    <p className="text-xs w-16  text-center">ART PORTFOLIO</p>
                  </div>

                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">PROCREATE</p>
                  </div>
                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">COLOUR PENCIL</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">ACRYLIC</p>
                  </div>
                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">OIL PAINTING</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">WATERCOLOUR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms] ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover">
                  <div className="flex justify-center"></div>
                </div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue  font-medium">
                    INDUSTRY EXPERIENCE
                  </h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center items-center rounded-xl text-white bg-yves-blue">
                  <div className="flex flex-row  font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-my-yellow">INDUSTRY PROJECTS</p>
                  </div>
                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">GRAB</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">SUTD</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">DNATA</p>
                  </div>
                  <div className=" text-my-yellow flex flex-row flex-wrap justify-center items-center">
                    <p className="text-xs w-16 text-center">CLICK ME FOR</p>
                    <Link href="/about/work">
                      <div className="mt-2 flex justify-center items-center w-[6rem] h-[6rem]">
                        <Image
                          src={eye}
                          className=" mr-2  hover:scale-125"
                          width={50}
                          height={50}
                        ></Image>
                      </div>
                    </Link>
                    <p className="text-xs w-16  text-center">MORE DETAILS</p>
                  </div>

                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-my-yellow ">INTERNSHIPS</p>
                  </div>

                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">DP</p>
                    <p className="text-my-yellow font-bold">•</p>
                    <p className="text-white ">DYNAOPTICS</p>
                  </div>
                  <div className=" flex flex-row font-medium justify-center ml-2 mr-2 mt-2 gap-2">
                    <p className="text-white ">THALES SOLUTIONS ASIA </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section> */}
        <Footer></Footer>
      </body>
    </>
  );
}
