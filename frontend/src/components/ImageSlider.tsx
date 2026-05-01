import React, { useState, useEffect } from "react";

import mayaImg from "../assets/A5.jpeg";

const images = [mayaImg];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🔹 Background */}
      <div className="absolute inset-0">
        <img
          src={images[current]}
          alt="Maya Sharma"
          className="w-full h-full object-cover scale-105 animate-[zoom_12s_ease-in-out_infinite]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* 🔥 TOP CONTENT */}
      <div className="absolute top-20 left-1/2 z-10 -translate-x-1/2 text-center px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-300 mb-4">
          Actor • Performer • Artist
        </p>

        {/* <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight drop-shadow-xl">
          Perform • Transform • Inspire
        </h1> */}
        <h3 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight drop-shadow-xl whitespace-nowrap">
  Perform • Transform • Inspire
</h3>

        {/* <div className="mt-6 h-[1px] w-24 bg-white/50 mx-auto" /> */}
      </div>

      {/* 🔥 BOTTOM CONTENT */}
      {/* <div className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-center px-6"> */}
      <div className="absolute bottom-[40px] left-1/2 z-10 -translate-x-1/2 text-center px-6">
        <p className="text-white/90 text-sm sm:text-lg max-w-2xl leading-relaxed">
          A journey through theatre and cinema—driven by craft, curiosity,
          and the pursuit of meaningful storytelling.
        </p>

    
      </div>

      {/* 🔹 Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ❯
          </button>
        </>
      )}

      {/* 🔥 Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />

      {/* 🔥 Zoom Animation */}
      <style>
        {`
          @keyframes zoom {
            0%, 100% { transform: scale(1.05); }
            50% { transform: scale(1.15); }
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;