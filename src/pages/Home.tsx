import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Products from '../components/Products';
import Features from '../components/Features';
import Locations from '../components/Locations';
import Partners from '../components/Partners';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Products />
      <Features />
      <Locations />
      <Partners />
    </main>
  );
}