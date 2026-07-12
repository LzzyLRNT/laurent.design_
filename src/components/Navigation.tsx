import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Estudio', id: 'hero' },
  { label: 'Servicios', id: 'services' },
  { label: 'Proyectos', id: 'projects' },
  { label: 'Mantenimiento', id: 'maintenance' },
  { label: 'Tienda', id: 'shop' },
  { label: 'Contacto', id: 'contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass border-b border-ink-100' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1600px] px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group"
            aria-label="Laurent Studio — Inicio"
          >
            <img
              src="/images/image copy.png"
              alt="Laurent Studio"
              className="h-10 w-10 object-contain rounded-full"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="link-underline text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-ink-900 text-white rounded-full text-sm font-medium tracking-tight transition-all duration-500 hover:bg-brand-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Solicitar presupuesto
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 text-ink-900"
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 glass" onClick={() => setMenuOpen(false)} />
        <div className="relative flex flex-col items-center justify-center h-full gap-2 px-8">
          {/* Mobile logo */}
          <img
            src="/images/image copy.png"
            alt="Laurent Studio"
            className="h-12 w-12 object-contain rounded-full mb-6"
          />
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-3xl font-display tracking-tight text-ink-900 py-3 transition-all duration-500 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className={`mt-8 inline-flex items-center gap-1.5 px-7 py-3.5 bg-ink-900 text-white rounded-full text-sm font-medium tracking-tight transition-all duration-500 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 60 + 100}ms` : '0ms' }}
          >
            Solicitar presupuesto
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
