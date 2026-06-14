"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-4 md:px-10
     text-stone-50 min-h-screen">
      
      {/* Imagen de fondo */}
      <Image
        src="/banner.png"
        alt="Hero"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <article className="relative z-10 flex flex-col items-center gap-y-10">
        <h1 className="text-[42px] md:text-[55px] text-stone-50 font-bold mt-16 text-center tracking-tight">
          Asociación Nueva Polonia
        </h1>
        <h3 className="text-[23px] md:text-[35px] font-semibold text-stone-50/80 text-center">
          Bienvenidos a nuestro sitio web
        </h3>
        <a 
          href="#footer" 
          className="bg-transparent text-stone-50 font-semibold py-3 px-6 rounded-md border-2 border-stone-50 hover:text-stone-500 hover:border-stone-500 transition-colors text-[25px] tracking-wide mt-4 shadow-lg shadow-red-600/5"
        >
          CONTACTO
        </a>
      </article>
    </section>
  );
}