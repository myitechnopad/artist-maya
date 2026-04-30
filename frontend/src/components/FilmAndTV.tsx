// src/components/FilmAndTV.tsx
import React, { useEffect, useState } from "react";

import g9 from "../assets/g9.jpeg";
import g10 from "../assets/g10.jpeg";
import g1 from "../assets/g1.jpeg";
import g20 from "../assets/g20.jpeg";
import g23 from "../assets/g23.jpeg";
import T5 from "../assets/T5.jpeg";

const filmTvImages = [g9, g10, g1, g20, g23, T5];

const youtubeProjects = [
  {
    title: "Sardar- The game change | Jamnagar ki Maharani",
    category: "Documentary Film",
    videoId: "G7QnJWwti6s",
    url: "https://www.youtube.com/watch?v=G7QnJWwti6s",
    desc: "Sardar- The game change, released on DD National.",
  },
  {
    title: "Maya Sharma | Police Inspector Role",
    category: "TV Series (Mauka-E-Vardaat)",
    videoId: "beLYCQ9tf9g",
    url: "https://www.youtube.com/watch?v=beLYCQ9tf9g",
    desc: "Maya Sharma portraying a strong police inspector role in Mauka-E-Vardaat, showcasing her powerful on-screen presence in crime-based television storytelling.",
  },
  {
    title: "Maya Sharma | Featured Episode",
    category: "TV / Web Series",
    videoId: "4KnZvhTCwZs",
    url: "https://www.youtube.com/watch?v=4KnZvhTCwZs",
    desc: "A featured appearance of Maya Sharma in a television episode showcasing her screen performance.",
  },
  {
    title: "Protinex | Test Your Strength",
    category: "Ad Film",
    videoId: "2qMXE3ifebs",
    url: "https://www.youtube.com/watch?v=2qMXE3ifebs",
    desc: "A Protinex India campaign highlighting strength and endurance through the Air Chair Test concept.",
  },
  {
    title: "Maya Sharma | Franklin",
    category: "Film / Series",
    videoId: "FEqgfUtapn4",
    url: "https://www.youtube.com/watch?v=FEqgfUtapn4",
    desc: "Maya Sharma featured in Franklin, showcasing emotional and expressive screen performance.",
  },
  {
    title: "Ad Film Project",
    category: "Ad Film",
    videoId: "sik4quXrjos",
    url: "https://www.youtube.com/watch?v=sik4quXrjos",
    desc: "A featured advertising project showcasing Maya Sharma’s screen presence.",
  },
];

const highlights = [
  "TV Series",
  "Ad Films",
  "Short Films",
  "Voiceovers",
  "Film Production",
  "Casting",
];

