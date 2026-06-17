"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useFadeIn } from "../hooks/useFadeIn";

const ACTIVIDADES_DATA = {
  danza: {
    titulo: "Danzas Tradicionales",
    imagen: "/danza.jpg",
    alt: "Grupo de danza Nowa Polonia",
    texto: "El Grupo de Canto y Danzas Nowa Polonia de la Asociación Civil Nueva Polonia nació el 22 de agosto de 2009 en la ciudad de Córdoba, en el centro de Argentina. Con más de 10 años de trayectoria, este Grupo ha realizado presentaciones en diferentes festivales de danza y gastronomía en distintas localidades cordobesas como Oktoberfest de Villa General Belgrano y la Fiesta de Colectividades de Alta Gracia, se ha presentado en diversas ciudades del interior del país.",
    modalTexto: "Este grupo está dirigido por Victor Eduardo Bustos, Coreógrafo doblemente titulado en el Centro de Formación Cultural de Katowice y por la Universidad Politécnica de Rzeszów (2019). Varios integrantes de Nowa Polonia se han capacitado en el \"Curso de Estudio Coreográfico Polaco\" organizado por la Universidad Politécnica de Rzeszów y Stowarzyszenie Wspólnota Polska, obteniendo el título de Coreógrafos dos de ellos: Julia Florentyna Bustos y Leandro Agustín Acosta. Día y horario de ensayo: Sábados 16 a 19 hs. Lugar: CAPEM, Caseros 356, B° Centro, Córdoba, Argentina."
  },
  idioma: {
    titulo: "Clases de Idioma Polaco",
    imagen: "/idiomas.jpg",
    alt: "Clases de idioma polaco bilingües",
    texto: "Ofrecemos cursos virtuales y presenciales de idioma polaco para todos los niveles, desde principiantes hasta avanzados. Las clases están diseñadas para rescatar las raíces lingüísticas, preparar a los alumnos para exámenes internacionales o facilitar la comunicación en viajes y trámites de ciudadanía, con un enfoque dinámico y bilingüe.",
    modalTexto: `El dictado del Curso estará a cargo de Víctor Eduardo Bustos, Profesor y Traductor Público egresado de la Universidad Jagellónica de Cracovia, Polonia. Con más de 25 años en la docencia, Víctor se encuentra en continua capacitación en cursos organizados por Stowarzyszenie "Wspólnota Polska", entre otras organizaciones.\n\nDía y horario del Curso Virtual de Idioma:\n1º Año: Lunes 20 a 21 hs.\n2º Año: Martes 20 a 21 hs.`
  },
  ciudadania: {
    titulo: "Ciudadanía y Traducciones",
    imagen: "/traducciones.png",
    alt: "Trámites de pasaporte y ciudadanía polaca",
    texto: "Brindamos asesoramiento integral y gestiones detalladas para la obtención de la ciudadanía polaca y el pasaporte de la Unión Europea. Contamos con un servicio de traducciones públicas matriculadas de documentos, actas y partidas, garantizando la rigidez y validez legal necesaria ante el consulado y el gobierno de Polonia.",
    modalTexto: `Además, si necesitás realizar traducciones del español al idioma polaco o del polaco al español de documentaciones por estudio, trabajo, actividades comerciales o diversa índole, tenemos amplios antecedentes en estos campos. Matrícula el Colegio de Traductores Públicos de la Provincia de Córdoba nº 337.`
  }
};

type ActividadKey = keyof typeof ACTIVIDADES_DATA;

export default function Actividades() {
  const [actividadActiva, setActividadActiva] = useState<ActividadKey>("danza");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, visible } = useFadeIn()

  const current = ACTIVIDADES_DATA[actividadActiva];

  return (
    <>
      <section
        ref={ref}
        className={`flex flex-col justify-center py-20 px-6 bg-stone-50 text-stone-950 lg:px-28
        transition-all duration-700 delay-100
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[35px] md:text-[40px] lg:text-[42px] font-bold tracking-tight text-center mb-12 border-b-4 border-red-600 pb-3 inline-block">
            Actividades y Servicios
          </h2>

          <article className="w-full">
            <ul className="flex items-center justify-center gap-x-8 text-base lg:text-[22px] font-medium
            lg:border-b-3 border-b border-stone-900 pb-4">
              {(Object.keys(ACTIVIDADES_DATA) as ActividadKey[]).map((key) => (
                <li
                  key={key}
                  onClick={() => setActividadActiva(key)}
                  className={`cursor-pointer uppercase tracking-wider transition-colors duration-300 pb-4 border-b-2 lg:border-b-3 -mb-4.25 ${
                    actividadActiva === key
                      ? "text-red-600 border-red-600 font-bold"
                      : "text-stone-950 border-transparent hover:text-stone-950"
                  }`}
                >
                  {key === "ciudadania" ? "Ciudadanía" : key}
                </li>
              ))}
            </ul>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-12 gap-y-8 lg:gap-x-pad-desktop">
              <div className="relative w-full max-w-92.5 md:max-w-172 md:h-110 h-87.5 lg:h-100 shrink-0 rounded-card-premium overflow-hidden shadow-2xl border border-stone-900">
                <Image
                  src={current.imagen}
                  alt={current.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-stone-950">
                  {current.titulo}
                </h3>
                <p className="text-base lg:text-[18px] text-stone-800 font-medium leading-9">
                  {current.texto}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-red-600 text-stone-50 px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300 mt-4 cursor-pointer"
                >
                  + Info
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
          />
          <article className="relative bg-stone-50 p-6 md:p-10 rounded-[16px] w-97.5 md:w-140 lg:w-212.5 max-h-[90vh]
          flex flex-col items-center justify-center gap-y-6 shadow-2xl border border-stone-200 z-10
          animate-in fade-in zoom-in-95 duration-200">
            <p className="text-stone-950 text-[18px] leading-9 text-center tracking-wide overflow-y-auto pr-1 whitespace-pre-line">
              {current.modalTexto}
            </p>
            <IoCloseCircleOutline
              onClick={() => setIsModalOpen(false)}
              className="text-4xl text-stone-950 cursor-pointer hover:text-red-600 transition-colors mt-2 shrink-0"
            />
          </article>
        </div>
      )}
    </>
  );
}