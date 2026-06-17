'use client'
import Image from "next/image";
import { useFadeIn } from "../hooks/useFadeIn";

const Home = () => {
  const { ref, visible } = useFadeIn()

  return (
    <section
      ref={ref}
      className={`flex flex-col py-20 bg-stone-50 px-4 gap-y-10 md:px-10 md:gap-10 lg:px-28
      transition-all duration-700 delay-100
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
    >
      {/* Fila 1 - solo en desktop */}
      <div className="hidden lg:grid gap-6" style={{ gridTemplateColumns: '25% 37.5% 37.5%' }}>
        <p className="text-[25px] text-stone-600 text-center font-medium flex items-center">
          Hola! Conocé nuestras actividades de danza, idioma, eventos gastronómicos, ciudadanías y 
          traducciones en la ciudad de Córdoba, Argentina.
        </p>
        <Image
          src="/hero2.jpg"
          alt="Foto cuarteto"
          width={370}
          height={367}
          className="cursor-pointer w-full h-auto"
        />
        <Image
          src="/hero1.jpg"
          alt="Foto cuarteto"
          width={370}
          height={367}
          className="cursor-pointer w-full h-auto"
        />
      </div>

      {/* Fila 2 - solo en desktop */}
      <div className="hidden lg:grid gap-6" style={{ gridTemplateColumns: '37.5% 25% 37.5%' }}>
        <Image
          src="/hero3.jpg"
          alt="Foto abanderada"
          width={370}
          height={367}
          className="cursor-pointer w-full h-auto"
        />
        <p className="text-[25px] text-stone-600 text-center font-medium flex items-center">
          Witaj! Poznaj nasze zajęcia taneczne, językowe, wydarzenia gastronomiczne, załatwienie 
          potwierdzenia posiadania obywatelstwa polskiego i usługi tłumaczeniowe różnych dokumentów 
          w mieście Córdoba, Argentyna.
        </p>
        <Image
          src="/hero4.jpg"
          alt="Foto cuarteto"
          width={370}
          height={367}
          className="cursor-pointer w-full h-auto"
        />
      </div>

      {/* Mobile y tablet */}
      <div className="flex flex-col gap-y-10 lg:hidden">
        <p className="text-[25px] text-stone-600 text-center font-medium">
          Hola! Conocé nuestras actividades de danza, idioma, eventos gastronómicos, ciudadanías y 
          traducciones en la ciudad de Córdoba, Argentina.
        </p>
        <Image
          src="/hero2.jpg"
          alt="Foto cuarteto"
          width={370}
          height={367}
          className="cursor-pointer w-full h-auto"
        />
        <p className="text-[25px] text-stone-600 text-center font-medium">
          Witaj! Poznaj nasze zajęcia taneczne, językowe, wydarzenia gastronomiczne, załatwienie 
          potwierdzenia posiadania obywatelstwa polskiego i usługi tłumaczeniowe różnych dokumentów 
          w mieście Córdoba, Argentyna.
        </p>
        <Image
          src="/hero3.jpg"
          alt="Foto abanderada"
          width={370}
          height={367}
          className="cursor-pointer w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Home;