import { Hourglass } from "lucide-react";
import Image from "next/image";

// Theme - Noto Sans

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen bg-gradient-to-tl from-indigo-800 via-slate-900 to-indigo-950 overflow-hidden z-0">
      <div className="max-w-7xl lg:mx-auto px-5 md:px-10 xl:px-0 w-full z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen z-30">
          <section className="flex flex-col justify-center items-center z-40">
            <div className="pb-14">
              <h1 className="text-5xl font-semibold text-white flex md:hidden flex-row items-center gap-2">
                <Hourglass size={38} className="mt-0.5" /> TimeIt
              </h1>
              <p className="font-light tracking-wide text-indigo-300">
                Get the most out of your education
              </p>
            </div>
            {children}
          </section>
          <section className="hidden md:flex justify-end items-center flex-col gap-12">
            <div className="fnlex flex-col gap-2 w-full md:px-16">
              <h1 className="text-6xl font-semibold text-white flex flex-row items-center gap-2">
                <Hourglass size={46} className="mt-0.5" /> TimeIt
              </h1>
              <p className="font-light tracking-wide text-indigo-300">
                Get the most out of your education
              </p>
            </div>
            <Image
              src="/images/authImg.png"
              alt="Student Cartoon"
              width={500}
              height={500}
            />
          </section>
        </div>
      </div>

      <div className="pattern-dots pattern-indigo-700 pattern-bg-transparent pattern-size-8 pattern-opacity-20 h-screen w-full md:w-[50vw] absolute top-0 left-0 z-10" />
    </main>
  );
};

export default Layout;
