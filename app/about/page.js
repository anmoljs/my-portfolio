import Navbar from "../Component/Navbar";
import { FaFacebookF, FaInstagram, FaGithub ,  FaEnvelope,  } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Navbar */}
      <Navbar />

     

      {/* Bottom Right Blob */}
      <img
  src="/blob-bottom.png"
  alt="Yellow Blob"
  className="absolute bottom-0 right-0 w-[400px] z-0 object-contain"
/>


      {/* About Section */}
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/girl-2.png"
            alt="Profile"
            className="w-[400px] rounded-lg  relative z-10 object-contain  md:right-20"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-left">
          <h1 className="text-[48px] font-bold capitalize font-comfortaa mb-6 ">
            About Me
          </h1>
          <p className="text-lg leading-relaxed mb-8 ">
            “I’m Anmol Munir, a frontend web developer and designer who believes
            in blending creativity with functionality. My journey started with a
            deep interest in design, which gradually evolved into a passion for
            coding. Over time, I have developed a skillset that allows me to
            build websites which are not only visually appealing but also highly
            functional and user-friendly.”
          </p>

          <a 
  href=" https://drive.google.com/file/d/1J137suO39Asg5CO6mwCg0IqS8Gp_49r5/view?usp=drivesdk"
  target="_blank" 
  rel="noopener noreferrer"
>
  <button  
    className="bg-[#FDC435] text-black font-bold px-8 py-3 rounded-md hover:bg-yellow-500 transition duration-300 shadow-md">
      Resume
  </button>
</a>

        </div>
      </div>
      <footer className="flex flex-col items-center py-10 space-y-4">
        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-yellow-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-yellow-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:your@email.com"
            className=" hover:text-yellow-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="mailto:your@email.com"
            className=" hover:text-yellow-500 transition"
          >
            < FaGithub   />
          </a>
        </div>
        {/* Copyright */}
        <p className="text-sm ">© Anmol Munir 2025</p>
      </footer>
    </div>
  );
}

export default AboutPage;
