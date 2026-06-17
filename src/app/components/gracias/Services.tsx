import { useState } from 'react';
import {
  PlaneTakeoff,
  Handshake,
  ClipboardList,
  Settings,
} from 'lucide-react';
import { useFadeIn } from './useFadeIn';
import { SectionLabel } from './About';
import { F } from './tokens';
import { useTheme } from './useTheme';

const cards = [
  {
    Icon: PlaneTakeoff,
    title: 'Aircraft Acquisition',
    body: 'We source, evaluate, and secure the right aircraft for your mission profile, travel patterns, and ownership ambitions. From light jets to ultra-long-range cabins, we navigate the global market on your behalf.',
  },
  {
    Icon: Handshake,
    title: 'Aircraft Sales and Brokerage',
    body: 'Selling a private jet demands the right buyer, the right price, and the right timing. We combine modern marketing, a curated buyer network, and proven negotiation to close transactions quickly and confidentially.',
  },
  {
    Icon: ClipboardList,
    title: 'Acquisition Consulting',
    body: 'Not sure which aircraft fits your life? We provide independent advisory — analysing aircraft categories, cost of ownership, range requirements, and resale value — so your decision is informed by data, not guesswork.',
  },
  {
    Icon: Settings,
    title: 'Post-Sale Services',
    body: 'The transaction is only the beginning. We coordinate delivery logistics, documentation, registration, and introduce you to our network of maintenance, management, and charter partners globally.',
  },
];

export function Services() {
  const ref = useFadeIn<HTMLDivElement>();
  const { colors } = useTheme();
  return (
    <section id="services" style={{ background: colors.surface, padding: '100px 0' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <SectionLabel>What We Do</SectionLabel>
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
          Every Dimension of Private Jet Ownership.
        </h2>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
          className="services-grid"
        >
          {cards.map((c) => (
            <ServiceCard key={c.title} {...c} />
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div
          style={{
            marginTop: '32px',
            background: colors.border,
            padding: '32px 48px',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
            <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '15px', color: colors.muted, margin: 0 }}>
              Private jet marketplace, listing search, and live valuations.
            </p>
            <div style={{ width: '1px', height: '24px', background: colors.gold, flexShrink: 0 }} />
          </div>
          <ComingSoon />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          #services { padding: 64px 0 !important; }
          #services > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ Icon, title, body }: { Icon: React.ElementType; title: string; body: string }) {
  const [hov, setHov] = useState(false);
  const { colors } = useTheme();
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: colors.raised,
        padding: '36px',
        borderRadius: '2px',
        border: `1px solid ${hov ? colors.gold : colors.border}`,
        transition: 'border-color 0.2s ease',
      }}
    >
      <Icon size={24} strokeWidth={1.5} color={colors.gold} style={{ marginBottom: '20px' }} />
      <h3
        style={{
          fontFamily: F.display,
          fontWeight: 600,
          fontSize: '24px',
          color: colors.text,
          marginBottom: '12px',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '15px', color: colors.muted, lineHeight: 1.7, margin: 0 }}>
        {body}
      </p>
    </div>
  );
}

export function ComingSoon() {
  const { colors } = useTheme();
  return (
    <span
      style={{
        fontFamily: F.body,
        fontWeight: 600,
        fontSize: '11px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: colors.gold,
        border: `1px solid ${colors.gold}`,
        padding: '6px 16px',
        borderRadius: '2px',
        whiteSpace: 'nowrap',
      }}
    >
      Coming Soon
    </span>
  );
}
