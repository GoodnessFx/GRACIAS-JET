import { useState } from 'react';
import { SplashScreen } from './components/gracias/SplashScreen';
import { Nav } from './components/gracias/Nav';
import { Hero } from './components/gracias/Hero';
import { MarqueeBand } from './components/gracias/MarqueeBand';
import { About } from './components/gracias/About';
import { Services } from './components/gracias/Services';
import { AircraftShowcase } from './components/gracias/AircraftShowcase';
import { Process } from './components/gracias/Process';
import { Testimonials } from './components/gracias/Testimonials';
import { WhyGracias } from './components/gracias/WhyGracias';
import { Contact } from './components/gracias/Contact';
import { Footer } from './components/gracias/Footer';
import { ThemeProvider, useTheme } from './components/gracias/useTheme';

function AppContent() {
  const [ready, setReady] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);
  const { colors } = useTheme();

  function handleSplashDone() {
    setReady(true);
    setTimeout(() => setPageVisible(true), 50);
  }

  return (
    <div style={{ background: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {!ready && <SplashScreen onDone={handleSplashDone} />}
      <div
        style={{
          opacity: pageVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <Nav />
        <main>
          <Hero />
          <MarqueeBand />
          <About />
          <Services />
          <AircraftShowcase />
          <Process />
          <Testimonials />
          <WhyGracias />
          <Contact />
        </main>
        <Footer />
      </div>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        html, body { overflow-x: hidden; }
        body { background: ${colors.bg}; overflow-x: hidden; }
        select option { background: ${colors.surface}; color: ${colors.text}; }
        ::placeholder { color: ${colors.muted}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${colors.bg}; }
        ::-webkit-scrollbar-thumb { background: ${colors.border}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${colors.muted}; }
        a { color: inherit; }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
