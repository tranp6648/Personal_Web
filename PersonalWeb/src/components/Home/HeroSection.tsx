import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#050816] text-white py-20 px-4 md:px-10 text-center relative overflow-hidden">
      <p className="text-green-500 text-xl md:text-2xl font-semibold">Hello World! I'm</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
        Trần Nguyễn Thanh <span className="text-white">&nbsp;Phong</span>
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-gray-300 leading-relaxed">
        Crafting elegant solutions to complex problems with clean code and innovative thinking.
        Welcome to my personal dev workspace where ideas come to life.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2 transition">
          <span>&lt;/&gt;</span> View Projects
        </button>
        <button className="border border-green-500 hover:bg-gray-800 text-green-400 px-5 py-2 rounded-md font-semibold transition">
          Contact Me
        </button>
      </div>

      <div className="w-full xl:w-3/4 mx-auto relative mb-12 max-w-screen-xl">
        <div className="relative w-full aspect-video">
          {/* Background glow */}
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-purple-400/50 blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-green-400/50 blur-3xl"></div>

          {/* Platform base */}
          <div className="absolute bottom-9 w-full h-40 border-[0.4rem] rounded-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-glow"></div>

          {/* Main terminal window */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[80%] md:w-3/5 aspect-video bg-black rounded-lg border border-gray-600 shadow-lg flex mb-24">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1/2 h-4 bg-gray-700 rounded-b-sm"></div>
            <div className="flex-1 p-4 bg-gray-700 relative">
              <div className="absolute inset-2 bg-black rounded border border-gray-700 flex flex-col overflow-hidden">
                <div className="bg-gray-800 p-1 flex gap-1">
                  <div className="flex gap-1 ml-1">
                    <div className="w-2 h-2 bg-red-500 rounded"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded"></div>
                    <div className="w-2 h-2 bg-green-500 rounded"></div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mx-auto font-code">john@dev-workspace</div>
                </div>
                <div className="p-2 flex-1 text-xs sm:text-sm">
                  <div className="p-4 font-mono text-left leading-relaxed space-y-1">
                    <div className="text-yellow-400">tranp6648@gmail.com</div>
                    <div className="text-gray-500">--------------------</div>
                    <div><span className="text-blue-400">OS:</span> Ubuntu 22.04 LTS</div>
                    <div><span className="text-pink-500">Host:</span> Dell Latitude 7420</div>
                    <div><span className="text-purple-400">JDK:</span> OpenJDK 17</div>
                    <div><span className="text-rose-400">Uptime:</span> 12 days, 6 hours</div>
                    <div><span className="text-cyan-400">Languages:</span> Java, SQL</div>
                    <div><span className="text-fuchsia-400">Editor:</span> IntelliJ IDEA / VSCode</div>
                    <div><span className="text-indigo-400">Frameworks:</span> Spring Boot, Hibernate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Java mini-window (hidden on small screen) */}
          <div className="hidden sm:block absolute bottom-2 right-4 w-11/12 sm:w-2/5 aspect-video animate-fadeInRight delay-300">
            <div className="absolute bottom-2 sm:bottom-7 w-full h-4 bg-gray-700 right-0 rounded-b-lg"></div>
            <div className="absolute bottom-[25%] w-full aspect-video bg-gray-700 border border-gray-700 rounded-t-lg overflow-hidden flex-col origin-bottom px-1 flex">
              <div className="h-1 bg-gray-700 flex justify-center items-center">
                <div className="w-1 h-1 bg-gray-500 rounded"></div>
              </div>
              <div className="bg-[#1e1e2f] rounded-xl shadow-lg overflow-hidden w-full max-w-md mx-auto">
                <div className="bg-[#2a2a40] flex items-center gap-2 px-4 py-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-black p-4">
                  <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

        

          {/* Coffee mug */}
          <div className="absolute bottom-4 left-2 sm:left-4 w-12 h-16 animate-fadeInUp delay-[100ms]">
            <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
            <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
            <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
              <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
            </div>
            <div className="absolute w-6 h-1 bg-white/20 rounded left-3 top-3"></div>
            <div className="absolute w-1.5 h-4 bg-white/30 left-4 top-[0.5rem] rounded animate-floatOut delay-[0s]"></div>
            <div className="absolute w-1.5 h-4 bg-white/30 left-6 top-4 rounded animate-floatOut delay-[0.5s]"></div>
            <div className="absolute w-1.5 h-4 bg-white/30 left-8 top-3 rounded animate-floatOut delay-[1s]"></div>
            <div className="absolute left-2 bottom-3 text-[8px] tracking-widest">COFFEE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
