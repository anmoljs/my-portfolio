"use client"
export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text */}
        <div className="flex-1">
          <h1 className="text-xl font-bold font-comfortaa text-[#FDC435] capitalize">
            

            Frontend Web Developer & Designer
          </h1>

          <p className="text-4xl md:text-6xl font-medium font-comfortaa max-w-2xl leading-tight capitalize  mt-6">
             hello,my name is anmol munir
          </p>
          

          <p className="text-xl font-medium font-comfortaa max-w-2xl leading-relaxed  mt-6">
            I’m a Frontend Web Developer and Designer, passionate about blending
            creativity with code. I build websites that are not only functional
            but also visually engaging.
          </p>
          <div className="flex-1 block py-12 justify-center md:hidden md:justify-end md:ml-44">
          <img
            src="/header.png"
            alt="profile"
            className="w-[400px] md:w-[500px] lg:w-[600px] h-auto  object-cover"
          />
        </div>

          <div className="flex space-x-6 mt-12">
            <button className="bg-[#FDC435] text-nowrap text-lg font-bold font-comfortaa py-3 px-10 rounded-md  hover:bg-yellow-500 transition duration-300">
            projects
            </button>
            <button className="border-2 border-[#FDC435] text-lg font-bold font-comfortaa py-3 px-10 rounded-md hover:bg-yellow-500 transition duration-300 ">
              LinkedIn
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 hidden md:block justify-center md:justify-end md:ml-44">
          <img
            src="/header.png"
            alt="profile"
            className="w-[400px] md:w-[500px] lg:w-[600px] h-auto  object-cover"
          />
        </div>
      </div>
    </header>
  );
}
