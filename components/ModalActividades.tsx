import { IoCloseCircleOutline } from "react-icons/io5";

const ModalActividades = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-stone-950 
      w-97.5 h-211 
      md:w-140 md:h-170.75 
      lg:w-212.5 lg:h-130.25">
      <article className="bg-stone-50 p-6 rounded-[16px] flex flex-col items-center justify-center gap-y-2 
        w-85 h-185 
        md:w-130 md:h-160.75 
        lg:w-202.5 lg:h-120.25">
        <p className="text-stone-950 text-[18px] leading-9 text-center tracking-wide">
          Este grupo está dirigido por Victor Eduardo Bustos...
        </p>
        <button>
          <IoCloseCircleOutline className="text-3xl text-stone-950 cursor-pointer text-center" />
        </button>
      </article>
    </section>
  );
};

export default ModalActividades;