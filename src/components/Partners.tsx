export default function Partners() {
  const platforms = [
    { letter: "N", bg: "bg-[#E50914]", shadow: "shadow-red-600/20" },
    { letter: "Y", bg: "bg-[#4285F4]", shadow: "shadow-blue-600/20" },
    { letter: "▶", bg: "bg-[#FF0000]", shadow: "shadow-red-600/20" },
    { letter: "T", bg: "bg-[#6441A5]", shadow: "shadow-purple-600/20" },
    { letter: "♪", bg: "bg-[#1DB954]", shadow: "shadow-green-600/20" },
    { letter: "D+", bg: "bg-[#00D9FF]", shadow: "shadow-cyan-400/20" }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012169] mb-4 tracking-tight">
            Nikmati Streaming Tanpa Batas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Akses lebih dari 100+ platform streaming favorit dengan koneksi MyKlik Fiber yang cepat dan stabil
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {platforms.map((plat, idx) => (
            <div key={idx} className={`aspect-square flex items-center justify-center rounded-2xl ${plat.bg} text-white text-5xl font-bold shadow-lg ${plat.shadow} hover:scale-105 transition-transform cursor-pointer`}>
              {plat.letter}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm italic">
          Dan masih banyak lagi platform streaming lainnya yang dapat Anda nikmati
        </p>
      </div>
    </section>
  );
}