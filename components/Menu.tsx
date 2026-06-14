"use client";

import { IoMdClose } from "react-icons/io"; // Traemos la cruz oficial de react-icons

// Definimos el tipado estricto de las props para que TypeScript no te tire warning
interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <>
      {/* 
        EL DRAWER LATERAL: Conserva tu w-97.5 y h-211 estricto en bg-stone-950.
        Usamos una transición elástica de Tailwind: si isOpen es true, se muestra (translate-x-0);
        si es false, se esconde de forma invisible hacia la derecha (translate-x-full).
      */}
      <section className={`fixed top-0 right-0 z-50 w-97.5 h-211 md:h-283.25 bg-stone-950 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out border-l border-stone-900 shadow-2xl ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        {/* 🛠️ LA CRUZ "✕" DE CERRAR EN POSICIÓN ABSOLUTA ARRIBA A LA DERECHA */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-3xl text-stone-50 hover:text-red-600 transition-colors p-2"
        >
          <IoMdClose />
        </button>

        {/* Tus links nativos limpios en vertical */}
        <ul className="flex flex-col items-center gap-y-6 my-10 font-light">
  <li>
    <a 
      href="#inicio" 
      onClick={onClose}
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Home
    </a>
  </li>
  <li>
    <a 
      href="#about" 
      onClick={onClose}
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      About
    </a>
  </li>
  <li>
    <a 
      href="#actividades" 
      onClick={onClose}
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Actividades
    </a>
  </li>
  <li>
    <a 
      href="#agenda" 
      onClick={onClose}
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Agenda
    </a>
  </li>
  <li>
    <a 
      href="#galeria" 
      onClick={onClose}
      className="text-[22px] text-stone-50 hover:text-red-600 transition-colors cursor-pointer block py-2"
    >
      Galería
    </a>
  </li>
</ul>

      </section>

      {/* 🔐 EL ESCUDO OSCURO BLOQUEADOR TRASLÚCIDO DE FONDO DE FIGMA */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        />
      )}
    </>
  );
}
