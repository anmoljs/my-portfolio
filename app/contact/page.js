import Navbar from "../Component/Navbar";
import { FaFacebookF, FaInstagram, FaGithub ,  FaEnvelope,  } from "react-icons/fa";

function ContactPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="max-w-2xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-[48px] font-bold capitalize font-comfortaa mb-6">
            Contact Me
          </h1>
          <p className="text-lg p-2 leading-relaxed mb-8 text-black">
            “I’m currently open to job opportunities and exciting projects. If you’re a recruiter or looking to collaborate, feel free to reach out.”
          </p>

          {/* Contact Form */}
          <form className="space-y-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#FDC435] text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
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

export default ContactPage;
 