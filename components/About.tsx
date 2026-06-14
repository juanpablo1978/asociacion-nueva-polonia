import Image from "next/image";

const About = () => {
  return (
         <section className="flex flex-col justify-center  py-20 px-4 bg-stone-950 text-stone-50 w-full
         md:px-10 lg:px-20"> 
        <div className="w-full flex justify-center mb-10">
  
  {/* 🚀 El título recupera su física real y la línea muerde solo las letras */}
  <h2 className="text-[35px] md:text-[40px] text-stone-50 font-semibold border-b-4 border-red-600 pb-3 inline-block">
    Sobre Nosotros
  </h2>

</div>
        <article className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 justify-items-center">
                <p className="text-[18px] text-stone-600 text-center font-medium leading-9">
         Asociación Civil Nueva Polonia (Personería Jurídica - Resolución Nº 063 “A”/12), se funda en el año 2012 en la ciudad de Córdoba en el centro de Argentina, formalizando el trabajo que ya venía realizando un grupo de personas desde el año 2009. Es de carácter voluntario y se encuentra abierto a todas las personas sin distinción de origen, etnia, edad, género o religión. Tiene como misión principal, difundir la cultura polaca en Argentina y la cultura argentina en Polonia, como así también en el resto del mundo.
        </p>
    <div className="relative w-full h-80 md:h-110 overflow-hidden">
    <Image
      src="/about1.jpg" 
      alt="Foto about 1 grupal"
      fill // 🚀 LA CLAVE: Desbloquea los píxeles fijos y estira la foto al ancho total de la caja
      sizes="(max-w-768px) 100vw" // Le avisa a Next.js que la foto se expande de lado a lado
      className="cursor-pointer object-cover" // Tu object-cover (Cover de Figma) para mantener la proporción
    />
  </div>
       <p className="text-[18px] text-stone-600 text-center font-medium leading-9">
   Nueva Polonia cuenta con una importante trayectoria como referente de transmisión de la cultura que representa. Cuenta actualmente con el dictado del Curso Virtual de Idioma Polaco y su Grupo de Canto y Danzas Nowa Polonia ha realizado sus presentaciones en diferentes eventos culturales y gastronómicos en localidades de la República Argentina como en el exterior del país, acercando al público el colorido del folklore como la diversidad de los sabores polacos.
        </p>
          <div className="relative w-full h-80 md:h-110 overflow-hidden">
    <Image
      src="/about2.png" 
      alt="Foto about 1 grupal"
      fill // 🚀 LA CLAVE: Desbloquea los píxeles fijos y estira la foto al ancho total de la caja
      sizes="(max-w-768px) 100vw" // Le avisa a Next.js que la foto se expande de lado a lado
      className="cursor-pointer object-cover" // Tu object-cover (Cover de Figma) para mantener la proporción
    />
  </div>
        </article>
      </section>    
  );
};

export default About;