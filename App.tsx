import React, { useState } from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import SolutionTabs from './components/SolutionTabs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [targetSolution, setTargetSolution] = useState<string>('');

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 select-none cursor-pointer" 
            onClick={(e) => scrollToTop(e as any)}
          >
            {/* ESTC Logo - Removed skew and italic for a straight look */}
            <span className="font-black text-3xl tracking-tighter text-eset-teal" style={{ fontFamily: 'Arial, sans-serif' }}>
              ESTC
            </span>
            <div className="h-4 w-px bg-slate-300"></div>
            <span className="text-slate-500 text-sm font-medium">ESET KOREA</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="/" onClick={scrollToTop} className="hover:text-eset-teal transition-colors">홈</a>
            <a href="#solutions" onClick={scrollToSection('solutions')} className="hover:text-eset-teal transition-colors">솔루션 비교</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-eset-teal transition-colors">문의하기</a>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow pt-16">
        <Hero />
        <VideoSection />
        <SolutionTabs onInquiry={setTargetSolution} />
        <ContactForm selectedSolution={targetSolution} />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;