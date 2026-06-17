import { useFadeIn } from './useFadeIn';
import { SectionLabel } from './About';
import { F } from './tokens';
import { useTheme } from './useTheme';

const cols = [
  {
    title: 'Bespoke, Not Template',
    body: 'Every engagement is designed around the individual. We do not have a standard playbook because no two clients, no two aircraft, and no two transactions are the same.',
  },
  {
    title: 'Discretion as Standard',
    body: 'Confidentiality is not a feature we offer on request. It is the operating condition of every conversation, every negotiation, and every document we handle.',
  },
  {
    title: 'Modern Thinking',
    body: 'We bring contemporary strategy, global market intelligence, and digital reach to an industry that has operated on relationships alone for too long. That combination is our edge.',
  },
];

export function WhyGracias() {
  const ref = useFadeIn<HTMLDivElement>();
  const { colors } = useTheme();
  return (
    <section style={{ background: colors.surface, padding: '100px 0' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <SectionLabel>Why Us</SectionLabel>
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
          The Difference That Matters.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="why-grid">
          {cols.map((c) => (
            <div
              key={c.title}
              style={{
                borderTop: `3px solid ${colors.gold}`,
                padding: '36px 24px',
                background: colors.raised,
              }}
            >
              <h3
                style={{
                  fontFamily: F.display,
                  fontWeight: 600,
                  fontSize: '22px',
                  color: colors.text,
                  marginBottom: '16px',
                  lineHeight: 1.25,
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '15px', color: colors.muted, lineHeight: 1.7, margin: 0 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
          section[style*="padding: 100px 0"] { padding: 56px 0 !important; }
          section[style*="padding: 100px 0"] > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
