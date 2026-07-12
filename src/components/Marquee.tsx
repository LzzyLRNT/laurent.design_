const ITEMS = [
  'Diseño Web',
  'Shopify',
  'Landing Pages',
  'Branding',
  'UX/UI',
  'Diseño Gráfico',
  'Mantenimiento',
  'Automatizaciones',
  'Productos Digitales',
];

export function Marquee() {
  return (
    <div className="relative bg-white py-8 lg:py-12 overflow-hidden border-y border-ink-100">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 mx-8">
            <span className="font-display text-3xl lg:text-5xl tracking-tight text-ink-900">{item}</span>
            <span className="text-brand-500 text-2xl lg:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
