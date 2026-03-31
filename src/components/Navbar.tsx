import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[999] bg-white border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          
          <div className="flex shrink-0 items-center">
            <Link to="/">
              <img src="/assets/MyKlikLogo.png" alt="MyKlik Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/paket-internet" className="text-gray-900 hover:text-[#2659cc] transition-colors font-regular">Paket Internet</Link>
            <Link to="/cek-cakupan" className="text-gray-900 hover:text-[#2659cc] transition-colors font-regular">Cek Cakupan</Link>
            <Link to="/promo" className="text-gray-900 hover:text-[#2659cc] transition-colors font-regular">Promo</Link>
            <Link to="/bantuan" className="text-gray-900 hover:text-[#2659cc] transition-colors font-regular">Bantuan</Link>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-xl border border-[#012169] text-[#012169] hover:bg-gray-50 transition-all">Masuk</button>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#012169] to-[#2659cc] text-white shadow-md hover:-translate-y-0.5 transition-all">Daftar Sekarang</button>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="text-gray-600 p-2">
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}