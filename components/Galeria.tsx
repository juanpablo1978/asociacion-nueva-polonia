'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useFadeIn } from '../hooks/useFadeIn'

const images = [
  '/galeria1.jpg',
  '/galeria2.jpg',
  '/galeria3.jpg',
  '/galeria4.png',
  '/galeria5.jpg',
  '/galeria6.jpg',
  '/galeria7.jpg',
  '/galeria8.jpg',
]

const slides = images.map((img) => ({ src: img }))

const CarouselSwipe = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true })
  const [open, setOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const { ref, visible } = useFadeIn()

  return (
    <section
      ref={ref}
      className={`py-20 px-4 md:px-10 bg-stone-50 w-full flex flex-col lg:px-28
      transition-all duration-700 delay-100
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full flex justify-center mb-10">
        <h2 className="text-[35px] md:text-[40px] text-stone-950 font-semibold border-b-4 border-red-600 pb-3 inline-block">
          Galería de Fotos
        </h2>
      </div>

      {/* Mobile y tablet - carrusel */}
      <div className="overflow-hidden lg:hidden" ref={emblaRef}>
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

      {/* Desktop - grid con lightbox */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-60 cursor-pointer overflow-hidden group"
            onClick={() => { setLightboxIndex(index); setOpen(true) }}
          >
            <Image
              src={img}
              alt={`Foto ${index + 1}`}
              fill
              sizes="25vw"
              className="object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </section>
  )
}

export default CarouselSwipe