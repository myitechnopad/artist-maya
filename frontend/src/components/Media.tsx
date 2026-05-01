import React, { useEffect, useState } from "react";

/* A images */

/* FT images */
import FT1 from "../assets/FT1.jpeg";
import FT2 from "../assets/FT2.jpeg";
import FT3 from "../assets/FT3.jpeg";

/* g images */
import g3 from "../assets/g3.jpeg";


/* j images */
import j1 from "../assets/j1.jpeg";
import j2 from "../assets/j2.jpeg";
import j3 from "../assets/j3.jpeg";
import j4 from "../assets/j4.jpeg";


/* m images */

/* n images */



/* T images */
import T1 from "../assets/T1.jpeg";
import T2 from "../assets/T2.jpeg";
import T3 from "../assets/T3.jpeg";


const images = [
  j3, j4, 
  j1, j2,
  FT1, FT2, FT3,g3,
  T1, T2, T3,
];

const Media: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const prevImage = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section id="media" className="scroll-mt-24 px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center font-serif text-4xl md:text-6xl">
          Media | Press & Appearances
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openImage(index)}
              className="group overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt={`Media ${index + 1}`}
                className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          onClick={closeImage}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
        >
          <img
            src={images[selectedIndex]}
            alt="Selected media"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-5 text-4xl text-white"
          >
            ❮
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-5 text-4xl text-white"
          >
            ❯
          </button>

          <button
            type="button"
            onClick={closeImage}
            className="absolute right-6 top-6 text-4xl text-white"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Media;