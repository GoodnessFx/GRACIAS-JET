import { useFadeIn } from './useFadeIn';
import { SectionLabel } from './About';
import { F } from './tokens';
import { useTheme } from './useTheme';

const steps = [
  {
    n: '01',
    title: 'Consultation',
    body: 'We start by listening. A private call or meeting to understand your goals, travel patterns, budget, and timeline — without pressure and without assumptions.',
  },
  {
    n: '02',
    title: 'Discovery and Sourcing',
    body: 'We search the global market for aircraft that precisely match your requirements, presenting only vetted, pre-qualified options backed by our technical assessment.',
  },
  {
    n: '03',
    title: 'Negotiation and Acquisition',
    body: 'We manage every aspect of the transaction — from offer to pre-purchase inspection to negotiation to final agreement — protecting your interests at every stage.',
  },
  {
    n: '04',
    title: 'Delivery and Beyond',
    body: 'We coordinate delivery, documentation, and registration, and remain available as your private aviation advisors long after the keys change hands.',
  },
];

export function Process() {
  const ref = useFadeIn<HTMLDivElement>();
  const { colors } = useTheme();
  return (
    <section id="process" style={{ background: colors.surface, padding: '100px 0' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <SectionLabel>How It Works</SectionLabel>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)',
            color: colors.text,
            lineHeight: 1.15,
            marginBottom: '64px',
          }}
        >
          From First Conversation to Final Agreement.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }} className="process-grid">
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', alignItems: 'stretch' }}>
              <div style={{ flex: 1, padding: '0 24px 0 0', paddingRight: i < steps.length - 1 ? '32px' : '0' }}>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontFamily: F.display,
                      fontWeight: 600,
                      fontSize: '64px',
                      color: colors.gold,
                      opacity: 0.25,
                      lineHeight: 1,
                      display: 'block',
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    fontWeight: 600,
                    fontSize: '22px',
                    color: colors.text,
                    marginBottom: '12px',
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '14px', color: colors.muted, lineHeight: 1.75, margin: 0 }}>
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div style={{ width: '1px', background: colors.border, alignSelf: 'stretch', flexShrink: 0 }} className="process-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .process-connector { width: 100% !important; height: 1px !important; margin: 24px 0; }
          #process { padding: 56px 0 !important; }
          #process > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
