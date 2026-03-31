import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Removed the .tsx extensions and fixed the space!
import Home from './pages/Home';
import Bantuan from './pages/Bantuan';
import Promo from './pages/Promo';
import PaketInternet from './pages/PaketInternet.tsx'; 
import PaketDetail from './pages/PaketDetail';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/paket-internet" element={<PaketInternet />} />
        <Route path="/paket/:id" element={<PaketDetail />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}