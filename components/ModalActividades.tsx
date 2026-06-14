import { IoCloseCircleOutline } from "react-icons/io5";

const ModalActividades = () => {
  return (
               <section className="flex flex-col justify-center items-center
                bg-stone-950 w-97.5 h-211 md:w-140 md:h-140.75">
         <article className="bg-stone-50 p-6 rounded-[16px] w-85 h-185 flex flex-col items-center justify-center
         gap-y-2 md:w-120 md:h-120.75">
           <p className="text-stone-950 text-[18px] leading-9 text-center tracking-wide">
            Este grupo está dirigido por Victor Eduardo Bustos, Coreógrafo doblemente titulado en el Centro de Formación Cultural de Katowice (19..) y por la Universidad Politécnica de Rzeszów (2019). Varios integrantes de Nowa Polonia se han capacitado en el “Curso de Estudio Coreográfico Polaco” organizado por la Universidad Politécnica de Rzeszów y Stowarzyszenie Wspólnota Polska, obteniendo el título de Coreógrafos dos de ellos: Julia Florentyna Bustos y Leandro Agustín Acosta.
Día y horario de ensayo: Sábados 16 a 19 hs.
Lugar: CAPEM, Caseros 356, B° Centro, Córdoba, Argentina.

           </p>
           <button>
            <IoCloseCircleOutline className="text-3xl text-stone-950 cursor-pointer text-center" />
           </button>
           
         </article>
      </section>
  );
};

export default ModalActividades;