import { Reveal } from './Reveal';
import { ArrowUpRight, Monitor, ShoppingBag, Layout, Palette, PenTool, Layers, Shield, RefreshCw, FileText, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    title: 'Diseño Web',
    desc: 'Sitios web a medida, diseñados desde cero con una estética editorial y una arquitectura de información impecable.',
    icon: Monitor,
    tags: ['Diseño a medida', 'Responsive', 'Prototipado'],
  },
  {
    num: '02',
    title: 'Shopify',
    desc: 'Tiendas online de alto rendimiento sobre Shopify, optimizadas para conversión y diseñadas para vender.',
    icon: ShoppingBag,
    tags: ['E-commerce', 'Shopify Plus', 'Conversión'],
  },
  {
    num: '03',
    title: 'Landing Pages',
    desc: 'Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Cada elemento tiene un propósito.',
    icon: Layout,
    tags: ['Conversión', 'A/B Testing', 'Performance'],
  },
  {
    num: '04',
    title: 'Branding',
    desc: 'Identidad visual completa: logotipo, sistema de marca, paleta cromática y guidelines de aplicación.',
    icon: Palette,
    tags: ['Identidad', 'Logo', 'Sistema de marca'],
  },
  {
    num: '05',
    title: 'Diseño Gráfico',
    desc: 'Diseño gráfico profesional para soporte digital e impreso. Piezas que comunican con claridad y elegancia.',
    icon: PenTool,
    tags: ['Editorial', 'Digital', 'Print'],
  },
  {
    num: '06',
    title: 'UX/UI',
    desc: 'Diseño de interfaces centrado en las personas. Investigación, wireframes, prototipos y diseño de interacción.',
    icon: Layers,
    tags: ['Research', 'Prototipado', 'Design System'],
  },
  {
    num: '07',
    title: 'Administración Web',
    desc: 'Gestionamos tu página web por completo. Seguridad, actualizaciones, copias de seguridad y soporte continuo.',
    icon: Shield,
    tags: ['Seguridad', 'Updates', 'Backups'],
  },
  {
    num: '08',
    title: 'Mantenimiento',
    desc: 'Mantenimiento técnico proactivo. Optimización de velocidad, mejoras continuas y monitorización 24/7.',
    icon: RefreshCw,
    tags: ['Performance', 'Monitoring', 'Mejoras'],
  },
  {
    num: '09',
    title: 'Productos Digitales',
    desc: 'Plantillas, currículums, ebooks, PDFs y recursos descargables. Diseño premium listo para usar.',
    icon: FileText,
    tags: ['Plantillas', 'Ebooks', 'Recursos'],
  },
];

export function Services() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative bg-white py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-32">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-ink-300" />
                <span className="section-label">Servicios</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={100}>
              <h2 className="font-display text-huge lg:text-giant tracking-ultra leading-[0.95] text-ink-900">
                Todo lo que tu marca necesita, <span className="italic text-brand-500">cuidado al detalle</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-lg text-ink-500 leading-relaxed text-pretty">
                Desde la primera línea de código hasta el último detalle de tu identidad. Un servicio integral para que tu presencia digital sea impecable.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100 rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.num} variant="scale" delay={(i % 3) * 80}>
                <div className="group relative bg-white p-8 lg:p-10 h-full transition-all duration-500 hover:bg-ink-50 cursor-pointer min-h-[280px] flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-xs text-ink-300 tracking-widest">{service.num}</span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-ink-100 text-ink-400 transition-all duration-500 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:rotate-12">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-ink-900 mb-3 transition-colors duration-500 group-hover:text-brand-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-6 flex-1 text-pretty">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-ink-400 bg-ink-50 rounded-full border border-ink-100 transition-colors duration-500 group-hover:border-ink-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-8 right-8 opacity-0 transition-all duration-500 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-brand-500" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA bar */}
        <Reveal>
          <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row items-center justify-between gap-6 p-8 lg:p-12 bg-ink-900 rounded-2xl">
            <div className="flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-brand-400" />
              <p className="font-display text-2xl lg:text-3xl tracking-tight text-white">
                ¿No sabes por dónde empezar?
              </p>
            </div>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink-900 rounded-full text-sm font-medium tracking-tight transition-all duration-500 hover:bg-brand-500 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