const FilmAndTV: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(youtubeProjects[0]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % filmTvImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="film-tv"
      className="relative w-full overflow-hidden bg-white px-5 py-16 md:px-20"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
          Screen Presence
        </p>

        <h2 className="mb-4 text-center font-serif text-4xl font-semibold text-black md:text-6xl">
          Film & Television
        </h2>

        <p className="mx-auto mb-12 max-w-4xl text-center text-base leading-relaxed text-gray-600">
          TV Series | Ad Films | Short Films | Voiceovers | Film Production |
          Casting
        </p>

        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
            {/* Image Slider */}
            <div className="relative h-[460px] overflow-hidden rounded-[1.7rem] border border-white/30 bg-black p-3 shadow-2xl">
              <div className="h-full w-full overflow-hidden rounded-[1.25rem]">
                <div
                  className="flex h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    width: `${filmTvImages.length * 100}%`,
                    transform: `translateX(-${
                      currentImage * (100 / filmTvImages.length)
                    }%)`,
                  }}
                >
                  {filmTvImages.map((img, index) => (
                    <div
                      key={index}
                      className="h-full shrink-0"
                      style={{ width: `${100 / filmTvImages.length}%` }}
                    >
                      <img
                        src={img}
                        alt={`Film and TV ${index + 1}`}
                        className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-3 rounded-[1.25rem] bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-7 right-7 flex gap-2">
                {filmTvImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "w-6 bg-white"
                        : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to film image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[1.7rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                Featured Talent
              </p>

              <h3 className="mt-2 font-serif text-4xl font-semibold text-black md:text-5xl">
                Maya Sharma
              </h3>

              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-700">
                Maya Sharma’s journey in cinema and television reflects a rich
                blend of performance and creative collaboration, both in front of
                and behind the camera.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-black hover:bg-black hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-inner">
                <h4 className="mb-3 font-serif text-2xl font-semibold text-black">
                  Television Series
                </h4>

                <p className="text-sm leading-7 text-gray-700">
                  Maya has portrayed strong and distinctive characters across
                  television and digital platforms. In Mauka-E-Vardaat (ZEE5),
                  she played the lead role of a police inspector. In Bheema
                  (&TV), she appeared as a District Magistrate. She was also
                  part of K.C. Bokadia’s Sardar: The Game Changer (DD),
                  portraying the Maharani of Jamnagar alongside Rajit Kapoor.
                  She is currently working alongside Mugdha Godse and Aman Verma
                  in Sanskar, directed by K.C. Bokadia.
                </p>
              </div>
            </div>
          </div>

          {/* Main Video + Right Side Cards */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[1.7rem] border border-black/10 bg-black shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="bg-black p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                  {activeVideo.category}
                </p>

                <h4 className="mt-2 font-serif text-2xl font-semibold">
                  {activeVideo.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {activeVideo.desc}
                </p>

                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {youtubeProjects.slice(0, 3).map((project) => {
                const isActive = activeVideo.videoId === project.videoId;

                return (
                  <button
                    key={project.videoId}
                    type="button"
                    onClick={() => setActiveVideo(project)}
                    className={`h-[150px] w-full rounded-[1.5rem] border p-4 text-left shadow-sm transition duration-300 ${
                      isActive
                        ? "border-black bg-black text-white shadow-2xl"
                        : "border-gray-200 bg-white/80 text-black backdrop-blur hover:-translate-y-1 hover:border-black hover:shadow-xl"
                    }`}
                  >
                    <div className="flex h-full gap-4">
                      <img
                        src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                        alt={project.title}
                        className="h-full w-32 shrink-0 rounded-2xl object-cover shadow-md"
                      />

                      <div className="overflow-hidden">
                        <p
                          className={`text-xs font-semibold uppercase tracking-widest ${
                            isActive ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {project.category}
                        </p>

                        <h5 className="mt-1 line-clamp-2 font-serif text-lg font-semibold">
                          {project.title}
                        </h5>

                        <p
                          className={`mt-2 line-clamp-2 text-sm leading-5 ${
                            isActive ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {project.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Video Cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {youtubeProjects.slice(3).map((project) => {
              const isActive = activeVideo.videoId === project.videoId;

              return (
                <button
                  key={project.videoId}
                  type="button"
                  onClick={() => setActiveVideo(project)}
                  className={`h-[150px] w-full rounded-[1.5rem] border p-4 text-left shadow-sm transition duration-300 ${
                    isActive
                      ? "border-black bg-black text-white shadow-2xl"
                      : "border-gray-200 bg-white/80 text-black backdrop-blur hover:-translate-y-1 hover:border-black hover:shadow-xl"
                  }`}
                >
                  <div className="flex h-full gap-4">
                    <img
                      src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                      alt={project.title}
                      className="h-full w-32 shrink-0 rounded-2xl object-cover shadow-md"
                    />

                    <div className="overflow-hidden">
                      <p
                        className={`text-xs font-semibold uppercase tracking-widest ${
                          isActive ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {project.category}
                      </p>

                      <h5 className="mt-1 line-clamp-2 font-serif text-lg font-semibold">
                        {project.title}
                      </h5>

                      <p
                        className={`mt-2 line-clamp-2 text-sm leading-5 ${
                          isActive ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmAndTV;