"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
// import Cursor from "@/components/Cursor";
import AnimatedCursor from "react-animated-cursor";
export default function Home() {
  return (
    <>
      <head></head>
      <body>
        {/* <Cursor /> */}
        {/* <Navbar /> */}
        <AnimatedCursor
          innerSize={10}
          outerSize={20}
          color="253, 191, 23"
          outerAlpha={0.3}
          innerScale={0.8}
          outerScale={5}
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

        <section className="flex mt-5 gap-5 flex-wrap flex-row justify-center">
          <div className="  w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-focus:my-rotate-y-180 group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms] ">
              <div className=" flex-col  items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base  ">
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
                  <Link href="/portfolio/digital">
                    <div className="bg-backtest bg-no-repeat bg-center bg-cover w-[10rem] h-[10rem] hover:scale-125"></div>
                  </Link>
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
                  <h1 className="text-yves-blue text-base "> ABOUT ME</h1>
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
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms] ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-artisan bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base "> PRODUCT DESIGN</h1>
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
                  <Link href="/portfolio/product">
                    <div className="bg-backtest bg-no-repeat bg-center bg-cover  w-[10rem] h-[10rem] hover:scale-125"></div>
                  </Link>

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
        </section>

        <section className="flex flex-wrap mt-10 gap-5 flex-row justify-center">
          <div className=" w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-500 ease-in-out duration-[2000ms]">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover"></div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base "> EDUCATION</h1>
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

                  <Link href="/about">
                    <div className="bg-backtest bg-no-repeat bg-center bg-cover  w-[10rem] h-[10rem] hover:scale-125"></div>
                  </Link>
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
                  <h1 className="text-yves-blue text-base "> ART </h1>
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
                  <Link href="/portfolio/art">
                    <div className="bg-backtest bg-no-repeat bg-center bg-cover  w-[10rem] h-[10rem] hover:scale-125"></div>
                  </Link>

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
                  <h1 className="text-yves-blue text-base">
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

                  <Link href="/about">
                    <div className="bg-backtest bg-no-repeat bg-center bg-cover  w-[10rem] h-[10rem] hover:scale-125"></div>
                  </Link>
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
        </section>
        <section className="w-full h-10"></section>
      </body>
    </>
  );
}
