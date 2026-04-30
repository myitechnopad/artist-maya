import React, { useEffect, useState } from "react";

import A2 from "../assets/A2.jpeg";
import g3 from "../assets/g3.jpeg";
import T4 from "../assets/T4.jpeg";
import g15 from "../assets/g15.jpeg";
import j6 from "../assets/j6.jpeg";

const productionImages = [A2, g3, T4, g15, j6];

const FilmProduction: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productionImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="film-production"
      className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-20"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
          Behind The Camera
        </p>

        <h2 className="mb-14 text-center font-serif text-4xl font-semibold text-black md:text-6xl">
          Film Production
        </h2>

        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            {/* Image Scroller */}
            <div className="relative h-[460px] overflow-hidden rounded-[1.7rem] border border-white/30 bg-black p-3 shadow-2xl">
              <div className="h-full w-full overflow-hidden rounded-[1.2rem]">
                <div
                  className="flex h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    width: `${productionImages.length * 100}%`,
                    transform: `translateX(-${
                      currentImage * (100 / productionImages.length)
                    }%)`,
                  }}
                >
                  {productionImages.map((img, index) => (
                    <div
                      key={index}
                      className="h-full shrink-0"
                      style={{ width: `${100 / productionImages.length}%` }}
                    >
                      <img
                        src={img}
                        alt={`Film Production ${index + 1}`}
                        className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-3 rounded-[1.2rem] bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-7 right-7 flex gap-2">
                {productionImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "w-6 bg-white"
                        : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to production image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                Creative Journey
              </p>

              <h3 className="mt-2 font-serif text-4xl font-semibold text-black md:text-5xl">
                Maya Sharma
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-gray-700">
                Beyond acting, Maya has built a deeply immersive practice in
                filmmaking. She began with documentary films rooted in social
                realities, travelling extensively across Uttarakhand—particularly
                the Garhwal region—working closely with communities while creating
                films for the Government of Uttarakhand and independent projects.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-gray-700">
                Her strength as a filmmaker lies in her ability to connect deeply
                with people. Whether in remote villages or urban environments, she
                brings authenticity and emotional truth to every story she tells.
              </p>

              <div className="mt-7 rounded-[1.5rem] bg-black p-6 text-white shadow-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Landmark Documentary
                </p>

                <h4 className="mt-2 font-serif text-2xl font-semibold">
                  Mahakumbh Mela 2013 | Moksha Ki Kamna
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  A landmark documentary released worldwide by Saregama. Created
                  over two years, Maya served as creative director, writer, and
                  cinematographer—bringing depth, sincerity, and complete artistic
                  involvement to the film.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[1.7rem] border border-black/10 bg-black shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/LJikI8YXZVQ"
                  title="Maya Sharma Film"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[1.7rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Featured Film
              </p>

              <h4 className="mt-2 font-serif text-3xl font-semibold text-black">
                Documentary & Film Work
              </h4>

              <p className="mt-4 text-[15px] leading-7 text-gray-700">
                Maya has created multiple documentary films focusing on women’s
                empowerment and socially relevant themes. Her work also extends
                into corporate filmmaking and collaborations with NGOs,
                highlighting grassroots impact and real human stories.
              </p>

              <a
                href="https://www.youtube.com/watch?v=LJikI8YXZVQ&list=PLH5Gf02W_Y1UMW9MHvbH29N7eABak9E8Z"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800"
              >
                Watch Full Film on YouTube
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur">
              <h4 className="mb-3 font-serif text-2xl font-semibold text-black">
                Casting
              </h4>

              <p className="text-sm leading-7 text-gray-700">
                Maya has worked with Gautam Kishanchandani on projects including
                <strong> Choked</strong>, <strong> Ghost Stories</strong>,
                <strong> Guilty Minds</strong>, and <strong> Thar</strong>. Her
                casting approach comes from an actor’s perspective, helping
                performers feel comfortable and deliver authentic performances.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-black p-6 text-white shadow-2xl">
              <h4 className="mb-3 font-serif text-2xl font-semibold">
                Storytelling Philosophy
              </h4>

              <p className="text-sm leading-7 text-gray-300">
                For Maya, filmmaking is not just a process—it is a deeply human
                experience. Her work reflects empathy, authenticity, and a strong
                connection with real stories and people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmProduction;