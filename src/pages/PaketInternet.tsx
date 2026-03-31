import { Link } from 'react-router-dom';
import { packagesData } from '../data/packages';

export default function PaketInternet() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Header Section */}
      <section className="relative py-24 px-4 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/assets/HeroBG.png" 
            alt="Family using internet" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-[#011a4a]/85 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Penawaran Khusus dari Kami
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Pilih paket internet fiber optik yang sesuai dengan kebutuhan Anda. Semua paket dilengkapi dengan unlimited quota dan dukungan 24/7.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-[#F9FAFB] py-20 px-4 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Card Image Header */}
              <div className="relative h-56 w-full shrink-0">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover" 
                />
                {/* Badge */}
                {pkg.tag && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#2659cc] to-[#3a75f2] text-white px-5 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    {pkg.tag}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#012169] mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 font-medium mb-6">
                  {pkg.price} 
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow">
                  {pkg.description}
                </p>
                
                {/* Action Button */}
                <Link 
                  to={`/paket/${pkg.id}`} 
                  className="w-full bg-gradient-to-r from-[#1b4cb3] to-[#2659cc] text-white py-4 rounded-xl font-medium shadow-md hover:brightness-110 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Lihat Paket
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}