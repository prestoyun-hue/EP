import React, { useState } from 'react';
import { solutions, FEATURES } from '../data/solutions';
import { Check, X, Info } from 'lucide-react';

interface SolutionTabsProps {
  onInquiry?: (solutionName: string) => void;
}

const SolutionTabs: React.FC<SolutionTabsProps> = ({ onInquiry }) => {
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onInquiry) {
      onInquiry(activeSolution.name);
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Define the order of features to display
  const displayFeatures = [
    FEATURES.CONSOLE,
    FEATURES.ENDPOINT,
    FEATURES.SERVER,
    FEATURES.ENCRYPTION,
    FEATURES.SANDBOX,
    FEATURES.RANSOMWARE,
    FEATURES.MAIL,
    FEATURES.CLOUD_APP,
    FEATURES.VULNERABILITY,
    FEATURES.XDR,
    FEATURES.MDR
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            비즈니스에 최적화된 솔루션을 선택하세요
          </h2>
          <p className="text-slate-600 text-lg">
            기업 규모와 보안 요구사항에 맞는 다양한 ESET PROTECT 라인업
          </p>
        </div>

        {/* Desktop Tabs - Changed to grid for single line layout */}
        <div className="hidden lg:grid grid-cols-5 gap-2 mb-12 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-7xl mx-auto">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`w-full py-3 rounded-xl font-medium transition-all duration-200 text-sm xl:text-base truncate px-2 ${
                activeTab === solution.id
                  ? 'bg-eset-teal text-white shadow-md transform scale-105 relative z-10'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {solution.name}
            </button>
          ))}
        </div>

        {/* Mobile Tabs (Select) */}
        <div className="lg:hidden mb-8 px-4">
            <label htmlFor="solution-select" className="block text-sm font-medium text-slate-700 mb-2">솔루션 선택</label>
            <select
                id="solution-select"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="block w-full rounded-lg border-slate-300 py-3 px-4 text-slate-900 shadow-sm focus:border-eset-teal focus:ring-eset-teal border"
            >
                {solutions.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                ))}
            </select>
        </div>

        {/* Content Display */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 transition-all duration-300 relative overflow-hidden`}>
            {/* Decorative colored bar */}
            <div className={`absolute top-0 left-0 w-full h-2 ${activeSolution.color.replace('bg-', 'bg-').split(' ')[0].replace('50', '500')}`}></div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{activeSolution.name}</h3>
                  <p className="text-eset-teal font-medium text-lg">{activeSolution.tagline}</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {activeSolution.description}
                </p>
                
                <div className={`p-6 rounded-2xl ${activeSolution.color} flex gap-4 items-start`}>
                  <Info className="flex-shrink-0 w-6 h-6 text-slate-700 opacity-75" />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">추천 대상</h4>
                    <p className="text-sm text-slate-700">{activeSolution.recommendedFor}</p>
                  </div>
                </div>

                <div className="pt-4 hidden lg:block">
                     <button onClick={handleContactClick} className="w-full text-center py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
                        이 솔루션으로 문의하기
                    </button>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-eset-teal rounded-full"></span>
                  기능 상세 비교
                </h4>
                
                <div className="grid grid-cols-1 gap-3">
                  {displayFeatures.map((feature, idx) => {
                    const isIncluded = activeSolution.features.includes(feature);
                    return (
                      <div 
                        key={idx} 
                        className={`flex items-center justify-between p-4 rounded-xl transition-all border ${
                          isIncluded 
                            ? 'bg-slate-50 border-slate-100' 
                            : 'bg-white border-slate-100 opacity-60'
                        }`}
                      >
                        <span className={`font-medium ${isIncluded ? 'text-slate-800' : 'text-slate-400 line-through decoration-slate-300'}`}>
                          {feature}
                        </span>
                        
                        <div className="flex-shrink-0">
                          {isIncluded ? (
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                              <Check size={18} strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                              <X size={18} strokeWidth={3} />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100 lg:hidden">
                    <button onClick={handleContactClick} className="w-full text-center py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                        이 솔루션으로 문의하기
                    </button>
                </div>

                <p className="text-xs text-slate-400 mt-6 text-right">
                    * 더 자세한 기술 사양은 <a href="https://eset.estc.co.kr/" target="_blank" rel="noopener noreferrer" className="text-eset-teal hover:underline">ESTC 공식 홈페이지</a>를 참조하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionTabs;