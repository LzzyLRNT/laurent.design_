import { Reveal } from './Reveal';
import { Shield, RefreshCw, Database, Gauge, Headphones, TrendingUp, Lock, Server, ArrowUpRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'Seguridad',
    desc: 'Monitorización proactiva, parches de seguridad y protección contra amenazas. Tu web siempre protegida.',
  },
  {
    icon: RefreshCw,
    title: 'Actualizaciones',
    desc: 'Mantenemos tu CMS, plugins y dependencias siempre actualizados. Sin interrupciones.',
  },
  {
    icon: Database,
    title: 'Copias de seguridad',
    desc: 'Backups automáticos y periódicos. Tu información siempre segura y recuperable.',
  },
  {
    icon: Gauge,
    title: 'Optimización',
    desc: 'Velocidad de carga, Core Web Vitals y rendimiento técnico siempre al máximo.',
  },
  {
    icon: Headphones,
    title: 'Soporte técnico',
    desc: 'Atención directa y respuesta rápida. Estoy aquí cuando me necesitas.',
  },
  {
    icon: TrendingUp,
    title: 'Mejoras continuas',
    desc: 'No solo mantengo. Evoluciono tu web con mejoras constantes y nuevas funcionalidades.',
  },
];

export function Maintenance() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="maintenance" className="relative bg-ink-900 text-white py-24 lg:py-40 overflow-hidden noise">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-500 opacity-10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500 opacity-5 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:64px_64px] opacity-30" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-32">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-ink-300" />
                <span className="section-label text-ink-400">Mantenimiento Web</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={100}>
              <h2 className="font-display text-huge lg:text-giant tracking-ultra leading-[0.95]">
                Tú te encargas de tu negocio.
                <br />
                <span className="italic text-brand-400">Yo de tu web</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-lg text-ink-300 leading-relaxed text-pretty">
                No solo diseño páginas web. Las administro, las protejo y las hago evolucionar. Un servicio completo para que no tengas que preocuparte por nada técnico.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Main value proposition */}
        <Reveal variant="scale">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-500">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-400">Servicio Premium</span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl tracking-tight leading-tight mb-4">
                Tranquilidad total, <span className="italic text-brand-400">las 24 horas</span>.
              </h3>
              <p className="text-ink-300 leading-relaxed text-pretty">
                El servicio de mantenimiento es uno de los grandes valores de Laurent Studio. Una web no es un proyecto que termina, es un activo vivo que necesita cuidado constante.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {FEATURES.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <Reveal key={feature.title} variant="up" delay={(i % 2) * 80}>
                      <div className="group p-6 rounded-xl border border-ink-700 hover:border-brand-500 transition-all duration-500 hover:bg-ink-800">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-brand-400 transition-transform duration-500 group-hover:scale-110" />
                          <h4 className="font-medium text-white tracking-tight">{feature.title}</h4>
                        </div>
                        <p className="text-sm text-ink-400 leading-relaxed text-pretty">{feature.desc}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats bar */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-b border-ink-700">
            {[
              { value: '99.9%', label: 'Uptime garantizado' },
              { value: '< 2h', label: 'Tiempo de respuesta' },
              { value: '24/7', label: 'Monitorización' },
              { value: '100%', label: 'Copias de seguridad' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl lg:text-5xl tracking-tight text-white mb-1">{stat.value}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-ink-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Server className="w-6 h-6 text-brand-400" />
              <p className="font-display text-2xl lg:text-3xl tracking-tight">
                Deja tu web en buenas manos.
              </p>
            </div>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink-900 rounded-full text-sm font-medium tracking-tight transition-all duration-500 hover:bg-brand-500 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
            >
              Contratar mantenimiento
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
