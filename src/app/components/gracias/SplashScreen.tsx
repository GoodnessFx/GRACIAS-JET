import { useEffect, useState } from 'react';
import { F } from './tokens';
import { useTheme } from './useTheme';

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => onDone(), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: colors.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.7s ease',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: '32px',
            letterSpacing: '0.22em',
            color: colors.text,
            lineHeight: 1,
          }}
        >
          GRACIAS
        </div>
        <div
          style={{
            fontFamily: F.body,
            fontWeight: 400,
            fontSize: '11px',
            letterSpacing: '0.45em',
            color: colors.gold,
            marginTop: '6px',
          }}
        >
          JET SALES
        </div>
      </div>
      <div
        style={{
          marginTop: '48px',
          width: '40px',
          height: '1px',
          background: colors.gold,
          opacity: 0.5,
          animation: 'splashLine 1.4s ease infinite',
        }}
      />
      <style>{`
        @keyframes splashLine {
          0% { width: 20px; opacity: 0.2; }
          50% { width: 60px; opacity: 0.7; }
          100% { width: 20px; opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
