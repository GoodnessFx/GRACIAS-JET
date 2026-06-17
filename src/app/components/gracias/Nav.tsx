import { useEffect, useState } from 'react';
import { X, Menu, Sun, Moon } from 'lucide-react';
import { F } from './tokens';
import { useTheme } from './useTheme';

const links = ['About', 'Services', 'Aircraft', 'Testimonials', 'Contact'];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { colors, toggleTheme, theme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '68px',
          background: colors.bg,
          borderBottom: scrolled ? `1px solid ${colors.border}` : '1px solid transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          zIndex: 100,
          transition: 'border-color 0.3s ease',
        }}
      >
        <Wordmark />
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{ display: 'flex', gap: '28px', alignItems: 'center' }}
            className="nav-links"
          >
            {links.map((l) => (
              <NavLink key={l} label={l} onClick={() => scrollTo(l.toLowerCase())} />
            ))}
          </div>
          <ThemeToggleBtn onClick={toggleTheme} theme={theme} />
          <div className="enquire-btn-container">
            <EnquireBtn onClick={() => scrollTo('contact')} />
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className="hamburger-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: colors.text,
              padding: '4px',
            }}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          pointerEvents: drawerOpen ? 'all' : 'none',
        }}
      >
        <div
          onClick={() => setDrawerOpen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: theme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
            opacity: drawerOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '280px',
            background: colors.surface,
            transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s ease',
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 40px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', alignItems: 'center' }}>
            <ThemeToggleBtn onClick={toggleTheme} theme={theme} />
            <button
              onClick={() => setDrawerOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: colors.muted,
                padding: '4px',
              }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1, marginTop: '24px' }}>
            {links.map((l) => (
              <button
                key={l}
                onClick={() => { scrollTo(l.toLowerCase()); setDrawerOpen(false); }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: F.display,
                  fontWeight: 400,
                  fontSize: '20px',
                  color: colors.text,
                  textAlign: 'left',
                  padding: 0,
                }}
              >
                {l}
              </button>
            ))}
          </div>
          <EnquireBtn onClick={() => { scrollTo('contact'); setDrawerOpen(false); }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger-btn { display: block !important; }
          .enquire-btn-container { display: none !important; }
          nav { padding: 0 16px !important; height: 56px !important; }
        }
      `}</style>
    </>
  );
}

function Wordmark() {
  const { colors } = useTheme();
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: '18px', letterSpacing: '0.2em', color: colors.text }}>
        GRACIAS
      </div>
      <div style={{ fontFamily: F.body, fontWeight: 400, fontSize: '10px', letterSpacing: '0.4em', color: colors.gold, marginTop: '2px' }}>
        JET SALES
      </div>
    </div>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const { colors } = useTheme();
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: F.body,
        fontWeight: 500,
        fontSize: '13px',
        letterSpacing: '0.08em',
        color: hovered ? colors.text : colors.muted,
        transition: 'color 0.2s ease',
        padding: 0,
      }}
    >
      {label}
    </button>
  );
}

function ThemeToggleBtn({ onClick, theme }: { onClick: () => void; theme: 'light' | 'dark' }) {
  const [hovered, setHovered] = useState(false);
  const { colors } = useTheme();
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? colors.surface : 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s ease',
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={18} color={colors.text} /> : <Sun size={18} color={colors.text} />}
    </button>
  );
}

function EnquireBtn({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const { colors } = useTheme();
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: F.body,
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '10px 24px',
        border: `1px solid ${colors.gold}`,
        borderRadius: '2px',
        background: hovered ? colors.gold : 'transparent',
        color: hovered ? colors.bg : colors.gold,
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      Enquire Now
    </button>
  );
}
