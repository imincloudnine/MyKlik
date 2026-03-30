import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import Bantuan from './pages/Bantuan';
import Promo from './pages/Promo';
import PaketInternet from './pages/Paket Internet.tsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays at the top of every page */}
      <Navbar />
      
      {/* The Routes determine which page content to load */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/paket-internet" element={<PaketInternet />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}