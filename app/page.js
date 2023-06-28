import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <head></head>
      <body>
        <Navbar />

        <section className=" ml-5 mr-5 flex flex-col gap-2 w-full justify-center items-center">
          <h1 className="text-yves-blue font-light text-4xl">
            hello, stranger
          </h1>
          <p className=" text-yves-blue font-thin text-2xl">
            welcome to <b> the table.</b> i am valu, aspiring creative developer
            and illustrator.
          </p>
          <p className=" text-yves-blue font-thin text-2xl">
            hover over the cards to see what I have to offer
          </p>
        </section>

        <section className="flex mt-5 gap-5 flex-wrap flex-row justify-center">
          <div className="  w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-focus:my-rotate-y-180 group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className=" flex-col  items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover">
                  <div className="flex justify-center">
                    <h1 className="mt-8 text-white text-base">
                      WEB DEVELOPMENT
                    </h1>
                  </div>
                </div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base  ">THE MAGICIAN</h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center rounded-xl text-white bg-yves-blue">
                  <section className=" ml-5 mr-3 mb-3 text-xs flex flex-col gap-1 items-start ">
                    <h1 className=" text-sm font-semibold text-my-yellow ">
                      FRONT-END DEVELOPMENT
                    </h1>
                    <ul className="list-disc ml-3 ">
                      <li>HTML, CSS, Javascript</li>
                      <li>ReactJS, NextJS</li>
                      <li>Styling: Bootstrap, Mantine, Tailwind</li>
                    </ul>
                    <h1 className="text-sm font-semibold text-my-yellow ">
                      {" "}
                      UI/UX
                    </h1>
                    <ul className="list-disc ml-3">
                      <li> Figma</li>
                      <li> User Studies</li>
                      <li> Web Experiments</li>
                    </ul>
                    <h1 className="text-sm font-semibold text-my-yellow ">
                      {" "}
                      OTHER EXPERIENCE
                    </h1>
                    <ul className="list-disc ml-3">
                      <li> Python</li>
                      <li> Machine Learning</li>
                      <li> Applied Deep Learning</li>
                      <li> Agile Methodology </li>
                    </ul>
                    <h1 className="text-sm font-semibold text-my-yellow ">
                      {" "}
                      NOTABLE PROJECTS
                    </h1>
                    <ul className="list-disc ml-3">
                      <Link href="https://sites.google.com/view/sds-team-4/home">
                        <li>
                          <u>Peer Evaluation Platform</u>
                        </li>
                      </Link>
                      <Link href="https://dai.sutd.edu.sg/dai-projects/weightlift-buddy/">
                        <li>
                          <u>Deadlift Form Checking App</u>
                        </li>
                      </Link>
                      <li>Ride Hailing Simulation</li>
                    </ul>
                  </section>
                  <div className=" flex flex-row justify-center items-center">
                    <Link href="/portfolio/digital">
                      <button className=" text-xs bg-white p-2 rounded text-yves-blue font-semibold align-center">
                        SEE MY PROJECTS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem]  cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-king bg-no-repeat bg-cover">
                  <div className="flex justify-center">
                    <h1 className="mt-8 text-white text-base">ABOUT ME</h1>
                  </div>
                </div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base "> THE KING</h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex items-center justify-center rounded-xl text-white bg-yves-blue">
                  <p className="m-5 font-thin text-base">
                    hello, my name is valerie but you can call me valu. i major
                    in Design and AI at Singapore University of Technology and
                    Design, and i believe in being multidisciplinary and putting
                    on hats of every kind! I love cats and Yves Klein Blue (as
                    evidenced by the theme) and also enjoy playing simulation
                    games and practicing martial arts in my free time!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-artisan bg-no-repeat bg-cover">
                  <div className="flex justify-center">
                    <h1 className="mt-8 text-white text-base">DESIGN</h1>
                  </div>
                </div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base "> THE ARTISAN</h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center rounded-xl text-white bg-yves-blue">
                  <section className=" ml-5 mr-3 mb-3 flex text-xs flex-col gap-1 items-start ">
                    <h1 className="text-sm font-semibold text-my-yellow">
                      FABRICATION
                    </h1>
                    <ul className="list-disc ml-3">
                      <li>3D Printing</li>
                      <li>Laser Cutting</li>
                      <li>Epoxy Resin</li>
                    </ul>
                    <h1 className="text-sm font-semibold text-my-yellow">
                      CAD TOOLS
                    </h1>
                    <ul className="list-disc ml-3">
                      <li> Fusion 360</li>
                      <li> Sketchup</li>
                      <li> Rhino</li>
                    </ul>
                    <h1 className="text-sm font-semibold text-my-yellow">
                      {" "}
                      NOTABLE PROJECTS
                    </h1>
                    <ul className="list-disc ml-3">
                      <li>Handcarry Baggage Checker</li>
                      <li>Paper Tube Installation</li>
                      <li>Handmade Keyboard Caps</li>
                    </ul>
                    <h1 className="text-sm font-semibold text-my-yellow">
                      MY SMALL BUSINESSES
                    </h1>
                    <p className="font-thin">
                      handmade resin & clay keyboard caps; jewellery
                    </p>
                    <ul className="list-disc ml-3">
                      <li>Grapefoot Studio (2022-Present)</li>
                      <li>valubahloo (2020-2022)</li>
                    </ul>
                  </section>
                  <div className=" flex flex-row justify-center items-center">
                    <Link href="/portfolio/product">
                      <button className="bg-white p-2 text-xs rounded text-yves-blue font-semibold align-center">
                        SEE MY PROJECTS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap mt-10 gap-5 flex-row justify-center">
          <div className=" w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover">
                  <div className="flex justify-center">
                    <h1 className="mt-8 text-white text-base">EDUCATION</h1>
                  </div>
                </div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base "> THE APPRENTICE</h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center rounded-xl text-white bg-yves-blue">
                  <section className=" text-xs ml-5 mr-3 mb-3 flex flex-col gap-1 items-start ">
                    <div>
                      <h1 className="text-sm font-semibold text-my-yellow">
                        SINGAPORE UNIVERSITY OF TECHNOLOGY AND DESIGN (SUTD)
                      </h1>
                      <h1 className="text-xs font-thin text-white">
                        Design & AI, Bachelor of Science
                      </h1>
                      <ul className="list-disc ml-3">
                        <li>KKH-SUTD Scholarship</li>
                      </ul>
                    </div>

                    <h1 className="text-sm font-semibold text-my-yellow">
                      ACHIEVEMENTS
                    </h1>
                    <ul className="list-disc ml-3">
                      <li> DAI Challenge 2020: 1st </li>
                      <li> NUS Ideate 2021: 2nd in Category</li>
                      <li>
                        SUTD x Singapore Cruise Centre Design Challenge 2020:
                        1st
                      </li>
                    </ul>
                    <h1 className="text-sm font-semibold text-my-yellow">
                      RESEARCH PROJECTS
                    </h1>
                    <ul className="list-disc ml-3">
                      <li> Airport Experience Research</li>
                      <li> Livestream-selling Market Research</li>
                    </ul>

                    <h1 className="text-sm font-semibold text-my-yellow">
                      NOTABLE MODULES
                    </h1>
                    <ul className="list-disc ml-3">
                      <Link href="https://dai.sutd.edu.sg/dai-projects/cabin-baggage-detector/">
                        <li>
                          <u>Product Design Studio:</u> A{" "}
                        </li>
                      </Link>
                      <Link href="https://sites.google.com/view/sds-team-4/home">
                        <li>
                          <u>Service Design Studio:</u> A
                        </li>
                      </Link>
                      <Link href="https://dai.sutd.edu.sg/dai-projects/weightlift-buddy/">
                        <li>
                          <u>Human-Computer Interactions:</u> A
                        </li>
                      </Link>
                    </ul>
                  </section>
                  <div className=" flex flex-row justify-center items-center">
                    <Link href="/portfolio">
                      <button className="bg-white p-2 text-xs rounded text-yves-blue font-semibold align-center">
                        SEE MY PROJECTS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem]  cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover">
                  <div className="flex justify-center">
                    <h1 className="mt-8 text-white text-base">ART</h1>
                  </div>
                </div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base "> THE PAINTER </h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center rounded-xl text-white bg-yves-blue">
                  <section className=" text-xs ml-5 mr-3 mb-3 flex flex-col gap-1 items-start ">
                    <h1 className="text-sm font-semibold text-my-yellow">
                      EDUCATION
                    </h1>
                    <ul className="list-disc ml-3">
                      <li>A Level H2 & H3 Art </li>
                      <li>Special Art Program (SAP) </li>
                    </ul>
                    <h1 className="text-sm font-semibold  text-my-yellow">
                      FAVOURITE MEDIUMS
                    </h1>
                    <ul className="list-disc ml-3">
                      <li>Oil Paint</li>
                      <li>Water Colour</li>
                      <li>Colour Pencil</li>
                    </ul>

                    <h1 className="text-sm font-semibold  text-my-yellow">
                      DIGITAL PROGRAMS
                    </h1>
                    <ul className="list-disc ml-3">
                      <li>Procreate</li>
                      {/* <li>ADOBE ILLUSTRATOR</li> */}
                    </ul>

                    <h1 className="text-sm font-semibold  text-my-yellow">
                      NOTABLE PAST WORK
                    </h1>
                    <ul className="list-disc ml-3">
                      <li>Oil Paintings</li>
                      <li>Stop Motion Animation</li>
                    </ul>

                    <h1 className="text-sm font-semibold  text-my-yellow">
                      SOCIALS
                    </h1>
                    <ul className="list-disc ml-3">
                      <Link href="https://www.instagram.com/sheeshcat/">
                        <li>
                          <u>sheeshcat:</u> Cat Studies
                        </li>
                      </Link>
                      <li>bubblesarenotblue (tbc)</li>
                    </ul>
                  </section>
                  <p></p>
                  <div className=" flex flex-row justify-center items-center">
                    <Link href="/portfolio/art">
                      <button className="bg-white p-2 text-xs rounded text-yves-blue font-semibold align-center">
                        SEE MY WORK
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[28rem] cursor-pointer group perspective ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className=" flex-col items-center justify-center flex shadow-lg absolute w-full h-full backface-hidden bg-slate-200 text-black rounded-2xl">
                <div className="flex justify-center w-[18rem] h-[24rem] rounded-xl bg-magician bg-no-repeat bg-cover">
                  <div className="flex justify-center">
                    <h1 className="mt-8 text-white text-base">
                      WORK EXPERIENCE
                    </h1>
                  </div>
                </div>
                <div className=" flex mt-3 justify-center items-center h-6 w-full rounded-xl">
                  <h1 className="text-yves-blue text-base"> THE KNIGHT</h1>
                </div>
              </div>
              <div className=" items-center justify-center flex shadow-lg absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-200 rounded-2xl">
                <div className="w-[18rem] h-[26rem] flex-col flex  justify-center rounded-xl text-white bg-yves-blue">
                  <section className=" ml-5 mr-3 mb-3 text-xs flex flex-col gap-2 items-start ">
                    <div>
                      <p className="text-sm font-semibold text-my-yellow">
                        DESIGN INNOVATION INTERN
                      </p>
                      <p className=" font-thin ">THALES SOLUTIONS ASIA</p>
                      <p className=" ">
                        Design Thinking Workshops, Poster & Template Design,
                        Report Generation
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-my-yellow">
                        ARCHITECTURE INTERN
                      </p>
                      <p className="font-thin ">DP ARCHITECTS</p>
                      <p className=" ">SketchUp, Moodboards, Design Research</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-my-yellow">
                        MARKETING INTERN
                      </p>
                      <p className="font-thin ">DYNAOPTICS/OOWA</p>
                      <p className=" ">
                        Product Photography, Web Design, Customer Research
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-my-yellow">
                        ON-SITE INTERVIEWER
                      </p>
                      <p className=" font-thin ">SUTD</p>
                      <p className=" ">On-Site Interviews</p>
                    </div>
                    {/* <div>
                      <p className="text-sm font-semibold text-my-yellow">
                        RETAIL STAFF
                      </p>
                      <p className=" font-thin ">CAT SOCRATES</p>
                      <p className=" ">
                        CASHIERING, UPLOAD PRODUCTS ON SHOPIFY
                      </p>
                    </div> */}
                  </section>
                  <div className=" flex flex-row justify-center items-center">
                    <Link href="/about">
                      <button className=" bg-white p-2 text-xs rounded text-yves-blue font-semibold align-center">
                        SEE MORE
                      </button>
                    </Link>
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
