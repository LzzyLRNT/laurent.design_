import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Loader2, Mail, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';

const EMAIL = 'lzzylrntt@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/laurent.design_/';
const INSTAGRAM_HANDLE = '@laurent.design_';

const FOOTER_LINKS = [
  {
    title: 'Servicios',
    links: ['Diseño Web', 'Shopify', 'Landing Pages', 'Branding', 'UX/UI', 'Mantenimiento'],
  },
  {
    title: 'Estudio',
    links: ['Proyectos', 'Mantenimiento', 'Tienda', 'Contacto'],
  },
  {
    title: 'Contacto',
    links: ['Email', 'Instagram'],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setNewsletterStatus('loading');
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, source: 'footer' });

      if (error) {
        if (error.code === '23505') {
          setNewsletterStatus('success');
          setEmail('');
        } else {
          throw error;
        }
      } else {
        setNewsletterStatus('success');
        setEmail('');
      }
    } catch {
      setNewsletterStatus('error');
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink-900 text-white overflow-hidden noise">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-500 opacity-10 blur-[150px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Newsletter */}
        <div className="py-16 lg:py-24 border-b border-ink-700">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="section-label text-ink-400 mb-4">Newsletter</p>
              <h3 className="font-display text-3xl lg:text-5xl tracking-tight leading-tight">
                Recibe ideas, recursos y novedades <span className="italic text-brand-400">directamente en tu inbox</span>.
              </h3>
            </div>
            <div className="lg:col-span-5">
              {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-3 p-4 bg-ink-800 rounded-xl border border-ink-700">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success-50">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-sm text-ink-200">¡Suscripción confirmada! Gracias por unirte.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="tu@email.com"
                    className="flex-1 px-5 py-3.5 bg-ink-800 border border-ink-700 rounded-full text-white placeholder-ink-400 focus:outline-none focus:border-brand-500 transition-colors duration-300 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-white text-ink-900 rounded-full text-sm font-medium tracking-tight transition-all duration-500 hover:bg-brand-500 hover:text-white hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                  >
                    {newsletterStatus === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Suscribirme
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
              {newsletterStatus === 'error' && (
                <p className="mt-2 text-sm text-error">Ha ocurrido un error. Inténtalo de nuevo.</p>
              )}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="py-16 lg:py-20 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 mb-6 group">
              <img
                src="/images/image copy.png"
                alt="Laurent Studio"
                className="h-12 w-12 object-contain rounded-full"
              />
            </button>
            <p className="text-ink-400 leading-relaxed max-w-xs text-pretty">
              Diseño, desarrollo y administración de páginas web. Experiencias digitales que hacen crecer negocios.
            </p>
            {/* Direct contact links */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-white transition-colors duration-300 link-underline"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-white transition-colors duration-300 link-underline"
              >
                <Instagram className="w-4 h-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => {
                    const id = link.toLowerCase().replace(/[^a-z]/g, '');
                    const isEmail = link === 'Email';
                    const isInstagram = link === 'Instagram';
                    if (isEmail) {
                      return (
                        <li key={link}>
                          <a
                            href={`mailto:${EMAIL}`}
                            className="text-sm text-ink-300 hover:text-white transition-colors duration-300 link-underline"
                          >
                            {link}
                          </a>
                        </li>
                      );
                    }
                    if (isInstagram) {
                      return (
                        <li key={link}>
                          <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-ink-300 hover:text-white transition-colors duration-300 link-underline"
                          >
                            {link}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={link}>
                        <button
                          onClick={() => {
                            if (['servicios', 'proyectos', 'mantenimiento', 'tienda', 'contacto'].includes(id)) {
                              scrollTo(id);
                            }
                          }}
                          className="text-sm text-ink-300 hover:text-white transition-colors duration-300 link-underline"
                        >
                          {link}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant text */}
        <div className="py-12 lg:py-16 border-t border-ink-700">
          <p className="font-display text-mega tracking-ultra leading-[0.85] text-ink-800 select-none">
            Laurent<span className="text-brand-500">.</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-ink-400 uppercase tracking-widest">
            © 2024 Laurent Studio. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs font-mono text-ink-400 uppercase tracking-widest">
            <span>Diseñado con cuidado</span>
            <span className="text-ink-600">·</span>
            <span>Construido para crecer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
