"use client";

export default function Projects() {
  const projects = [
    {
      title: "Cyber Web App",
      description:
        "Cyber – Apple Products Web App: Designed and developed as a Frontend Developer & Designer using React, Tailwind, and Figma, featuring product showcase, shopping cart, and a fully responsive interface.",
      image: "/cyber.png",
      live: "https://vercel.com/anmoljs-projects/cyberapp", 
      github: "https://github.com/anmoljs/cyber-web-app.git", 
    },
    {
      title: "Recipedia",
      description:
        "Recipedia is a modern recipe-sharing web app that helps users discover, save, and organize dishes from around the world. Built with Next.js and Tailwind CSS, it focuses on clean UI and smooth user experience.",
      image: "/recipedia-2.png",
      live: "https://vercel.com/anmoljs-projects/recipedia",
      github: "https://github.com/anmoljs/recipedia",
    },
    {
      title: "Explore Kashmir",
      description:
        "A digital journey through paradise on earth — Explore Kashmir lets users discover stunning landscapes, local culture, and hidden gems of the valley with an immersive web experience.",
      image: "/kashmir.png",
      live: "https://vercel.com/anmoljs-projects/explore-kashmir-v2mf",
      github: "https://github.com/anmoljs/explore-kashmir",
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-comfortaa text-center">
          Projects
        </h1>
        <div className="bg-yellow-300 h-1 w-24 mx-auto rounded-full mt-2"></div>
      </div>

      <div className="space-y-16 md:space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-stretch ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Box */}
            <div className="flex-1 h-[500px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* Text Box */}
            <div className="flex-1 h-[500px] bg-gradient-to-r from-green-50 via-green-100 to-white p-8 md:p-12 shadow-lg flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-semibold font-comfortaa capitalize text-[#25282B]">
                {project.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#25282B]">
                {project.description}
              </p>

              <div className="mt-6 flex gap-4">
                {/* View Live Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FDC435] text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  View Live
                </a>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#FDC435] text-[#FDC435] font-bold px-6 py-2 rounded-md hover:bg-yellow-50 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
