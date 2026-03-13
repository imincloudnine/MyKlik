import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* Add your Stats, Products, and Boxes components here similarly */}
      </main>
      <Footer />
    </div>
  );
}

export default App;