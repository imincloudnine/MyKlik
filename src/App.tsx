import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import Bantuan from './pages/Bantuan';
import Promo from './pages/Promo';
import PaketInternet from './pages/Paket Internet.tsx';
import PaketDetail from './pages/PaketDetail.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/paket-internet" element={<PaketInternet />} />
        <Route path="/paket/:id" element={<PaketDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}