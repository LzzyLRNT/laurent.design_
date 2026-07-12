import { useState, type FormEvent } from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight, Check, Loader2, AlertCircle, Mail, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';

const EMAIL = 'lzzylrntt@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/laurent.design_/';
const INSTAGRAM_HANDLE = '@laurent.design_';

const SERVICES = [
  'Diseño Web',
  'Shopify',
  'Landing Page',
  'Branding',
  'Diseño Gráfico',
  'UX/UI',
  'Administración Web',
  'Mantenimiento',
  'Productos Digitales',
  'Otro',
];

const BUDGETS = ['< €1.000', '€1.000 – €3.000', '€3.000 – €10.000', '> €10.000', 'Sin definir'];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        service: form.service || null,
        budget: form.budget || null,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ha ocurrido un error. Inténtalo de nuevo.');
    }
  };

  return (
    <section id="contact" className="relative bg-ink-50 py-24 lg:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-100 opacity-30 blur-[120px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-ink-300" />
                <span className="section-label">Contacto</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={100}>
              <h2 className="font-display text-huge lg:text-giant tracking-ultra leading-[0.95] text-ink-900">
                Hablemos de <span className="italic text-brand-500">tu proyecto</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-lg text-ink-500 leading-relaxed text-pretty">
                Cuéntame qué necesitas. Te responderé en menos de 24 horas con una propuesta inicial.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left info */}
          <div className="lg:col-span-4">
            <Reveal variant="left">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 font-display text-lg lg:text-xl tracking-tight text-ink-900 hover:text-brand-500 transition-colors duration-300 link-underline"
                  >
                    <Mail className="w-4 h-4 text-ink-400" />
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-lg lg:text-xl tracking-tight text-ink-900 hover:text-brand-500 transition-colors duration-300 link-underline"
                  >
                    <Instagram className="w-4 h-4 text-ink-400" />
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">Disponibilidad</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse-slow" />
                    <p className="font-display text-xl tracking-tight text-ink-900">Aceptando proyectos</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">Tiempo de respuesta</p>
                  <p className="font-display text-xl tracking-tight text-ink-900">Menos de 24h</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form fields */}
          <div className="lg:col-span-8">
            <Reveal variant="right">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success-50 mb-6">
                    <Check className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-display text-3xl tracking-tight text-ink-900 mb-3">¡Mensaje enviado!</h3>
                  <p className="text-ink-500 max-w-md text-pretty">
                    Gracias por contactarme. Te responderé muy pronto con una propuesta inicial.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="btn-primary group"
                    >
                      Escribir email
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary group"
                    >
                      Ver Instagram
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink-200 text-ink-900 placeholder-ink-300 focus:outline-none focus:border-brand-500 transition-colors duration-300 text-lg"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink-200 text-ink-900 placeholder-ink-300 focus:outline-none focus:border-brand-500 transition-colors duration-300 text-lg"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink-200 text-ink-900 placeholder-ink-300 focus:outline-none focus:border-brand-500 transition-colors duration-300 text-lg"
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>

                  {/* Service + Budget */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
                        Servicio
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink-200 text-ink-900 focus:outline-none focus:border-brand-500 transition-colors duration-300 text-lg cursor-pointer"
                      >
                        <option value="">Selecciona un servicio</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
                        Presupuesto
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink-200 text-ink-900 focus:outline-none focus:border-brand-500 transition-colors duration-300 text-lg cursor-pointer"
                      >
                        <option value="">Rango de presupuesto</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-ink-200 text-ink-900 placeholder-ink-300 focus:outline-none focus:border-brand-500 transition-colors duration-300 text-lg resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-error-50 rounded-xl border border-error/20">
                      <AlertCircle className="w-5 h-5 text-error flex-shrink-0" />
                      <p className="text-sm text-error">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                    <p className="text-xs font-mono text-ink-400 uppercase tracking-widest">
                      También puedes escribirme directamente
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar mensaje
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
