export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#012169] to-[#2659cc] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <div className="space-y-10 max-w-lg">
          <div className="space-y-6">
            <img src="/assets/MyKlikBNW.svg" className="h-16 w-auto" alt="Footer Logo" />
            <p className="text-white/80 font-arimo leading-relaxed">MyKlik adalah layanan internet fiber optik terdepan di Indonesia yang menghadirkan koneksi super cepat, stabil, dan terpercaya untuk rumah dan bisnis Anda.</p>
          </div>
          
          <div className="space-y-4">
            <p className="font-medium">Dapatkan Info Promo Terbaru</p>
            <div className="flex items-center bg-white/10 rounded-xl border border-white/20 p-2">
              <input type="email" placeholder="Email Anda" className="flex-1 bg-transparent px-4 outline-none text-white placeholder:text-white/50" />
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <svg className="size-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Produk</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Paket Home Fiber</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cek Cakupan Area</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Bantuan</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Kontak</h4>
            <div className="flex gap-4">
              <div className="p-2 bg-white/10 rounded-lg h-fit">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div><p className="text-xs">Customer Service</p><p className="text-sm font-bold">1500-888</p></div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 bg-white/10 rounded-lg h-fit">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div><p className="text-xs">Email</p><p className="text-sm font-bold">info@myklik.com</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 border-t border-white/20 mt-16 pt-8 text-center text-white/60 text-sm">
        <p>© 2026 MyKlik. All rights reserved.</p>
      </div>
    </footer>
  );
}