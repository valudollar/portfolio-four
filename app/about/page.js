import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <body>
        <Navbar />
        <header className=" mt-10 mb-10 flex justify-center text-yves-blue text-4xl">
          <h1> ABOUT</h1>
        </header>
        <section className=" mb-10 flex justify-center">
          <div className="flex flex-row gap-4">
            <div className="items-center justify-center shadow-md rounded-sm flex w-[9rem] h-[15rem] bg-slate-50">
              <div className="w-[8rem] h-[14rem] rounded-sm bg-slate-200"></div>
            </div>
            <div className="items-center justify-center  shadow-md  rounded-sm flex w-[9rem] h-[15rem] bg-slate-50">
              <div className="w-[8rem] h-[14rem] rounded-sm bg-slate-200"></div>
            </div>
            <div className="items-center justify-center  shadow-md   rounded-sm flex w-[9rem] h-[15rem] bg-slate-50">
              <div className="w-[8rem] h-[14rem] rounded-sm bg-slate-200"></div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
