import React, { useEffect, useState } from "react";
import T1 from "../assets/T1.jpeg";
import T2 from "../assets/T2.jpeg";
import T3 from "../assets/T3.jpeg";
// import n1 from "../assets/n1.jpeg";
import n4 from "../assets/n4.jpeg";
import n9 from "../assets/n9.jpeg";
import n16 from "../assets/n16.jpeg";
import T6 from "../assets/T6.jpeg";

const theatreImages = [T1, T2, T3,T6, n4, n9, n16];

const theatreVideos = [
  {
    title: "Maya Sharma | Theatre Performance",
    category: "Stage Performance",
    videoId: "CZ2kribumE8",
    url: "https://www.youtube.com/watch?v=CZ2kribumE8",
    desc: "A glimpse of Maya Sharma’s powerful stage presence and expressive performance work.",
  },
];

const Theatre: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeVideo, setActiveVideo] = useState(theatreVideos[0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % theatreImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="theatre"
      className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-20"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-2 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
          Stage Journey
        </p>

        <h2 className="mb-14 text-center font-serif text-4xl text-black md:text-6xl">
          Theatre
        </h2>

        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            {/* Left Content Card */}
            <div className="w-full text-gray-800 md:w-1/2">
              <div className="max-h-[520px] overflow-y-auto rounded-[1.8rem] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur md:p-8">

                <p className="mb-4 text-[15px] leading-7 text-gray-700">
                  <span className="font-semibold text-black">
                    Maya Sharma
                  </span>{" "}
                  began her acting journey with theatre in 2004—an artistic home
                  that continues to ground and inspire her work. From early
                  street plays with JNU IPTA Delhi to performances during her
                  college years, theatre became the space where she first
                  discovered the power of storytelling and live connection with
                  an audience.
                </p>

                <p className="mb-4 text-[15px] leading-7 text-gray-700">
                  She soon transitioned into professional theatre, working with
                  eminent directors such as Robin Das, Bapi Bose, M.K. Raina,
                  Surendra Sharma, Vivek Mishra, Himanshu B. Joshi, Ramesh
                  Manchanda, Satish Anand, and Raj Narayan Dixit. Across
                  numerous productions with these theatre doyens, Maya explored a
                  wide spectrum of characters—spanning different age groups,
                  emotional depths, and perspectives—shaping her into a nuanced
                  and instinctive performer.
                </p>

                <p className="mb-4 text-[15px] leading-7 text-gray-700">
                  Now based in Mumbai, Maya continues to actively engage with
                  theatre, collaborating with directors including Pramod Pathak,
                  Rohit Tiwari, Kulvinder Singh Bakhshish, Gajendra Ahire, and
                  Mithil Rey. She has performed in English productions by Rohit
                  Tiwari, further expanding her range across languages and
                  styles.
                </p>

                <p className="mb-4 text-[15px] leading-7 text-gray-700">
                  Her recent and ongoing productions include{" "}
                  <span className="font-semibold text-black">
                    Jaane Pehchane Anjaane
                  </span>
                  , with Anupam Kher Productions—set to travel internationally—and{" "}
                  <span className="font-semibold text-black">
                    Maai Ki Aakhri Chhath
                  </span>
                  , where she plays the protagonist role of Maai. Both
                  productions are being performed across Mumbai and other cities,
                  continuing her strong presence on stage.
                </p>

                <p className="text-[15px] leading-7 text-gray-700">
                  For Maya, theatre is more than performance—it is a living,
                  breathing exchange of energy between actor and audience.
                  Working with diverse directors and inhabiting varied characters
                  has strengthened her craft, making her both versatile and
                  deeply connected to her work. The immediacy of live performance,
                  the unpredictability of the stage, and the shared experience
                  with an audience bring her immense joy, satisfaction, and a
                  profound sense of artistic fulfillment.
                </p>
              </div>
            </div>

            {/* Right Image Slider */}
            <div className="flex w-full justify-center md:w-1/2">
              <div className="group relative h-[430px] w-full max-w-[390px] overflow-hidden rounded-[1.8rem] border border-white/30 bg-black p-3 shadow-2xl md:h-[520px]">
                {theatreImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Theatre ${index + 1}`}
                    className={`absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-[1.2rem] object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 ${
                      index === currentImage
                        ? "z-10 scale-100 opacity-100"
                        : "z-0 scale-105 opacity-0"
                    }`}
                  />
                ))}

                <div className="pointer-events-none absolute inset-3 rounded-[1.2rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                    Theatre
                  </p>
                  <h3 className="mt-1 font-serif text-xl md:text-2xl">
                    Live Moments
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                 
                  {theatreImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? "w-6 bg-white"
                          : "w-2 bg-white/50"
                      }`}
                      aria-label={`Go to theatre image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        <div className="mb-14 py-4 text-left font-serif text-2xl text-black md:text-6xl">
          Artistic Expressions
        </div>  
          {/* YouTube Video Section */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
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

            <div className="space-y-4">
              {theatreVideos.map((video) => {
                const isActive = activeVideo.videoId === video.videoId;

                return (
                  <button
                    key={video.videoId}
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className={`w-full rounded-[1.5rem] border p-4 text-left shadow-sm transition duration-300 ${
                      isActive
                        ? "border-black bg-black text-white shadow-2xl"
                        : "border-gray-200 bg-white/80 text-black backdrop-blur hover:-translate-y-1 hover:border-black hover:shadow-xl"
                    }`}
                  >
                    <div className="flex gap-4">
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={video.title}
                        className="h-24 w-32 rounded-2xl object-cover shadow-md"
                      />

                      <div>
                        <p
                          className={`text-xs font-semibold uppercase tracking-widest ${
                            isActive ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {video.category}
                        </p>

                        <h5 className="mt-1 font-serif text-lg font-semibold">
                          {video.title}
                        </h5>

                        <p
                          className={`mt-2 text-sm leading-5 ${
                            isActive ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {video.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theatre;