import { useState, useEffect } from 'react';

const PHRASES = [
  "Streaming tanpa buffering",
  "Gaming tanpa lag",
  "Meeting online lancar",
  "Download super cepat",
  "Upload dalam sekejap"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const currentPhrase = PHRASES[loopNum % PHRASES.length];

      if (isDeleting) {
        setText((prev) => currentPhrase.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentPhrase.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentPhrase) {
        setTypingSpeed(2000); 
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); 
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative h-[674px] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/HeroBG.png" className="w-full h-full object-cover" alt="Hero Bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#012169]/85 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#155dfc]/20 via-transparent to-[#00b8db]/20"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 w-full grid gap-4">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/10">
            <span className="size-2 rounded-full bg-[#05df72]"></span>
            <span className="text-sm font-medium">Fiber Optic 100% • Tersedia di Kotamu</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Internet Cepat untuk<br/>
            <div className="gradient-text">
              <span>{text}</span>
              <span className="cursor text-[#51a2ff]">|</span>
            </div>
          </h1>
        </div>

        <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
          Nikmati koneksi internet super cepat dengan teknologi Fiber Optic. Stabil, andal, dan siap mendukung semua aktivitas digital keluarga Anda.
        </p>

        <div className="flex flex-wrap gap-6 pt-4">
          {['Instalasi Gratis', '24/7 Support', 'Harga Terjangkau'].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-white/80">
              <svg className="size-5 text-[#05df72]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center w-full">
          <h2 className="text-2xl font-bold text-white mb-2">Cek Ketersediaan Layanan di Lokasi Anda</h2>
          <p className="text-white/80 mb-6">Masukkan alamat Anda untuk mengetahui jangkauan layanan MyKlik Fiber</p>
        
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/95 backdrop-blur rounded-xl p-3 flex flex-col md:flex-row gap-4 shadow-2xl border border-white/50">
              <div className="flex-1 flex items-center gap-3 px-4">
                <svg className="size-6 text-[#2659CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input type="text" placeholder="Jl. Lowanu No. 32" className="w-full bg-transparent border-none focus:ring-0 text-gray-900 text-lg outline-none" />
              </div>
              <button className="bg-gradient-to-b from-[#012169] to-[#2659cc] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Cari Lokasi
              </button>
            </div>
            <p className="text-xs text-white/70 mt-3 italic">💡 Tips: Masukkan nama jalan, nomor rumah, atau landmark terdekat</p>
          </div>
        </div>
      </div>
    </section>
  );
}