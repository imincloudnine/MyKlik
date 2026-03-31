import { Link, useParams } from 'react-router-dom';
import { packagesData } from '../data/packagesdetail'; // Import the data we just created

export default function PaketDetail() {
  const { id } = useParams();
  const packageData = packagesData.find((pkg) => pkg.id === Number(id));

  if (!packageData) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-4xl font-bold text-[#012169] mb-4">Paket Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8">Maaf, paket internet yang Anda cari tidak tersedia.</p>
        <Link to="/" className="bg-[#1b4cb3] text-white px-8 py-3 rounded-xl hover:bg-[#012169] transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Top Hero / Pricing Section */}
      <section className="bg-gray-50/50 pt-12 pb-20 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/paket-internet" className="inline-flex items-center gap-2 text-[#2659cc] font-medium hover:underline mb-8 transition-all">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <img 
                src={packageData.image} 
                alt={packageData.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Pricing Card & Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#012169] mb-4">
                  {packageData.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {packageData.subtitle}
                </p>
              </div>

              {/* Pricing Card */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                <div className="flex items-end gap-2 mb-2">
                  <h2 className="text-5xl font-bold text-[#012169]">{packageData.price}</h2>
                  <span className="text-gray-500 text-lg mb-1">{packageData.billingCycle}</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">* Harga belum termasuk PPN 11%</p>

                <div className="flex items-center gap-3 text-[#012169] font-bold text-xl mb-8">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  {packageData.speed}
                </div>

                <button className="w-full bg-[#1b4cb3] hover:bg-[#012169] text-white py-4 rounded-xl font-bold text-lg shadow-md transition-colors">
                  Berlangganan Sekarang
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Instalasi 1-3 hari
                </div>
                <div className="flex items-center gap-2">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Garansi 30 hari
                </div>
                <div className="flex items-center gap-2">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  Support 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Deskripsi */}
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-[#012169] mb-4">Deskripsi</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {packageData.description}
            </p>
          </div>

          {/* Grid for Features & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Fitur Lengkap */}
            <div>
              <h3 className="text-2xl font-bold text-[#012169] mb-6">Fitur Lengkap</h3>
              <ul className="space-y-4">
                {packageData.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="size-6 text-[#2659cc] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.707-11.707a1 1 0 00-1.414-1.414L11 13.586 8.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefit */}
            <div>
              <h3 className="text-2xl font-bold text-[#012169] mb-6">Manfaat untuk Anda</h3>
              <ul className="space-y-4">
                {packageData.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex items-center justify-center size-5 rounded-full bg-[#e6f0ff] text-[#2659cc] shrink-0">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="bg-gray-50 py-20 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-[#012169] mb-2">Syarat & Ketentuan</h3>
            <p className="text-gray-600 mb-8">Harap dibaca dengan seksama oleh calon pelanggan.</p>
            
            <ul className="list-disc pl-5 space-y-3 text-gray-600 marker:text-gray-400 text-sm md:text-base">
              {packageData.terms.map((term, idx) => (
                <li key={idx} className="pl-2">{term}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}