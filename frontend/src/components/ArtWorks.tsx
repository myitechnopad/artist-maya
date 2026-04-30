// src/components/ArtWorks.tsx
import React from "react";

import m2 from "../assets/m3.jpeg";

import j12 from "../assets/j12.jpeg";
import g6 from "../assets/g6.jpeg";
import g8 from "../assets/g8.jpeg";

const artGallery = [
  {
    img: j12,
    title: "Radha Krishna Expression",
    desc: "A detailed Mithila-inspired artwork reflecting devotion, mythology, and intricate storytelling through colors and expressions.",
  },
  {
    img: g6,
    title: "Mithila Art in Progress",
    desc: "A glimpse into Maya’s meditative creative process—where patience, focus, and tradition come together.",
  },
  {
    img: g8,
    title: "Cultural Motifs",
    desc: "A vibrant composition inspired by Indian folk patterns, symbolic motifs, and traditional visual storytelling.",
  },
];

const ArtWorks: React.FC = () => {
  return (
    <section
      id="artworks"
      className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-20"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
          Visual Art
        </p>

        <h2 className="mb-4 text-center font-serif text-4xl font-semibold text-black md:text-6xl">
          Artworks | Mithila Paintings
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-600">
          A personal journey into Madhubani art, rooted in tradition, patience,
          and heartfelt creative expression.
        </p>

        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
            <div className="rounded-[1.7rem] border border-white/30 bg-black p-3 shadow-2xl">
              <img
                src={m2}
                alt="Maya Sharma Art Works"
                className="h-[460px] w-full rounded-[1.2rem] object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </div>

            <div className="rounded-[1.7rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                Mithila Paintings / Madhubani Art
              </p>

              <h3 className="mt-2 font-serif text-4xl font-semibold text-black md:text-5xl">
                Maya Sharma
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-gray-700">
                Alongside her work as an actor, Maya Sharma nurtures a deep
                connection with visual art through Mithila paintings—also known
                as Madhubani art—an age-old folk tradition rooted in the cultural
                heritage of Bihar, India.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-gray-700">
                Born in Patna, Maya has always felt a natural affinity toward
                this art form. The raw, earthy aesthetic and intricate patterns
                of Mithila painting fascinated her from an early age, quietly
                drawing her toward it.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-gray-700">
                During the COVID period, she found the time and space to truly
                explore this long-held connection. What began as curiosity
                evolved into a personal and meditative practice filled with
                detailed lines, symbolic motifs, and vibrant colors.
              </p>

              <a
                href="https://instagram.com/mayasharma_artist"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800"
              >
                View on Instagram
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur">
            <h4 className="mb-3 font-serif text-2xl font-semibold text-black">
              Rooted, Reflective & Personal
            </h4>

            <p className="text-sm leading-7 text-gray-700">
              Each piece Maya creates is originally designed by her, emerging
              from an intuitive and heartfelt space that reflects both tradition
              and her own artistic voice. Her work has also extended into
              commissioned pieces, including artworks based on Radha and Krishna.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-700">
              Through Mithila painting, Maya has discovered another dimension of
              her creativity—one that is rooted, reflective, and profoundly
              fulfilling. For her, this practice is not just about art; it is a
              way of reconnecting with her roots while expressing herself in a
              form that feels both timeless and deeply personal.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {artGallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-black shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-5 text-white">
                  <h4 className="font-serif text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 rounded-[1.5rem] bg-black p-8 text-center text-white shadow-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Creative Expression
            </p>

            <h4 className="mb-3 font-serif text-2xl font-semibold">
              Art as Expression
            </h4>

            <p className="mx-auto max-w-3xl text-sm leading-6 text-gray-300">
              For Maya, Mithila painting is a personal space where stories
              unfold beyond the camera—capturing roots, devotion, culture, and
              imagination through visual form.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ArtWorks;