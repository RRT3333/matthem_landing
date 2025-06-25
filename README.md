# 맡흠 (Matt-Hmm) 🏥💙
> 간병인을 위한 의료 마이데이터 통합 관리 서비스  
> "헬스케어계의 토스"를 지향하는 따뜻하고 직관적인 의료 데이터 플랫폼

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)

## 🎯 프로젝트 개요

맡흠은 병원, 약국, 보험사에 분산되어 있는 의료 데이터를 통합하여 **질병의 조기 발견**과 **개인 맞춤 의료 서비스**를 제공하는 플랫폼입니다.

### 🔍 해결하고자 하는 문제

> "어디가 아픈지도 모르겠는데, 병원을 다섯 군데나 돌았어요"

- **진단 지연**: 통풍(5-10년), 우울증(2-3년), 치매(2-4년) 등 만성질환의 늦은 발견
- **의료 데이터 분산**: 병원별로 흩어진 진료 기록으로 인한 정보 공백
- **간병 부담**: 가족 간병인의 정신적 피로와 반복 설명 스트레스

### 💡 우리의 솔루션

**목표**: 고령자 4대 중증 만성질환의 평균 진단기간 **5년 → 1년**으로 단축

| 기능 | 해결하는 문제 | 사용자 가치 |
|------|---------------|-------------|
| **진료기록 기반 위험 신호 감지** | 만성질환 진단 지연 | "미리 알림을 받아 조기에 병원을 찾을 수 있어요" |
| **질환별 맞춤 병원 추천** | 반복되는 병원 방문 실패 | "내가 왜 아픈지, 어떤 병원으로 가야 할지 알려줘요" |
| **가족 공유 건강 리포트** | 간병인의 정신적 부담 | "간병도 기록 기반으로 분담할 수 있어요" |

## 🏗️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui + Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Pretendard, Noto Sans KR

### Development Tools
- **Package Manager**: pnpm
- **Code Quality**: ESLint, TypeScript
- **Version Control**: Git

### External APIs (예정)
- **HIRA API**: 건강보험심사평가원 의료 데이터
- **Disease Detection AI**: 질병 위험 신호 분석
- **Hospital Recommendation**: 맞춤 병원 추천 시스템

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- pnpm 8.0.0 이상

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-org/matthem_landing.git
cd matthem_landing

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

애플리케이션이 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 빌드

```bash
# 프로덕션 빌드
pnpm build

# 빌드된 앱 실행
pnpm start
```

## 📱 주요 기능

### 🏠 메인 랜딩 페이지
- 감정적 공감 중심의 히어로 섹션
- 간병인 실제 고민을 반영한 문제 공감 영역
- 6개 핵심 기능 소개 (따뜻한 카드 레이아웃)
- 베타 테스트 신청 (100명 한정)

### 📊 개인화 대시보드
- **맞춤 인사**: 시간대별 인사 + 위로 메시지
- **건강 상태 요약**: 복약 준수율, 예정 진료, 건강 점수
- **오늘 할 일**: 복약/진료/검진 체크리스트
- **빠른 액션**: 가족공유, 상담신청, 응급연락, 건강리포트

### 🔄 데이터 분석 플로우
1. **데이터 연동** (HIRA API)
2. **AI 분석** (위험 신호 탐지)
3. **증상 시그널 발생**
4. **체크리스트 제시**
5. **병원 추천 및 방문 유도**

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: 따뜻한 코랄/피치 톤 (#FF8A80, #FFAB91)
- **Secondary**: 차분한 그레이 스케일
- **Accent**: 신뢰감 있는 블루 (#3B82F6)

### 디자인 원칙
- **감정적 공감**: 따뜻하고 위로가 되는 톤앤매너
- **직관적 네비게이션**: 복잡한 의료정보를 쉽게
- **개인화**: "보호자님" 대신 실제 이름으로 호칭
- **접근성**: 고령자도 쉽게 사용할 수 있는 UI/UX

## 📂 프로젝트 구조

```
matthem_landing/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 메인 랜딩 페이지
│   ├── dashboard/         # 대시보드 페이지
│   └── beta-signup/       # 베타 신청 페이지
├── components/            # 재사용 컴포넌트
│   ├── ui/               # shadcn/ui 기본 컴포넌트
│   └── navigation/       # 네비게이션 컴포넌트
├── lib/                  # 유틸리티 함수
├── hooks/                # 커스텀 React 훅
└── styles/               # 글로벌 스타일
```

## 📈 4주 실행 계획

### 🎯 Aha Moment 정의
앱 설치 후 **7일 이내** 건강정보 연동 후 첫 번째 병원 리포트 확인

### 주차별 목표

| 주차 | 목표 | 핵심 지표 |
|------|------|-----------|
| **1주차** | 랜딩페이지 배포 및 관심 유도 | CTR ≥ 2.5%, 가입률 ≥ 30% |
| **2주차** | 베타버전 UX 테스트 | NPS ≥ 7 |
| **3주차** | 위험 신호 알림 전환율 측정 | 7일 재방문율 ≥ 20% |
| **4주차** | 가족 공유 리포트 기능 | 리퍼럴 ≥ 1.5, 신규 가입률 ≥ 20% |

## 🤝 팀 소개

- **CEO/PM**: 랜딩페이지 배포 및 초기 관심 유도, 전환율 개선
- **UX Writer**: 사용자 공감 기반 랜딩페이지 설계 및 광고 집행
- **Growth Hacker**: 가족 리포트 공유 및 리퍼럴 확산 실험
- **UX Developer**: 위험알림 → 체크리스트 → 병원추천 전환 흐름 구축

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

- **서비스 문의**: contact@matthmm.com
- **베타 테스트 신청**: [베타 신청하기](http://localhost:3000/beta-signup)

---

> **"4주 후, 나만의 주치의가 생기는 경험을 만드는 건강 케어의 새로운 기준이 되겠습니다."**