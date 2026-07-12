import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Aurea Studio',
    category: 'Diseño Web · Branding',
    year: '2024',
    desc: 'Identidad digital completa para un estudio de arquitectura. Sitio web editorial con galería inmersiva y sistema de portafolio.',
    image: 'https://images.pexels.com/photos/3147840/pexels-photo-3147840.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Web Design', 'Branding', 'CMS'],
    color: 'bg-brand-50',
  },
  {
    title: 'Nórdico Coffee',
    category: 'Shopify · E-commerce',
    year: '2024',
    desc: 'Tienda online para una marca de café de especialidad. Diseño minimalista con experiencia de compra fluida y conversión optimizada.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Shopify', 'E-commerce', 'UX'],
    color: 'bg-amber-50',
  },
  {
    title: 'Meridian Finance',
    category: 'Landing Page · UX/UI',
    year: '2024',
    desc: 'Landing page para una fintech. Diseño limpio, datos claros y una jerarquía visual que transmite confianza desde el primer scroll.',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Landing', 'Fintech', 'UX/UI'],
    color: 'bg-slate-50',
  },
  {
    title: 'Vera Atelier',
    category: 'Diseño Web · Diseño Gráfico',
    year: '2023',
    desc: 'Sitio portfolio para una fotógrafa de moda. Composición editorial a pantalla completa con transiciones cinematográficas.',
    image: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Portfolio', 'Editorial', 'Photography'],
    color: 'bg-rose-50',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-ink-50 py-24 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-ink-300" />
                <span className="section-label">Proyectos</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={100}>
              <h2 className="font-display text-huge lg:text-giant tracking-ultra leading-[0.95] text-ink-900">
                Trabajo que <span className="italic text-brand-500">habla por sí solo</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-lg text-ink-500 leading-relaxed text-pretty">
                Una selección de proyectos donde el diseño, la estrategia y la tecnología convergen en experiencias memorables.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Fictional disclaimer */}
        <Reveal>
          <div className="mb-12 lg:mb-16 flex items-center gap-3 p-4 bg-white border border-ink-100 rounded-xl">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink-50 text-ink-400 flex-shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </span>
            <p className="text-sm text-ink-500 leading-relaxed">
              <span className="font-medium text-ink-700">Proyectos de muestra.</span> Los siguientes proyectos son ejemplos ficticios creados como muestrario para ilustrar los servicios que ofrece Laurent Studio. Cada pieza refleja el nivel de calidad y la estética que aplicamos en trabajos reales.
            </p>
          </div>
        </Reveal>

        {/* Projects */}
        <div className="space-y-8 lg:space-y-12">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} variant="up" delay={(i % 2) * 100}>
              <div className="group relative cursor-pointer">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Image */}
                  <div className={`lg:col-span-8 relative aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden ${project.color}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Info */}
                  <div className="lg:col-span-4 lg:pl-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-ink-400 tracking-widest">{project.year}</span>
                      <span className="w-4 h-px bg-ink-200" />
                      <span className="font-mono text-xs text-ink-400 tracking-widest">{String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}</span>
                    </div>

                    <h3 className="font-display text-3xl lg:text-4xl tracking-tight text-ink-900 mb-2 transition-colors duration-500 group-hover:text-brand-500">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono uppercase tracking-wider text-ink-400 mb-4">
                      {project.category}
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed mb-6 text-pretty">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-ink-400 bg-white rounded-full border border-ink-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:text-brand-500 transition-colors duration-300">
                      Ver caso de estudio
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <div className="mt-16 lg:mt-24 text-center">
            <p className="text-sm text-ink-400 mb-4 font-mono uppercase tracking-widest">¿Tienes un proyecto en mente?</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-display text-3xl lg:text-4xl tracking-tight text-ink-900 hover:text-brand-500 transition-colors duration-300 group"
            >
              Cuéntame tu idea
              <ArrowUpRight className="w-7 h-7 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
