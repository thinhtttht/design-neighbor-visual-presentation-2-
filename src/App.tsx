import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectInfoSection from './components/ProjectInfoSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BusinessSection from './components/BusinessSection';
import MarketSection from './components/MarketSection';
import ImpactSection from './components/ImpactSection';
import RoadmapSection from './components/RoadmapSection';
import TeamSection from './components/TeamSection';
import FooterSection from './components/FooterSection';
import { useScrollReveal } from './hooks/useScrollReveal';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(totalHeight > 0 ? (current / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 transition-all duration-150 ease-out shadow-sm shadow-orange-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-700 text-white shadow-lg shadow-orange-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white antialiased">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <ProjectInfoSection />
      <ProblemSection />
      <SolutionSection />
      <BusinessSection />
      <MarketSection />
      <ImpactSection />
      <RoadmapSection />
      <TeamSection />
      <FooterSection />
      <BackToTop />
    </div>
  );
}
