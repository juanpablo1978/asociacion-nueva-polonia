import Image from "next/image";

const Agenda = () => {
  return (
       <section className="flex flex-col justify-center py-20 px-4 md:px-10 bg-stone-950">
       <div className="w-full flex justify-center mb-10">
  
  {/* 🚀 El título recupera su física real y la línea muerde solo las letras */}
  <h2 className="text-[35px] md:text-[40px] text-stone-50 font-semibold border-b-4 border-red-600 pb-3 inline-block">
    Agenda y Efemérides
  </h2>

</div>
             <article className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-10 justify-items-center">
     <div className="relative w-full md:max-w-83 h-87.5 md:h-83 overflow-hidden rounded-md bg-stone-900 border border-stone-800 shadow-xl">
      <Image
        src="/agenda1.jpg" 
        alt="Foto de la agenda institucional"
        fill // 🚀 LA CLAVE: Hace que la foto muerda los 332px netos de la caja sin achatarse
        sizes="(max-w-768px) 100vw, 332px" // Le avisa al navegador el tamaño óptimo de descarga
        className="cursor-pointer object-cover" // Tu object-cover (Cover de Figma) para mantener la proporción
      />
    </div>
     <div className="relative w-full md:max-w-83 h-87.5 md:h-83 overflow-hidden rounded-md bg-stone-900 border border-stone-800 shadow-xl">
      <Image
        src="/agenda2.jpg" 
        alt="Foto de la agenda institucional"
        fill // 🚀 LA CLAVE: Hace que la foto muerda los 332px netos de la caja sin achatarse
        sizes="(max-w-768px) 100vw, 332px" // Le avisa al navegador el tamaño óptimo de descarga
        className="cursor-pointer object-cover" // Tu object-cover (Cover de Figma) para mantener la proporción
      />
    </div>
        <div className="relative w-full md:max-w-83 h-87.5 md:h-83 overflow-hidden rounded-md bg-stone-900 border border-stone-800 shadow-xl">
      <Image
        src="/agenda3.jpg" 
        alt="Foto de la agenda institucional"
        fill // 🚀 LA CLAVE: Hace que la foto muerda los 332px netos de la caja sin achatarse
        sizes="(max-w-768px) 100vw, 332px" // Le avisa al navegador el tamaño óptimo de descarga
        className="cursor-pointer object-cover" // Tu object-cover (Cover de Figma) para mantener la proporción
      />
    </div>
       <div className="relative w-full md:max-w-83 h-87.5 md:h-83 overflow-hidden rounded-md bg-stone-900 border border-stone-800 shadow-xl">
      <Image
        src="/agenda4.jpg" 
        alt="Foto de la agenda institucional"
        fill // 🚀 LA CLAVE: Hace que la foto muerda los 332px netos de la caja sin achatarse
        sizes="(max-w-768px) 100vw, 332px" // Le avisa al navegador el tamaño óptimo de descarga
        className="cursor-pointer object-cover" // Tu object-cover (Cover de Figma) para mantener la proporción
      />
    </div>
        </article>
      </section>        
  );
};

export default Agenda;