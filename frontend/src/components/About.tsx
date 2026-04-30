// src/pages/About.tsx
import React, { useEffect, useState } from "react";

import A3 from "../assets/A3.jpeg";
import g21 from "../assets/g21.jpeg";
import A4 from "../assets/A4.jpeg";
import g17 from "../assets/g17.jpeg";
import A5 from "../assets/A5.jpeg";

const aboutImages = [A3, g21, A4, g17, A5];

const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <p className="mb-2 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
          Introduction
        </p>

        <h2 className="mb-14 text-center font-serif text-4xl text-black md:text-6xl">
          About
        </h2>

        {/* Glass Card */}
        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">

            {/* 🔥 IMAGE SLIDER FIXED */}
            <div className="flex w-full justify-center md:w-1/2">
              <div className="group relative h-[430px] w-full max-w-[390px] overflow-hidden rounded-[1.8rem] border border-white/30 bg-black p-3 shadow-2xl md:h-[520px]">

                {aboutImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Maya Sharma ${index + 1}`}
                    className={`
                      absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)]
                      rounded-[1.2rem] object-cover
                      transition-all duration-700 ease-in-out
                      ${index === currentImage
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0"
                      }
                      grayscale group-hover:grayscale-0
                    `}
                  />
                ))}

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-3 rounded-[1.2rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Dots */}
                <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? "w-6 bg-white"
                          : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
{/* RIGHT CONTENT */}
<div className="w-full leading-relaxed text-gray-800 md:w-1/2">
  <div className="rounded-[1.8rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur md:p-8 overflow-y-auto max-h-[520px]">

    <h3 className="mb-4 font-serif text-3xl font-semibold text-black md:text-4xl">
      Maya Sharma
    </h3>

    <p className="mb-4 text-[15px] leading-7 text-gray-700">
      <span className="font-semibold">Maya Sharma</span> is an actor whose journey in the performing arts began in 2004 with theatre—an enduring foundation that continues to shape her craft today. Over the years, she has collaborated with eminent theatre directors and performed in more than 20 productions across India, building a strong and versatile stage presence.
    </p>

    <p className="mb-4 text-[15px] leading-7 text-gray-700">
      Beyond theatre, Maya has worked extensively in cinema and the film industry, with experience spanning television series, films, ad films, short films, and voiceovers. Her creative exploration also led her into filmmaking, where she spent a period as a creative director for a production house. During this time, she directed documentary films and took on multiple roles—writing, editing, cinematography, and acting—demonstrating a deep understanding of storytelling from every angle.
    </p>

    <p className="mb-4 text-[15px] leading-7 text-gray-700">
      For over a decade, Maya has also been actively involved in casting, alongside contributing to films, ad films, and voice work. She has additionally handled production responsibilities as a creative producer, further broadening her experience within the industry.
    </p>

    <p className="mb-4 text-[15px] leading-7 text-gray-700">
      In recent years, Maya has returned her primary focus to acting, performing across cities in India. She is currently working on two theatre productions:{" "}
      <span className="font-semibold text-black">
        Jaane Pehchane Anjaane
      </span>
      , produced by Anupam Kher Productions, and{" "}
      <span className="font-semibold text-black">
        Maai Ki Aakhiri Chhath
      </span>
      , where she plays the lead role of Maai.
    </p>

    <p className="text-[15px] leading-7 text-gray-700">
      Grounded in her journey and driven by a constant desire to grow, Maya continues to evolve as an artist—committed to learning, refining her craft, and contributing meaningfully to both theatre and cinema.
    </p>

  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;