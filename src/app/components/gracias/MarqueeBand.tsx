import { F } from './tokens';
import { useTheme } from './useTheme';

const TEXT = 'GULFSTREAM G700  ·  BOMBARDIER GLOBAL 7500  ·  DASSAULT FALCON 10X  ·  CESSNA CITATION  ·  EMBRAER PRAETOR 600  ·  PILATUS PC-24  ·  HAWKER 4000  ·  AIRBUS ACJ TWOTWENTY  · ';

export function MarqueeBand() {
  const { colors } = useTheme();
  return (
    <div
      style={{
        background: colors.surface,
        height: '52px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 38s linear infinite',
        }}
      >
        <span style={{...textStyle, color: colors.gold}}>{TEXT}</span>
        <span style={{...textStyle, color: colors.gold}}>{TEXT}</span>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const textStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: '12px',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  paddingRight: '0',
  display: 'inline-block',
};
