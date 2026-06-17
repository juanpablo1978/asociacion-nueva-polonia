"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useFadeIn } from "../hooks/useFadeIn";

const images = [
  { src: "/agenda1.jpg", alt: "Foto de la agenda institucional" },
  { src: "/agenda2.jpg", alt: "Foto de la agenda institucional" },
  { src: "/agenda3.jpg", alt: "Foto de la agenda institucional" },
  { src: "/agenda4.jpg", alt: "Foto de la agenda institucional" },
];

const Agenda = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const { ref, visible } = useFadeIn()

  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center py-20 px-4 md:px-10 bg-stone-950 lg:px-28
      transition-all duration-700 delay-100
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full flex justify-center mb-10">
        <h2 className="text-[35px] md:text-[40px] text-stone-50 font-semibold border-b-4 border-red-600 pb-3 inline-block">
          Agenda y Efemérides
        </h2>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-10 justify-items-center">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="relative w-full md:max-w-83 h-87.5 md:h-83 overflow-hidden rounded-md bg-stone-900
              border border-stone-800 shadow-xl cursor-zoom-in"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 332px"
              className="object-cover"
            />
          </div>
        ))}
      </article>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images}
        plugins={[Zoom]}
      />
    </section>
  )
}

export default Agenda;