import { IoIosMenu } from "react-icons/io";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-950 px-4">
      <header className="w-full flex items-center justify-between h-18.5">
         <Image
      src="/logo.png" 
      alt="Logo Nueva Polonia"
      width={100}
      height={100}
      className="cursor-pointer"
    />
        <IoIosMenu className="text-3xl text-stone-50 cursor-pointer" />
      </header>

      <section className="flex flex-col items-center justify-center py-10">
         <Image
      src="/banner.png" 
      alt="Logo Nueva Polonia"
      width={370}
      height={367}
      className="cursor-pointer"
    />
    <article className="flex flex-col items-center gap-y-10">
       <h1 className="text-[40px] text-stone-50 font-bold mt-16.25 text-center">
      Asociación Nueva Polonia
    </h1>
    <h3 className="text-[23px] font-semibold text-stone-50 text-center">
      Bienvenidos a nuestro sitio web
    </h3>
    <button className="bg-transparent text-red-600 font-semibold py-2 px-4 rounded-md
    border border-red-600 hover:border-red-800 transition-colors">
      CONTACTO
    </button>
    </article>
      </section>

      <section className="flex flex-col items-center justify-center py-20 bg-stone-50">
        
      </section>

    </main>
  )
}

export default page
