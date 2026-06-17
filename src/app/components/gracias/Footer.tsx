import { useState } from 'react';
import { F } from './tokens';
import { useTheme } from './useTheme';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const navLinks = ['About', 'Services', 'Aircraft', 'Process', 'Testimonials', 'Contact'];

export function Footer() {
  const { colors } = useTheme();
  return (
    <footer style={{ background: colors.bg, borderTop: `1px solid ${colors.border}`, padding: '64px 0 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', paddingBottom: '48px' }} className="footer-grid">
          {/* Col 1 */}
          <div>
            <div style={{ lineHeight: 1, marginBottom: '20px' }}>
              <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: '18px', letterSpacing: '0.2em', color: colors.text }}>
                GRACIAS
              </div>
              <div style={{ fontFamily: F.body, fontWeight: 400, fontSize: '10px', letterSpacing: '0.4em', color: colors.gold, marginTop: '2px' }}>
                JET SALES
              </div>
            </div>
            <p style={{ fontFamily: F.body, fontWeight: 400, fontSize: '13px', color: colors.muted, lineHeight: 1.7 }}>
              Global private jet sales and acquisition. Precision. Discretion. Excellence.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <p style={{ fontFamily: F.body, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.gold, marginBottom: '20px' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((l) => (
                <FooterLink key={l} onClick={() => scrollTo(l.toLowerCase())}>{l}</FooterLink>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p style={{ fontFamily: F.body, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.gold, marginBottom: '20px' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+2347081910000" style={{ ...footerContactStyle, color: colors.muted }}>+234 7081910000</a>
              <a href="mailto:hello@graciasjetsales.com" style={{ ...footerContactStyle, color: colors.muted }}>hello@graciasjetsales.com</a>
              <a href="https://www.instagram.com/graciasjetsales" target="_blank" rel="noopener noreferrer" style={{ ...footerContactStyle, color: colors.muted }}>@graciasjetsales</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${colors.border}`, padding: '24px 0 40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }} className="footer-bottom">
          <span style={{ fontFamily: F.body, fontWeight: 400, fontSize: '12px', color: colors.muted }}>
            © 2025 Gracias Jet Sales. All rights reserved.
          </span>
          <span style={{ fontFamily: F.body, fontWeight: 400, fontSize: '12px', color: colors.muted }}>
            Confidentiality guaranteed on all enquiries.
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          footer > div { padding: 0 16px !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  const { colors } = useTheme();
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: F.body,
        fontWeight: 400,
        fontSize: '14px',
        color: hov ? colors.text : colors.muted,
        transition: 'color 0.2s ease',
        textAlign: 'left',
        padding: 0,
      }}
    >
      {children}
    </button>
  );
}

const footerContactStyle: React.CSSProperties = {
  fontFamily: F.body,
  fontWeight: 400,
  fontSize: '14px',
  textDecoration: 'none',
};
