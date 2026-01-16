import React from 'react';
import { PlayCircle, Play, ExternalLink } from 'lucide-react';

const VideoSection: React.FC = () => {
  // Original requested video ID (ESET PROTECT Platform - Overview)
  // Since embedding is restricted for this video (Error 150/153), we provide a direct link with a high-quality cover.
  const videoId = "oSDNjh_uYfM"; 
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
            <PlayCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">우리 회사를 위한 ESET 사이버 보안 요새</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ESET이 어떻게 기업의 보안 환경을 변화시키는지 영상을 통해 확인해보세요.
            예측 불가능한 사이버 위협으로부터 비즈니스를 보호하는 최적의 솔루션입니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Fallback to Link Card due to Embed Restrictions */}
          <div className="relative group w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-slate-900/5">
            
            {/* Background Image representing the video content */}
            <img 
              src="https://images.unsplash.com/photo-1563206767-5b1d972b9fb1?auto=format&fit=crop&q=80&w=1600" 
              alt="ESET Security Video Thumbnail" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500 scale-100 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

            {/* Centered Play Action */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <a 
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/play flex flex-col items-center gap-6 cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-eset-teal/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="w-24 h-24 rounded-full bg-eset-teal flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(0,155,164,0.4)] group-hover/play:scale-110 transition-transform duration-300 relative z-10 border-4 border-slate-900/10">
                    <Play size={40} fill="currentColor" className="text-white" />
                  </div>
                </div>
                
                <div className="text-center space-y-2 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight drop-shadow-md">ESET PROTECT Platform</h3>
                  <div className="flex items-center justify-center gap-2 text-slate-200 text-sm font-medium bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm mx-auto w-fit hover:bg-black/50 transition-colors">
                    <span>YouTube에서 영상 재생하기</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </div>
            
            {/* Bottom Bar Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xs text-slate-400 bg-black/60 px-3 py-1 rounded backdrop-blur-md">
                   * YouTube 정책에 따라 외부 플레이어 재생이 제한되어 새 탭에서 열립니다.
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;