import { useState } from 'react';
import { F } from './tokens';
import { useTheme } from './useTheme';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const { colors, theme } = useTheme();
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: colors.bg,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1800&q=90&auto=format&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: theme === 'dark' 
            ? 'linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.70) 50%, rgba(8,8,8,0.30) 100%)'
            : 'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.70) 50%, rgba(255,255,255,0.30) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 48px',
          width: '100%',
          paddingTop: '120px',
          paddingBottom: '100px',
        }}
      >
        <div style={{ maxWidth: '580px' }}>
          <p
            style={{
              fontFamily: F.body,
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: colors.gold,
              marginBottom: '24px',
            }}
          >
            Global Private Jet Sales and Acquisition
          </p>

          <h1
            style={{
              fontFamily: F.display,
              fontWeight: 600,
              fontSize: 'clamp(44px, 6vw, 72px)',
              color: colors.text,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '28px',
            }}
          >
            The Sky Is Not
            <br />
            The Limit.
            <br />
            It Is The Beginning.
          </h1>

          <p
            style={{
              fontFamily: F.body,
              fontWeight: 400,
              fontSize: '17px',
              color: colors.muted,
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '520px',
            }}
          >
            Gracias Jet Sales connects discerning buyers and sellers to the world's finest private aircraft — with precision, discretion, and a standard of service that matches the aircraft we represent.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <PrimaryBtn onClick={() => scrollTo('contact')}>Start Your Acquisition</PrimaryBtn>
            <SecondaryBtn onClick={() => scrollTo('contact')}>List Your Aircraft</SecondaryBtn>
          </div>

          <div style={{ width: '280px', height: '1px', background: colors.border, marginBottom: '28px' }} />

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <Stat number="$2B+" label="Aircraft Placed Globally" />
            <Stat number="50+" label="Jet Models Represented" />
            <Stat number="100%" label="Client Discretion Guaranteed" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div:last-child {
            padding: 0 24px !important;
            padding-top: 100px !important;
            padding-bottom: 64px !important;
          }
        }
      `}</style>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  const { colors } = useTheme();
  return (
    <div>
      <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: '36px', color: colors.gold, lineHeight: 1 }}>
        {number}
      </div>
      <div style={{ fontFamily: F.body, fontWeight: 400, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.muted, marginTop: '6px' }}>
        {label}
      </div>
    </div>
  );
}

function PrimaryBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  const { colors } = useTheme();
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: F.body,
        fontWeight: 700,
        fontSize: '13px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '16px 36px',
        borderRadius: '2px',
        border: 'none',
        background: hov ? '#B8973E' : colors.gold,
        color: colors.bg,
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  );
}

function SecondaryBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  const { colors } = useTheme();
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: F.body,
        fontWeight: 500,
        fontSize: '13px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '16px 36px',
        borderRadius: '2px',
        background: 'transparent',
        border: `1px solid ${hov ? colors.gold : colors.text}`,
        color: hov ? colors.gold : colors.text,
        cursor: 'pointer',
        transition: 'border-color 0.2s ease, color 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  );
}
