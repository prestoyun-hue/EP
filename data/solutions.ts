import { Solution } from '../types';

// Standardized feature strings for comparison
export const FEATURES = {
  CONSOLE: '보안 관리 콘솔 (Cloud/On-prem)',
  ENDPOINT: '엔드포인트 보호 (PC, Mobile)',
  SERVER: '파일 서버 보안',
  ENCRYPTION: '풀 디스크 암호화 (Encryption)',
  SANDBOX: '클라우드 샌드박스 (LiveGuard)',
  MAIL: '메일 보안 (Mail Security)',
  CLOUD_APP: '클라우드 앱 보안 (Cloud Office Security)',
  XDR: 'XDR (위협 탐지 및 대응)',
  RANSOMWARE: '랜섬웨어 복구 (Ransomware Remediation)',
  VULNERABILITY: '취약점 관리 및 패치 관리',
  MDR: 'MDR (보안 관제 서비스)'
};

export const solutions: Solution[] = [
  {
    id: 'entry',
    name: 'ESET PROTECT Entry',
    tagline: '강력한 엔드포인트 보안의 시작',
    description: '가장 기본적인 멀티레이어 보호 기능을 제공하여 위협으로부터 기업 자산을 보호합니다.',
    recommendedFor: '모든 규모의 기업에 적합하며, 차세대 안티바이러스, 장치 제어, 안티 피싱 등 필수적인 엔드포인트 보호가 필요한 경우 추천합니다.',
    features: [
      FEATURES.CONSOLE,
      FEATURES.ENDPOINT,
      FEATURES.SERVER
    ],
    color: 'bg-green-50 border-green-200'
  },
  {
    id: 'advanced',
    name: 'ESET PROTECT Advanced',
    tagline: '데이터 보호 및 지능형 위협 방어',
    description: '제로데이 위협에 대응하고 데이터를 안전하게 암호화하여 비즈니스 연속성을 보장합니다.',
    recommendedFor: '랜섬웨어 방어와 데이터 암호화를 우선순위에 두는 기업에 적합합니다. 랜섬웨어 복구(Remediation) 기능과 전체 디스크 암호화(FDE)가 포함되어 데이터 보안을 강화합니다.',
    features: [
      FEATURES.CONSOLE,
      FEATURES.ENDPOINT,
      FEATURES.SERVER,
      FEATURES.ENCRYPTION,
      FEATURES.SANDBOX,
      FEATURES.RANSOMWARE
    ],
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'complete',
    name: 'ESET PROTECT Complete',
    tagline: '클라우드 앱 및 메일 보안까지 완벽하게',
    description: 'Advanced 기능에 메일 서버 및 클라우드 애플리케이션(M365) 보호를 더해 빈틈없는 보안을 제공합니다.',
    recommendedFor: 'M365나 Google Workspace 등 클라우드 협업 도구를 활발히 사용하며, 취약점 및 패치 관리 자동화를 통해 공격 표면을 줄이고 싶은 기업에 권장됩니다.',
    features: [
      FEATURES.CONSOLE,
      FEATURES.ENDPOINT,
      FEATURES.SERVER,
      FEATURES.ENCRYPTION,
      FEATURES.SANDBOX,
      FEATURES.RANSOMWARE,
      FEATURES.MAIL,
      FEATURES.CLOUD_APP,
      FEATURES.VULNERABILITY
    ],
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    id: 'elite',
    name: 'ESET PROTECT Elite',
    tagline: '최상위 통합 보안 패키지',
    description: '엔터프라이즈 환경에 필요한 모든 보안 계층을 하나로 통합하여 복잡한 위협을 완벽하게 차단합니다.',
    recommendedFor: 'XDR(확장된 탐지 및 대응) 가시성과 다단계 인증(MFA)을 통해 침해 사고를 선제적으로 방지하고자 하는 엔터프라이즈급 조직에 적합합니다.',
    features: [
      FEATURES.CONSOLE,
      FEATURES.ENDPOINT,
      FEATURES.SERVER,
      FEATURES.ENCRYPTION,
      FEATURES.SANDBOX,
      FEATURES.RANSOMWARE,
      FEATURES.MAIL,
      FEATURES.CLOUD_APP,
      FEATURES.XDR,
      FEATURES.VULNERABILITY
    ],
    color: 'bg-rose-50 border-rose-200'
  },
  {
    id: 'mdr',
    name: 'ESET PROTECT MDR',
    tagline: '전문가가 관리하는 보안 서비스',
    description: 'ESET의 보안 전문가들이 24/365 모니터링 및 위협 분석을 대신 수행하여 보안 운영 부담을 줄여줍니다.',
    recommendedFor: '보안 전문가가 내부에 없지만 24/7 모니터링이 필요한 기업에 이상적입니다. 기업별 맞춤형 서비스와 함께 디지털 포렌식 및 사고 대응(DFIR) 지원을 통해 비즈니스 연속성을 보장합니다.',
    features: [
      FEATURES.CONSOLE,
      FEATURES.ENDPOINT,
      FEATURES.SERVER,
      FEATURES.ENCRYPTION,
      FEATURES.SANDBOX,
      FEATURES.RANSOMWARE,
      FEATURES.MAIL,
      FEATURES.CLOUD_APP,
      FEATURES.XDR,
      FEATURES.VULNERABILITY,
      FEATURES.MDR
    ],
    color: 'bg-orange-50 border-orange-200'
  }
];