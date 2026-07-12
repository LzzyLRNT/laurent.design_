import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Maintenance } from './components/Maintenance';
import { Shop } from './components/Shop';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Maintenance />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
