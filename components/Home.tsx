import Image from "next/image";

const Home = () => {
  return (
          <section className="flex flex-col items-center justify-center md:grid md:grid-cols-2
           py-20 bg-stone-50 px-4 gap-y-10 md:px-10 md:gap-10">
            
             <p className="text-[25px] text-stone-600 text-center font-medium">
          Hola!
Conocé nuestras actividades de danza, idioma, eventos gastronómicos, ciudadanías y traducciones en la ciudad de Córdoba, Argentina.
        </p>
       
              <Image
      src="/hero1.jpg" 
      alt="Foto cuarteto"
      width={370}
      height={367}
      className="cursor-pointer"
    />
    
       <p className="text-[25px] text-stone-600 text-center font-medium md:hidden sm:block">
     Witaj!
Poznaj nasze zajęcia taneczne, językowe, wydarzenia gastronomiczne, załatwienie potwierdzenia posiadania obywatelstwa polskiego i usługi tłumaczeniowe różnych dokumentów w mieście Córdoba, Argentyna.
        </p>
              <Image
      src="/hero2.jpg" 
      alt="Foto abanderada"
      width={370}
      height={367}
      className="cursor-pointer"
    />
        <p className="text-[25px] text-stone-600 text-center font-medium sm: hidden md:block">
     Witaj!
Poznaj nasze zajęcia taneczne, językowe, wydarzenia gastronomiczne, załatwienie potwierdzenia posiadania obywatelstwa polskiego i usługi tłumaczeniowe różnych dokumentów w mieście Córdoba, Argentyna.
        </p>
      </section>    
  );
};

export default Home;