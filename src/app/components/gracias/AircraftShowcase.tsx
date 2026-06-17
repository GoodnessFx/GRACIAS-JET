import { useFadeIn } from './useFadeIn';
import { SectionLabel } from './About';
import { ComingSoon } from './Services';
import { F } from './tokens';
import { useTheme } from './useTheme';

const aircraft = [
  {
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=700&q=85&auto=format&fit=crop',
    category: 'Ultra Long Range',
    name: 'Gulfstream G700',
    sub: 'Range 7,500 nm · 19 Passengers',
  },
  {
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=700&q=85&auto=format&fit=crop',
    category: 'Large Cabin',
    name: 'Bombardier Global 7500',
    sub: 'Range 7,700 nm · 19 Passengers',
  },
  {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=85&auto=format&fit=crop',
    category: 'Super Midsize',
    name: 'Cessna Citation Longitude',
    sub: 'Range 3,500 nm · 12 Passengers',
  },
];

export function AircraftShowcase() {
  const ref = useFadeIn<HTMLDivElement>();
  const { colors, theme } = useTheme();
  return (
    <section id="aircraft" style={{ background: colors.bg, padding: '100px 0' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <SectionLabel>In Focus</SectionLabel>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)',
            color: colors.text,
            lineHeight: 1.15,
            marginBottom: '16px',
          }}
        >
          Aircraft We Represent.
        </h2>
        <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '16px', color: colors.muted, lineHeight: 1.7, marginBottom: '56px', maxWidth: '600px' }}>
          Our portfolio spans every category of private aviation. The full marketplace is launching soon — explore a selection of the aircraft categories we work with.
        </p>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}
          className="aircraft-grid"
        >
          {aircraft.map((a) => (
            <AircraftCard key={a.name} {...a} />
          ))}
        </div>

        <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '15px', color: colors.muted, margin: 0 }}>
            Full aircraft listings, search, and valuations
          </p>
          <ComingSoon />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .aircraft-grid { grid-template-columns: 1fr !important; }
          #aircraft { padding: 64px 0 !important; }
          #aircraft > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}

function AircraftCard({ image, category, name, sub }: { image: string; category: string; name: string; sub: string }) {
  const { colors, theme } = useTheme();
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '2px',
        overflow: 'hidden',
        aspectRatio: '3/4',
        cursor: 'default',
      }}
      className="aircraft-card"
    >
      <img
        src={image}
        alt={name}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }}
        className="aircraft-img"
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: theme === 'dark'
            ? 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.40) 50%, transparent 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontFamily: F.body,
          fontWeight: 500,
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: colors.gold,
        }}
      >
        {category}
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
        <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: '26px', color: '#fff', lineHeight: 1.2 }}>
          {name}
        </div>
        <div style={{ fontFamily: F.body, fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginTop: '6px' }}>
          {sub}
        </div>
      </div>
      <style>{`
        .aircraft-card:hover .aircraft-img { transform: scale(1.04); }
      `}</style>
    </div>
  );
}
