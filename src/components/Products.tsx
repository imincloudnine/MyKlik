import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Products() {
  const products = [
    { img: "/assets/paket_30.png", tag: "Populer", alt: "Paket 30" },
    { img: "/assets/paket_100.png", tag: "Trending", alt: "Paket 100" },
    { img: "/assets/paket_400.png", tag: "New", alt: "Paket 400" },
  ];

  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center", // show side overflow/peek
      loop: true,
      dragFree: false,
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      autoplay.current.reset();
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 text-center">
      <p className="text-xl text-gray-800 mb-10">Produk Kami</p>

      <div className="relative w-[96vw] mx-auto mb-12 overflow-visible">
        <div className="overflow-visible rounded-2xl" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 px-2 md:px-0">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="relative min-w-0 shrink-0 basis-[100%] sm:basis-[88%] md:basis-1/3 h-[260px] md:h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-white"
              >
                <img
                  src={product.img}
                  className="size-full object-contain"
                  alt={product.alt}
                />
                <div className="absolute top-[55%] left-6 bg-gradient-to-b from-[#012169] to-[#2659cc] text-white px-5 py-1.5 rounded-full text-xs shadow-lg">
                  {product.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          aria-label="Previous product"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#012169] size-10 rounded-full shadow flex items-center justify-center md:hidden"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next product"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#012169] size-10 rounded-full shadow flex items-center justify-center md:hidden"
        >
          ›
        </button>

        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to product ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                selectedIndex === idx ? "w-6 bg-[#012169]" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <button className="inline-flex items-center gap-2 px-10 py-4 rounded-xl border-2 border-[#012169] text-[#012169] font-bold hover:bg-[#012169] hover:text-white transition-all shadow-lg group">
        Mulai Berlangganan
        <svg
          className="size-5 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}