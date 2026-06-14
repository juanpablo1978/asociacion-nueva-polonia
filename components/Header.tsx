"use client";
import Image from "next/image";
import Menu from "@/components/Menu";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  // El control central del Drawer responsivo
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. LA BARRA SUPERIOR: Queda limpia y solo alinea el Logo y las 3 rayitas */}
      <header className="w-full flex items-center justify-between h-18.5 px-4 bg-stone-950 border-b border-stone-900 ">
        <Image
          src="/logo.png" 
          alt="Logo Nueva Polonia"
          width={100}
          height={100}
          className="cursor-pointer"
        />
        
        <IoIosMenu 
          onClick={() => setIsOpen(true)}
          className="text-3xl text-stone-50 cursor-pointer hover:text-red-600 transition-colors" 
        />
      </header>    

      {/* 
        2. 🚀 EL MENÚ FLOTANTE NACIENDO AFUERA:
        Al sacarlo del flujo lineal de la barra, le das permiso a sus 390px de ancho 
        de resbalar elástico por el costado derecho de la pantalla usando su fixed z-50 
        sin alterar ni desajustar jamás un solo píxel de tu landing de atrás.
      */}
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
