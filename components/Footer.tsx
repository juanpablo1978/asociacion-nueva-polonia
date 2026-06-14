import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";

const Footer = () => {
  return (
       <footer className="flex flex-col justify-center py-20 px-4 bg-stone-950 text-stone-50 md:px-10">
        <article className="flex flex-col items-center" >
                <Image
      src="/logo.png" 
      alt="Logo Nueva Polonia"
      width={120}
      height={120}
      className="cursor-pointer"
    />
    <ul className="flex items-center gap-x-6 my-10">
      <li className="text-2xl md:text-[33px] text-green-500"><FaWhatsapp/></li>
      <li className="text-2xl md:text-[33px] text-stone-50 hover:text-stone-300"><IoLogoInstagram/></li>
      <li className="text-2xl md:text-[33px] text-stone-50 hover:text-stone-300"><FaFacebookF/></li>
      <li className="text-2xl md:text-[33px] text-stone-50 hover:text-stone-300"><AiOutlineX/></li>
    </ul>
        </article>
         <hr className="w-70 md:w-full border-stone-50" />

         <article className="flex flex-col items-center mt-10">
      <ul className="flex flex-col items-center gap-y-5 my-10 font-light">
  <li>
    <a 
      href="#inicio" 
   
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Home
    </a>
  </li>
  <li>
    <a 
      href="#about" 
     
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      About
    </a>
  </li>
  <li>
    <a 
      href="#actividades" 
     
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Actividades
    </a>
  </li>
  <li>
    <a 
      href="#agenda" 
     
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Agenda
    </a>
  </li>
  <li>
    <a 
      href="#galeria" 
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Galería
    </a>
  </li>
</ul>
    <span className="text-[18px] text-stone-50 border-2 border-stone-50 px-2 py-1">
      nowapolonia.arg@gmail.com
    </span>
    <span className="text-[12px] text-stone-50 mt-9">
      © 2026 Asociación Civil Nueva Polonia.
    </span>
         </article>
      </footer>
  );
};

export default Footer;