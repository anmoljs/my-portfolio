"use client";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between min-h-screen md:py-0 py-12 px-6 md:px-32 gap-10">
      {/* Left Side: Text */}
      <div className="md:w-1/2 max-w-xl mx-auto text-center md:text-left">
        <h1 className="text-xl font-bold font-comfortaa text-[#FDC435] capitalize">
          Frontend Web Developer & Designer
        </h1>

        <p className="text-4xl md:text-6xl font-medium font-comfortaa leading-tight capitalize mt-6">
          Hello, my name is Anmol Munir
        </p>

        <p className="text-xl font-medium font-comfortaa leading-relaxed mt-6">
          I’m a Frontend Web Developer and Designer, passionate about blending
          creativity with code. I build websites that are not only functional
          but also visually engaging.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-12">
          <a
  href="mailto:anmolasim.awan@gmail.com"
  className="bg-[#FDC435] text-black font-bold px-10 py-3 rounded-md transition duration-300"
>
  E-mail
</a>

          <a
                  href="https://www.linkedin.com/in/anmol-munir-a294212b8"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#FDC435] text-[#FDC435] font-bold px-10 py-3 rounded-md hover:bg-yellow-50 transition duration-300"
                >
                  LinkedIn
                </a>
                  
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/coding.png"
          alt="Coding illustration"
          className="w-[300px] md:w-[450px] lg:w-[500px] object-contain"
        />
      </div>
    </header>
  );
}
