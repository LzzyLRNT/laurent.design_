import { Reveal } from './Reveal';
import { ArrowUpRight, Layout, BookOpen, Briefcase, Globe, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    title: 'Plantilla Portfolio',
    category: 'Plantilla Web',
    price: '€49',
    icon: Layout,
    desc: 'Plantilla de portfolio minimalista, lista para personalizar. Diseño editorial responsive.',
    badge: 'Más vendido',
    color: 'from-blue-50 to-white',
    cta: 'Comprar ahora',
    ctaNote: 'Descarga inmediata',
    isService: false,
  },
  {
    title: 'CV Editorial',
    category: 'Currículum',
    price: '€19',
    icon: Briefcase,
    desc: 'Plantilla de currículum en formato editable. Diseño limpio y profesional.',
    badge: null,
    color: 'from-slate-50 to-white',
    cta: 'Comprar ahora',
    ctaNote: 'Descarga inmediata',
    isService: false,
  },
  {
    title: 'Ebook Branding',
    category: 'Ebook',
    price: '€29',
    icon: BookOpen,
    desc: 'Guía completa de branding personal. 80 páginas con ejemplos prácticos.',
    badge: 'Nuevo',
    color: 'from-amber-50 to-white',
    cta: 'Comprar ahora',
    ctaNote: 'Descarga inmediata',
    isService: false,
  },
  {
    title: 'Web Completa + Mantenimiento',
    category: 'Servicio Premium',
    price: '€200',
    icon: Globe,
    desc: 'Diseño y desarrollo completo de tu página web a medida, más mantenimiento mensual, mejoras continuas, implementación de ideas, atención personalizada y soporte técnico completo. Todo incluido.',
    badge: 'Mejor valor',
    color: 'from-brand-50 to-white',
    cta: 'Solicitar este servicio',
    ctaNote: '+€50 / mes mantenimiento',
    isService: true,
  },
];

export function Shop() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="shop" className="relative bg-white py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-ink-300" />
                <span className="section-label">Tienda</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={100}>
              <h2 className="font-display text-huge lg:text-giant tracking-ultra leading-[0.95] text-ink-900">
                Productos digitales <span className="italic text-brand-500">con criterio</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-lg text-ink-500 leading-relaxed text-pretty">
                Recursos descargables y servicios diseñados con el mismo cuidado que nuestros proyectos a medida. Desde plantillas listas para usar hasta un servicio completo de tu presencia digital.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} variant="up" delay={(i % 4) * 80}>
                <div
                  className={`group relative bg-white border rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col ${
                    product.isService
                      ? 'border-brand-200 hover:border-brand-500 hover:shadow-[0_20px_60px_-15px_rgba(0,70,255,0.15)] lg:col-span-2'
                      : 'border-ink-100 hover:border-ink-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]'
                  }`}
                  onClick={() => product.isService && scrollTo('contact')}
                >
                  {/* Visual top */}
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
                    {product.badge && (
                      <span className={`absolute top-4 left-4 px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full border ${product.isService ? 'text-brand-700 bg-brand-50/80 border-brand-200' : 'text-ink-900 bg-white/80 border-ink-100'} backdrop-blur-sm`}>
                        {product.badge}
                      </span>
                    )}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${product.isService ? 'bg-brand-500' : 'bg-white'}`}>
                      <Icon className={`w-7 h-7 ${product.isService ? 'text-white' : 'text-ink-900'}`} />
                    </div>
                    <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-30" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-1">{product.category}</p>
                        <h3 className={`font-display text-xl tracking-tight transition-colors duration-500 ${product.isService ? 'text-ink-900 group-hover:text-brand-600' : 'text-ink-900 group-hover:text-brand-500'}`}>
                          {product.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="font-display text-2xl tracking-tight text-ink-900">{product.price}</span>
                      </div>
                    </div>
                    <p className="text-sm text-ink-500 leading-relaxed mb-5 text-pretty flex-1">{product.desc}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${product.isService ? 'text-brand-600 group-hover:text-brand-700' : 'text-ink-900 group-hover:text-brand-500'}`}>
                        {product.isService ? (
                          <>
                            {product.cta}
                            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                          </>
                        ) : (
                          <>
                            {product.cta}
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </span>
                      <span className="text-xs font-mono text-ink-300">{product.ctaNote}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom note */}
        <Reveal>
          <div className="mt-16 text-center">
            <p className="text-sm text-ink-400 font-mono uppercase tracking-widest">
              Todos los productos digitales incluyen actualizaciones gratuitas
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
