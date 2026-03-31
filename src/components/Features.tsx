export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          <img src="/assets/Box2.png" className="w-full lg:w-[616px] h-[347px] object-cover rounded-xl" alt="Fast Internet" />
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-[#012169] leading-tight">Nikmati Internet Cepat dengan Harga Lebih Hemat!</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Dengan MyKlik Home Fiber, Anda bisa menikmati koneksi internet cepat, stabil, dan andal untuk seluruh aktivitas online keluarga.</p>
            <button className="bg-gradient-to-b from-[#012169] to-[#2659cc] text-white px-8 py-4 rounded-xl shadow-md hover:scale-105 transition-transform">Lihat Paket →</button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white rounded-2xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          <img src="/assets/Box1.png" className="w-full lg:w-[616px] h-[347px] object-cover rounded-xl" alt="Upgrade" />
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-[#012169] leading-tight">Butuh Internet Lebih Kencang? Saatnya Upgrade!</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Jika aktivitas online semakin padat dan banyak perangkat terhubung, upgrade paket MyKlik adalah solusi terbaik.</p>
            <button className="bg-gradient-to-b from-[#012169] to-[#2659cc] text-white px-8 py-4 rounded-xl shadow-md hover:scale-105 transition-transform">Upgrade Paket →</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          <img src="/assets/Box3.png" className="w-full lg:w-[616px] h-[347px] object-cover rounded-xl" alt="Daftar" />
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-[#012169] leading-tight">Daftar Sekarang, Nikmati Koneksi Andal MyKlik!</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Bergabunglah dengan MyKlik dan nikmati pengalaman internet berbasis Fiber Optic yang stabil, cepat, dan siap mendukung berbagai kebutuhan digital Anda.</p>
            <button className="bg-gradient-to-b from-[#012169] to-[#2659cc] text-white px-8 py-4 rounded-xl shadow-md hover:scale-105 transition-transform">Daftar Sekarang →</button>
          </div>
        </div>
      </div>
    </section>
  );
}