"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/17.webp";
import Img2 from "../../public/assets/img/homepage/6.webp";
import Img3 from "../../public/assets/img/homepage/5.webp";
import Img4 from "../../public/assets/img/homepage/16.webp";

const solutions = [
  {
    title: "Launch System",
    description: "Get initial traction.",
    image: Img1,
    placeholder: false,
  },
  {
    title: "Growth Engine",
    description: "Scale patient flow.",
    image: Img2,
    placeholder: false,
  },
  {
    title: "PatientFlow AI",
    description: "Maximise every lead.",
    image: Img3,
    placeholder: false,
  },
  {
    title: "Authority Builder",
    description: "Build long-term trust.",
    image: Img4,
    placeholder: false,
  },
  {
    title: "Intelligence Dashboard",
    description: "Real-time growth visibility.",
    image: Img2,
    placeholder: false,
  },
];

export default function CoreSolutions() {
  return (
    <section className="relative py-16 md:py-20">
      <h3
        className="
pointer-events-none max-w-full overflow-hidden
tracking-[-4px] whitespace-nowrap text-slate-200 opacity-85 z-[1]
text-[clamp(60px,10vw,120px)] font-extrabold
absolute top-[40px] left-1/2 -translate-x-1/2
[mask-image:linear-gradient(#000_40%,#0000_100%)]
[-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]
"
      >
        Growth Solutions
      </h3>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Growth Solutions For Healthcare
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The 5-Step Clinic Growth System
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div className="flex md:flex-row flex-col md:flex-wrap justify-center gap-6">
          <div className="relative w-full">
            <div className="absolute inset-x-0 top-1/2 h-[4px] w-[90%] mx-auto bg-[#ef2f6b] opacity-90 z-0" />
            <div className="flex md:flex-row flex-col md:flex-wrap justify-center gap-6 relative z-10">
              {solutions.map((solution, index) => (
                <article
                  key={solution.title}
                  className="bg-white md:w-[18%] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="relative h-48 bg-gray-200">
                    {solution.placeholder ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full" />
                      </div>
                    ) : (
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      {solution.title === "Design" ? (
                        <>Design</>
                      ) : (
                        solution.title
                      )}
                    </h3>

                    <p className="text-base text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mt-10">
            From first click to confirmed booking, we build and manage the
            entire system that grows your clinic.
          </p>
        </div>
      </div>
    </section>
  );
}
