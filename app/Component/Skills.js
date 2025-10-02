"use client";
import { useState } from "react";
import TextPressure from "../text/TextPressure";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "/html.png",
      gradient: "bg-gradient-to-r from-[#E14E1D]/70 to-[#FFCC33]/70",
    },
    {
      name: "CSS",
      icon: "/css.png",
      gradient: "bg-gradient-to-r from-[#0277BD]/70 to-[#0277BD]/50",
    },
    {
      name: "JavaScript",
      icon: "/js.png",
      gradient: "bg-gradient-to-r from-[#F5DE19]/70 to-[#F5DE19]/50",
      
    },
    {
      name: "React",
      icon: "/react.png",
      gradient: "bg-gradient-to-r from-[#00D8FF]/70 to-[#00D8FF]/30",
    },
    {
      name: "Next.js",
      icon: "/next js.png",
      gradient: "bg-gradient-to-r from-[#000000]/70 to-[#434343]/65",
    },
    {
      name: "TailwindCSS",
      icon: "/tailwind.png",
      gradient: "bg-gradient-to-r from-[#02AAB0]/70 to-[#00CDAC]/50",
    },
    {
      name: "Figma",
      icon: "/figma.png",
      gradient: "bg-gradient-t-r from-[#A259FF]/80 to-[#F24E1E]/50",
    },
    {
      name: "GitHub",
      icon: "/git.png",
      gradient: "bg-gradient-t-r from-[#5895D2]/80 to-[#2D4C6C]/50",
    },
    {
      name: "Framer Motion",
      icon: "/framer.png",
      gradient: "bg-gradient-t-r from-gray-800/75 to-gray-700/50",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-comfortaa text-center  mb-4">
        Skills & Tools
      </h1>
      <p className="text-center  max-w-2xl mx-auto">
        Technologies and design tools I use to craft clean, functional, and
        visually engaging websites.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

// ✅ Separate Card Component
function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-40 h-40 flex flex-col items-center justify-center mx-auto 
                  bg-white rounded-full shadow-lg 
                  transition transform hover:scale-110 
                  hover:bg-gradient-to-b hover:${skill.gradient} 
                  duration-500 cursor-pointer group`}
    >
      {/* Icon */}
      <img
        src={skill.icon}
        alt={skill.name}
        className="h-14 w-14 mb-2 transition duration-500 group-hover:scale-110"
      />

      {/* Text */}
      {!hovered ? (
        <p className="text- font-semibold text-[#25282B] group-hover:text-white transition duration-500">
          {skill.name}
        </p>
      ) : (
        <div style={{ position: "relative", height: "50px", width: "50%" }}>
          <TextPressure
            text={skill.name}
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={false}
            textColor="#ffffff"
            strokeColor="#000000"
            minFontSize={8}
          />
        </div>
      )}
    </div>
  );
}
