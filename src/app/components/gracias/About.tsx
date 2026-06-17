import { useFadeIn } from './useFadeIn';
import { F } from './tokens';
import { useTheme } from './useTheme';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function About() {
  const ref = useFadeIn<HTMLDivElement>();
  const { colors } = useTheme();
  return (
    <section id="about" style={{ background: colors.bg, padding: '100px 0' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <SectionLabel>Who We Are</SectionLabel>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)',
            color: colors.text,
            lineHeight: 1.15,
            marginBottom: '48px',
          }}
        >
          A Fresh Standard in Private Aviation.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '55fr 45fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div>
            <p style={{...bodyStyle, color: colors.muted}}>
              Gracias Jet Sales is a global private jet sales and acquisition firm built on the belief that the experience of buying or selling an aircraft should be as refined as the aircraft itself. We are a modern, dynamic team — precise in our process, personal in our approach, and relentless in delivering outcomes that match your ambitions.
            </p>
            <p style={{ ...bodyStyle, color: colors.muted, marginTop: '20px' }}>
              We understand that no two clients are the same. Whether you are entering private aviation for the first time, expanding a fleet, or seeking a confidential sale, we design every engagement around your goals — handling every detail from initial consultation to final agreement with the same discretion and care that the transaction demands.
            </p>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: colors.gold,
                marginTop: '32px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Learn More About Our Approach
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=900&q=85&auto=format&fit=crop"
              alt="Private jet interior cabin"
              style={{
                width: '100%',
                height: '480px',
                objectFit: 'cover',
                borderRadius: '2px',
                border: `1px solid ${colors.border}`,
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about { padding: 64px 0 !important; }
          #about > div { padding: 0 24px !important; }
          .about-image { height: 320px !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme();
  return (
    <p
      style={{
        fontFamily: F.body,
        fontWeight: 500,
        fontSize: '10px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: colors.gold,
        marginBottom: '16px',
      }}
    >
      {children}
    </p>
  );
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: 1.8,
};
