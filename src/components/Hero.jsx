import React from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            STEP BY STEP
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              SPORT ACADEMY
            </span>
          </h1>
          <div className="space-y-2 mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-50">
              Pursue your{" "}
              <span className="font-bold text-yellow-300">SPORTING DREAM</span>
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-50">
              just like your{" "}
              <span className="font-bold text-yellow-300">ACADEMICS</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("programs")}
              className="group bg-white text-blue-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transform"
            >
              Explore Programs
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-white/90 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
