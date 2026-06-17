import { useFadeIn } from './useFadeIn';
import { SectionLabel } from './About';
import { F } from './tokens';
import { useTheme } from './useTheme';

const testimonials = [
  {
    quote: 'Working with Gracias Jet Sales was unlike any transaction I have experienced in aviation. They found a Gulfstream G650 that matched every requirement within three weeks, and the discretion throughout was absolute.',
    name: 'A.O., Lagos',
    desc: 'Business Executive and Fleet Owner',
  },
  {
    quote: 'I needed to sell my Challenger 604 quickly and confidentially. Gracias handled everything — the right buyer, the right price, and zero stress from my side. That is the standard.',
    name: 'F.A., Dubai',
    desc: 'Private Aircraft Owner',
  },
  {
    quote: 'As a first-time buyer, I was navigating unfamiliar territory. Their team guided me through every decision with patience and expertise. I walked away with the right aircraft and the confidence to know it.',
    name: 'M.K., London',
    desc: 'Entrepreneur and First-Time Buyer',
  },
];

export function Testimonials() {
  const ref = useFadeIn<HTMLDivElement>();
  const { colors } = useTheme();
  return (
    <section id="testimonials" style={{ background: colors.bg, padding: '100px 0' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <SectionLabel>Client Words</SectionLabel>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)',
            color: colors.text,
            lineHeight: 1.15,
            marginBottom: '56px',
          }}
        >
          Those Who Fly With Us.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="testimonials-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          #testimonials { padding: 56px 0 !important; }
          #testimonials > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ quote, name, desc }: { quote: string; name: string; desc: string }) {
  const { colors } = useTheme();
  return (
    <div
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        padding: '36px',
        borderRadius: '2px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '16px',
          left: '24px',
          fontFamily: F.display,
          fontWeight: 600,
          fontSize: '72px',
          color: colors.gold,
          opacity: 0.2,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        "
      </span>
      <p
        style={{
          fontFamily: F.display,
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: '20px',
          color: colors.text,
          lineHeight: 1.6,
          marginTop: '32px',
          marginBottom: '28px',
        }}
      >
        {quote}
      </p>
      <div style={{ width: '100%', height: '1px', background: colors.border, marginBottom: '20px' }} />
      <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: '13px', color: colors.text }}>{name}</div>
      <div style={{ fontFamily: F.body, fontWeight: 400, fontSize: '12px', color: colors.muted, marginTop: '4px' }}>{desc}</div>
    </div>
  );
}
