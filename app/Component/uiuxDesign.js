"use client";

export default function UiuxDesign() {
  const designs = [
    {
      title: "plant Care landing Page",
      description:
        " A modern plant care website designed in Figma, featuring a clean layout, vibrant colors, and user-friendly navigation.",
      image: "/plant-2.png",
      figmafile: "https://www.figma.com/design/hI4YVnXCTywl5YhprNmgXH/plant-care?node-id=0-1&t=HbkKMCcqAj0Qoinl-1"
    },
    {
      title: "Capture Studio",
      description:
        "A photography studio website designed in Figma, featuring elegant galleries, minimal UI, and user-friendly navigation.",
      image: "/studio-2.png",
      figmafile: "https://www.figma.com/design/j9ZKIEwHyuK8La85MfmUpf/Capture-Studio?node-id=0-1&t=uLYSl3PrQzZ6l4BV-1"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-12">
      <h1 className="text-4xl font-bold font-comfortaa text-center ">
        UI/UX Design Projects
      </h1>
      <div className="bg-yellow-300 h-1 w-54  mx-auto rounded-full mt-2"></div>
      </div>


      <div className="space-y-16 md:space-y-12">
        {designs.map((design, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-stretch ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1">
              <img
                src={design.image}
                alt={design.title}
                className="w-full  h-auto object-cover  "
              />
            </div>

            {/* Text */}
        <div className="flex-1 bg-gradient-to-r from-green-50 via-green-100 to-white
  h-auto w-full md:p-16 p-6 flex flex-col justify-center">
              <h2 className="md:text-[48px] text-3xl font-semibold font-comfortaa text-[#25282B] leading-tight">
                {design.title}
              </h2>
              <p className="mt-4 text-lg text-gray-700">{design.description}</p>

              <div className="mt-6 flex space-x-4">
                <a
                  href={design.figmafile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FDC435] text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  Figma File
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
