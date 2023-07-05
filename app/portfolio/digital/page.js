"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
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
            WEB/APP PROJECTS
          </h1>
        </header>

        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{
            ease: "linear",
            type: "spring",
            stiffness: 50,
            duration: 2,
          }}
          className="flex justify-center items-center space-x-5 mt-10 flex-wrap mb-10 flex-row"
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
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap space-x-10  "
                id="row1"
              >
                <div className="min-w-[22rem] h-[20rem] bg-sdscover bg-cover bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-google1 bg-cover bg-no-repeat bg-center"></div>
                <div className="min-w-[24rem] h-[20rem] bg-sdscreateform bg-cover bg-no-repeat bg-center"></div>

                {/* <div className="min-w-[20rem] h-[20rem] bg-sdscourse bg-cover bg-no-repeat bg-center"></div> */}

                <div className="min-w-[26rem] h-[20rem] bg-sdscourse2 bg-cover bg-no-repeat bg-center"></div>
                {/* <div className="min-w-[20rem] h-[20rem] bg-sdsfillform bg-cover bg-no-repeat bg-center"></div> */}
                <div className="min-w-[20rem] h-[20rem] bg-sdsprofile bg-cover bg-no-repeat bg-center"></div>
                <div className="min-w-[28rem] h-[20rem] bg-sdsstudent bg-cover bg-no-repeat bg-center"></div>
                <div className="min-w-[20rem] h-[20rem] bg-google2  bg-cover bg-no-repeat bg-center"></div>
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
          <div className=" w-[20rem] h-[20rem] space-x-2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue">
              Peer Evaluation Platform
            </h1>
            <h1 className="font-light text-sm"> Mentored by Google & SUTD</h1>
            <p>
              <u>My Contributions</u>
            </p>
            <div className="flex flex-col space-x-1">
              <p>
                <b>Front-End Development</b>: ReactJS, Javascript, CSS,
                Bootstrap, Material UI
              </p>
              <p>
                <b>Test Driven Development</b>: Scenario and Feature Writing,
                Selenium & Cucumber
              </p>
              <p>
                <b>UIUX</b>: Figma Prototype, Storyboard for User Stories,
                Stakeholder Analysis
              </p>
            </div>
            <p className="font-light text-center text-sm">
              Project spanned across 14 weeks and 4 sprint cycles using Agile
              Methology
            </p>
            <Link href="https://sites.google.com/view/sds-team-4/home">
              <button className=" text-yves-blue text-base hover:underline decoration-my-yellow decoration-2">
                View Features
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
          className="flex justify-center items-center space-x-10 mt-20 flex-wrap mb-10 flex-row"
        >
          <div className=" w-[20rem] h-[20rem] space-x-2flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue text-center">
              Ride Hailing Simulation for Profit Estimation
            </h1>
            <h1 className="font-light"> Partnered with Grab</h1>
            <p>
              <u>My Contributions</u>
            </p>
            <div className="flex flex-col space-x-1">
              <p>
                <b>Agent-Based Modelling & Animated Simulation</b>: ReactJS,
                Mapbox GL JS, Javascript, CSS
              </p>
              <p>
                <b>Design Thinking & Systems Design</b>: Stakeholder Analysis,
                User Personas, State Diagrams, Discrete Event Simulation
              </p>
            </div>
            <p className="font-light text-sm text-center">
              A profit estimation tool based on one's preferred driving patterns
              to help Grab onboard more drivers in order to meet their demand
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
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap space-x-10 "
                id="row2"
              >
                {/* <div className="min-w-[30rem] h-[20rem] bg-sim1 bg-contain bg-no-repeat bg-center "></div> */}

                <div className="min-w-[20rem] h-[20rem] bg-sim3 bg-cover bg-no-repeat bg-right "></div>
                <div className="min-w-[37rem] h-[20rem] bg-sim5 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[20rem] h-[20rem] bg-sim4 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[28rem] h-[20rem] bg-state bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[28rem] h-[20rem] bg-sim2 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[28rem] h-[20rem] bg-up1 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[28rem] h-[20rem] bg-up2 bg-contain bg-no-repeat bg-center "></div>
                <div className="min-w-[28rem] h-[20rem] bg-up3 bg-contain bg-no-repeat bg-center "></div>
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

        <section className="flex justify-center items-center space-x-10 mt-20 flex-wrap mb-10 flex-row">
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
                className="flex flex-nowrap justify-start flex-row items-center overflow-x-hidden whitespace-nowrap space-x-10  "
                id="row3"
              >
                <div className="min-w-[20rem] h-[20rem] bg-weightlift bg-cover bg-no-repeat bg-center "></div>
                <div className="min-w-[10rem] h-[20rem] bg-hci3 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[10rem] h-[20rem] bg-hci2 bg-contain bg-no-repeat bg-center"></div>{" "}
                <div className="min-w-[10rem] h-[20rem] bg-hci1 bg-contain bg-no-repeat bg-center"></div>
                {/* <div className="min-w-[20rem] h-[20rem] bg-hci4 bg-contain bg-no-repeat bg-center"></div> */}
                {/* <div className="min-w-[20rem] h-[20rem] bg-hci6 bg-contain bg-no-repeat bg-center"></div> */}
                <div className="min-w-[10rem] h-[20rem] bg-hci7 bg-contain bg-no-repeat bg-center"></div>
                <div className="min-w-[10rem] h-[20rem] bg-hci5 bg-contain bg-no-repeat bg-center"></div>
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
          <div className=" w-[20rem] h-[20rem] space-x-10 flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-yves-blue text-center">
              Deadlift Form Checker and Fitness Journal
            </h1>

            <p>
              <u>My Contributions</u>
            </p>
            <div className="flex flex-col space-x-1">
              <p>
                <b>Front-End Development</b>: ReactJS, Javascript, CSS, Mantine
                UI
              </p>
              <p>
                <b>UIUX</b>: User Study, Web Experiment, Hieuristic Evaluation,
                Paper Prototyping, Quantitative & Qualitative Evaluation
              </p>
            </div>
            <p className="font-light text-center text-sm">
              Module: Human Computer Interactions and AI
            </p>
            <Link href="https://dai.sutd.edu.sg/dai-projects/weightlift-buddy/">
              <button className="text-yves-blue text-base hover:underline decoration-my-yellow decoration-2">
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
