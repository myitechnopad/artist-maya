import React, { useEffect, useState } from "react";

/* A images */
import A1 from "../assets/A1.jpeg";
import A2 from "../assets/A2.jpeg";
import A3 from "../assets/A3.jpeg";
import A4 from "../assets/A4.jpeg";
import A5 from "../assets/A5.jpeg";

/* FT images */
import FT1 from "../assets/FT1.jpeg";
import FT2 from "../assets/FT2.jpeg";
import FT3 from "../assets/FT3.jpeg";

/* g images */
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpeg";
import g6 from "../assets/g6.jpeg";
import g7 from "../assets/g7.jpeg";
import g8 from "../assets/g8.jpeg";
import g9 from "../assets/g9.jpeg";
import g10 from "../assets/g10.jpeg";
import g11 from "../assets/g11.jpeg";
import g12 from "../assets/g12.jpeg";
import g13 from "../assets/g13.jpeg";
import g14 from "../assets/g14.jpeg";
import g15 from "../assets/g15.jpeg";
import g16 from "../assets/g16.jpeg";
import g17 from "../assets/g17.jpeg";
import g19 from "../assets/g19.jpeg";
import g20 from "../assets/g20.jpeg";
import g21 from "../assets/g21.jpeg";
import g22 from "../assets/g22.jpeg";
import g23 from "../assets/g23.jpeg";

/* j images */
import j1 from "../assets/j1.jpeg";
import j2 from "../assets/j2.jpeg";
import j3 from "../assets/j3.jpeg";
import j4 from "../assets/j4.jpeg";
import j5 from "../assets/j5.jpeg";
import j6 from "../assets/j6.jpeg";
import j7 from "../assets/j7.jpeg";
import j8 from "../assets/j8.jpeg";

/* m images */
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";

/* n images */
import n1 from "../assets/n1.jpeg";
import n2 from "../assets/n2.jpeg";
import n3 from "../assets/n3.jpeg";
import n4 from "../assets/n4.jpeg";
import n5 from "../assets/n5.jpeg";
import n7 from "../assets/n7.jpeg";
import n8 from "../assets/n8.jpeg";
import n9 from "../assets/n9.jpeg";
import n10 from "../assets/n10.jpeg";
import n11 from "../assets/n11.jpeg";
import n12 from "../assets/n12.jpeg";
import n13 from "../assets/n13.jpeg";
import n14 from "../assets/n14.jpeg";
import n15 from "../assets/n15.jpeg";
import n16 from "../assets/n16.jpeg";
import n17 from "../assets/n17.jpeg";

/* T images */
import T1 from "../assets/T1.jpeg";
import T2 from "../assets/T2.jpeg";
import T3 from "../assets/T3.jpeg";
import T4 from "../assets/T4.jpeg";
import T5 from "../assets/T5.jpeg";
import T6 from "../assets/T6.jpeg";

const images = [
  m2, j3, n15, n14, j4, j5, j6, j7, j8,
  g7, g8, g9, g10, g11, g12, g13, g14, j1, j2,
  A1, A2, A3, A4, A5, m3,
  FT1, FT2, FT3,
  g1, g2, g3, g4, g5, g6,
  g15, g16, g17, g19, g20, g21, g22, g23,
  n1, n2, n3, n4, n5,
  n7, n8, n9, n10, n11, n12, n13, n16, n17,
  T1, T2, T3, T4, T5, T6,
];

const Gallery: React.FC = () => {
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
    <section id="gallery" className="scroll-mt-24 px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center font-serif text-4xl md:text-6xl">
          Gallery
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
                alt={`Gallery ${index + 1}`}
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
            alt="Selected gallery"
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

export default Gallery;