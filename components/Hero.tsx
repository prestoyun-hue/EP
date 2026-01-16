import React from 'react';
import { ShieldCheck, ArrowRight, Lock, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSolutions = () => {
    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          alt="Cyber Security Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Modern Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
        
        {/* Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-eset-teal font-semibold text-sm mb-8 animate-fade-in-up hover:bg-white/15 transition-colors cursor-default">
          <ShieldCheck size={16} className="animate-pulse" />
          <span>Global Top-Tier Endpoint Security</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          기업을 위한 최고의 디지털 보안<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-eset-teal via-teal-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(0,155,164,0.5)]">
            ESET PROTECT PLATFORM 솔루션 
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          ESET의 멀티레이어 보호 기술은 랜섬웨어, 제로데이, 피싱 등 <br className="hidden md:block"/>
          고도화된 사이버 위협으로부터 기업의 자산을 빈틈없이 보호합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToSolutions}
            className="group px-8 py-4 bg-eset-teal text-white rounded-full font-bold text-lg hover:bg-teal-500 transition-all shadow-[0_0_20px_rgba(0,155,164,0.3)] hover:shadow-[0_0_30px_rgba(0,155,164,0.5)] flex items-center gap-2"
          >
            솔루션 알아보기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToContact}
            className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Lock size={18} className="text-slate-400 group-hover:text-white transition-colors"/>
            솔루션 상담 신청
            <ChevronRight size={18} className="text-slate-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"/>
          </button>
        </div>

        {/* Trust Indicators / Stats */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-y-6 gap-x-12 text-slate-400 text-xs font-medium tracking-wider">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-2xl md:text-3xl">24/7</span>
            <span className="text-left max-w-[160px] leading-snug">PROTECTION WITHOUT COMPROMISE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-2xl md:text-3xl">850+</span>
            <span className="text-left max-w-[200px] leading-snug">GLOBAL CYBERSECURITY RESEARCHERS AND EXPERTS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-2xl md:text-3xl">6min</span>
            <span className="text-left max-w-[180px] leading-snug">THE FASTEST DETECTION AND RESPONSE SERVICE</span>
          </div>
        </div>
      </div>

      {/* Decorative Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eset-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;