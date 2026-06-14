'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const images = [
  '/galeria1.jpg',
  '/galeria2.jpg',
  '/galeria3.jpg',
  '/galeria4.jpg',
  '/galeria5.jpg',
  '/galeria6.jpg',
  '/galeria7.jpg',
  '/galeria8.jpg',
]

const CarouselSwipe = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <section className="py-20 px-4 md:px-10 bg-stone-50 w-full flex flex-col">
    <div className="w-full flex justify-center mb-10">
  
  {/* 🚀 El título recupera su física real y la línea muerde solo las letras */}
  <h2 className="text-[35px] md:text-[40px] text-stone-950 font-semibold border-b-4 border-red-600 pb-3 inline-block">
    Galería de Fotos
  </h2>

</div>
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((img, index) => (
          <div key={index} className="flex-none w-full">
            <div className="relative w-full h-80 md:h-100">
              <Image
                src={img}
                alt={`Foto ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default CarouselSwipe