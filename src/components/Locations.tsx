export default function Locations() {
  const locations = [
    { city: "Jakarta", province: "DKI Jakarta" },
    { city: "Surabaya", province: "Jawa Timur" },
    { city: "Bandung", province: "Jawa Barat" },
    { city: "Medan", province: "Sumatera Utara" },
    { city: "Bogor", province: "Jawa Barat" }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012169] mb-4">Lokasi Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">MyKlik hadir di berbagai kota besar di Indonesia untuk melayani Anda dengan koneksi fiber optik terbaik.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-[#012169] to-[#2659cc] rounded-xl shrink-0 shadow-lg shadow-blue-900/20">
                <img src="src/assets/LocIcon.svg" alt="Location Icon" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-[#2659cc] transition-colors">{loc.city}</h4>
                <p className="text-sm text-gray-500">{loc.province}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}