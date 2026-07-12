import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid bg-[size:64px_64px] opacity-40"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-brand-100 opacity-40 blur-[120px]"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent-50 opacity-30 blur-[100px]"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full px-6 lg:px-12 pt-24 lg:pt-32">
        {/* Top label */}
        <div
          className={`flex items-center gap-3 mb-12 lg:mb-16 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-8 h-px bg-ink-300" />
          <span className="section-label">Laurent Studio · Diseño Digital</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display tracking-ultra leading-[0.95] text-ink-900">
          <span
            className={`block text-giant transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Construimos
          </span>
          <span
            className={`block text-giant transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <span className="italic font-normal text-brand-500">experiencias</span>{' '}
            <span className="text-ink-300">digitales</span>
          </span>
          <span
            className={`block text-giant transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            que hacen crecer
          </span>
          <span
            className={`block text-giant transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '550ms' }}
          >
            <span className="text-ink-900">negocios</span>
            <span className="text-brand-500">.</span>
          </span>
        </h1>

        {/* Subtitle + CTAs */}
        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div
            className={`max-w-md transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <p className="text-base lg:text-lg text-ink-500 leading-relaxed text-pretty">
              Diseño, desarrollo y administración de páginas web modernas para empresas, marcas y profesionales que buscan excelencia.
            </p>
          </div>

          <div
            className={`flex flex-wrap items-center gap-3 transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '850ms' }}
          >
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary group"
            >
              Solicitar presupuesto
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="btn-secondary group"
            >
              Ver proyectos
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`relative z-10 border-t border-ink-100 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-ink-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-slow" />
              Disponible para nuevos proyectos
            </div>
            <div className="hidden lg:flex items-center gap-6 text-xs font-mono text-ink-400 uppercase tracking-widest">
              <span>Diseño</span>
              <span className="text-ink-200">/</span>
              <span>Desarrollo</span>
              <span className="text-ink-200">/</span>
              <span>Administración</span>
            </div>
          </div>
          <button
            onClick={() => scrollTo('services')}
            className="flex items-center gap-2 text-xs font-mono text-ink-400 uppercase tracking-widest hover:text-ink-900 transition-colors duration-300"
          >
            Scroll
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
