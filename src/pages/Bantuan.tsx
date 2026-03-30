import { useState } from 'react';

// This data structure is ready to be replaced by your CMS fetch later
const faqData = [
  {
    id: 1,
    question: "Apa saja perangkat yang disediakan selama masa berlangganan MyKlik Home Fiber?",
    answer: "Selama masa berlangganan aktif, MyKlik akan meminjamkan perangkat berupa modem ONT (Optical Network Terminal) dan router Wi-Fi standar tanpa biaya tambahan."
  },
  {
    id: 2,
    question: "Apakah Saya bisa meminta port forwarding untuk sistem CCTV?",
    answer: "Ya, Anda dapat menghubungi tim teknis kami untuk membuka atau mengonfigurasi port forwarding yang dibutuhkan agar sistem CCTV Anda dapat diakses dari luar jaringan."
  },
  {
    id: 3,
    question: "Berapa lama waktu pengaktifan layanan?",
    answer: "Pengaktifan layanan biasanya memakan waktu 1 hingga 3 hari kerja setelah proses registrasi, verifikasi lokasi, dan pembayaran pertama selesai dilakukan."
  },
  {
    id: 4,
    question: "Bagaimana cara melakukan pembayaran tagihan bulanan?",
    answer: "Anda dapat melakukan pembayaran melalui transfer bank (Virtual Account), minimarket terdekat, atau menggunakan dompet digital yang bekerjasama dengan MyKlik."
  },
  {
    id: 5,
    question: "Apakah ada batasan kuota (FUP) untuk paket internet MyKlik?",
    answer: "MyKlik menyediakan internet 100% unlimited tanpa adanya batasan kuota atau FUP (Fair Usage Policy). Kecepatan Anda akan tetap stabil sepanjang bulan."
  }
];

export default function Bantuan() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] relative">
      {/* <Navbar /> */}

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#012169] mb-2">Bantuan</h1>
          <p className="text-[#012169] font-medium">FAQ - Frequently Asked Question</p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4 pr-4">
                  {/* Chat bubble 'i' icon */}
                  <div className="shrink-0 flex items-center justify-center size-8 bg-[#012169] rounded-2xl rounded-bl-sm">
                    <span className="text-white font-serif font-bold italic text-sm">i</span>
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-[#2659cc] transition-colors">
                    {faq.question}
                  </span>
                </div>
                
                {/* Chevron Icon */}
                <svg 
                  className={`size-5 text-[#012169] shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-90' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Expandable Answer */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-1 pl-[4.5rem] text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 z-50 bg-[#012169] hover:bg-[#15347a] text-white px-6 py-3.5 rounded-full flex items-center gap-3 shadow-xl transition-transform hover:-translate-y-1">
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="font-medium">Chat Bantuan</span>
      </button>
    </div>
  );
}