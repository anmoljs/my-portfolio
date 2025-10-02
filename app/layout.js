//import Particles from "./animations/partical";
import { Nunito, Poppins, Comfortaa } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio - Anmol Munir",
  description: "UI/UX Designer & Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${poppins.variable} ${comfortaa.variable} antialiased`}
      >
        <div className="bg-[#F9FAFF] min-h-screen">
{children}
        </div>
        
          
        
       
      </body>
    </html>
  );
}

