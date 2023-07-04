"use client";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{
            ease: "linear",
            type: "spring",
            stiffness: 50,
            duration: 2,
          }}
        >
          <div className="flex flex-row ml-5 mr-5 mt-5 ">
            <div className="w-[20rem] h-[15rem] bg-black"></div>
            <div className=" w-[40rem]  flex flex-col flex-wrap ml-20 mr-10 text-yves-blue gap-3">
              <p className="">
                hello! my name is valerie, but everyone calls me valu (vah-loo)
              </p>
              <p>
                I'm currently majoring in
                <b> Design & Artifical Intelligence </b>
                at Singapore University of Technology and Design, graduating in
                May 2024
              </p>
              <p>
                I'm an aspiring creative developer and illustrator, and I hope
                to bring to the world lots of fun, colour and excitement!
              </p>
              <p>
                Believing in a multi-disciplinary approach to design, I put on
                different hats as and when I'm needed to!
              </p>
            </div>
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
        >
          <div className="flex flex-col m-5 text-yves-blue">
            <h1 className="font-bold">education</h1>
            <ul className=" ml-5 list-disc">
              <li>
                2020-2024: Singapore University of Technology and Design (SUTD)
              </li>
              <li>2018-2019: Raffles Institution</li>
            </ul>
          </div>
          <div className="flex flex-col m-5 text-yves-blue">
            <h1 className="font-bold">achievements</h1>
            <ul className=" ml-5 list-disc">
              <li>2020: SUTD Design and AI Challenge - 1st</li>
              <li>
                2020: SUTD X Singapore Cruise Center Design Challenge - 1st
              </li>
              <li>2020: NUS Ideate Play Category - 2nd </li>
              <li>2017: Odyssey of the Mind World Finals - 12th </li>
              <li>2016: Odyssey of the Mind World Finals - 2nd </li>
            </ul>
          </div>
          <div className="flex flex-col m-5 text-yves-blue">
            <h1 className="font-bold">skills/tools/programs</h1>
            <ul className=" ml-5 list-disc">
              <li>Programming: HTML, CSS, Javascript, Python</li>
              <li>CAD: Fusion360, Rhino, Sketchup</li>
              <li>Design: Procreate, Illustrator</li>
            </ul>
          </div>
          <div className="flex flex-col m-5 text-yves-blue">
            <h1 className="font-bold">industry experience</h1>
            <ul className=" ml-5 list-disc">
              <li>2023: Systems Design Studio - Grab</li>
              <li>2022: Design Innovation Intern - Thales </li>
              <li>2022: Service Design Studio - SUTD, Google</li>
              <li>2022: Product Design Studio - dnata</li>
              <li>2022: Singapore Mentorship Program - Peasy </li>
            </ul>
          </div>{" "}
          <div className="flex flex-col m-5 text-yves-blue">
            <h1 className="font-bold">research programs</h1>
            <ul className=" ml-5 list-disc">
              <li>
                2021-2022: Livestream selling Market Research - Singapore
                Mentorship Program
              </li>
              <li>
                2021-2023: Airport Experience Research - SUTD Undergraduate
                Research Opportunities Program
              </li>
            </ul>
          </div>
          <div className="flex flex-col m-5 text-yves-blue">
            <h1 className="font-bold">co-curriculars</h1>
            <ul className=" ml-5 list-disc">
              <li></li>
              <li></li>
            </ul>
          </div>
        </motion.section>
        <Footer />
      </body>
    </>
  );
}
