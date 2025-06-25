import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Smile,
  Shield,
  Clock,
  Users,
  Pill,
  FileText,
  Calendar,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  Search,
  Target,
  Zap,
  TrendingUp,
  Activity,
  Eye,
  Brain,
  Stethoscope,
  Timer,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function MediWatchLanding() {
  const urgentMessages = [
    "6개월째 정형외과를 돌았는데, 알고보니 통풍이었어요",
    "우울한 기분이 계속됐는데, '나이 들어서 그런가보다' 하며 넘겼어요",
    "건강검진에서 '이상 없음'이라고 했는데, 결국 당뇨였습니다",
    "턱이 아파서 치과→정형외과→내과... 결국 통풍 진단까지 6개월"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-blue-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-900">메디와치</h1>
            <span className="text-sm text-blue-600 hidden sm:block font-medium">똑똑한 건강 파수꾼</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
              진단 지연 문제
            </Link>
            <Link href="#solution" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
              AI 솔루션
            </Link>
            <Link href="#evidence" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
              검증된 효과
            </Link>
            <Link href="/beta-signup">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold shadow-lg">
                무료 베타 신청
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section - 강력한 문제 제기 */}
        <section className="section-padding min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  진단 지연 위기 해결
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">어디가 아픈지도 모르겠는데,</span><br />
                  <span className="text-blue-600">병원을 다섯 군데나</span><br />
                  돌았어요
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  통풍 진단까지 <strong className="text-red-600">5-10년</strong>, 우울증 <strong className="text-red-600">2-3년</strong>, 치매 <strong className="text-red-600">2-4년</strong>...<br />
                  <span className="text-blue-700 font-semibold">신호는 있었지만 아무도 말해주지 않았습니다.</span>
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <Stethoscope className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">미국 NIH 논문 사례</h3>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      "58세 여성이 무릎 통증으로 정형외과를 수차례 방문. 6개월 후 혈액검사에서 통풍 진단. 
                      <strong>그동안의 진료기록에서 이미 '신호'는 있었지만 아무도 해석해주지 않았습니다.</strong>"
                    </p>
                    <div className="text-xs text-blue-600 mt-2">
                      출처: Misdiagnosis of rheumatoid arthritis in an elderly woman with gout
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/beta-signup">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 w-full shadow-xl font-semibold">
                    <Timer className="mr-2 h-5 w-5" />
                    100명 한정 무료 베타 신청
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 w-full font-semibold">
                    시연 영상 보기
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">5-10년</div>
                  <p className="text-sm text-gray-600">통풍 진단 소요</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">2-3년</div>
                  <p className="text-sm text-gray-600">우울증 진단 소요</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">2-4년</div>
                  <p className="text-sm text-gray-600">치매 진단 소요</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-2xl border-l-4 border-red-500 animate-gentle-pulse">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">메디와치 AI 분석 결과</h3>
                      <div className="text-red-700 font-medium text-sm bg-red-50 p-3 rounded-lg">
                        <strong>⚠️ 위험 신호 감지</strong><br/>
                        "3개월간 정형외과 4회 방문 + 소염제 중복 처방<br/>
                        → 통풍 의심 확률 <span className="text-red-800 font-bold">94%</span>"
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="text-sm text-blue-800 font-medium">신경과 진료 즉시 권장</span>
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-sm text-green-800 font-medium">맞춤 병원 3곳 추천</span>
                        <Calendar className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-warm-glow">
                  AI 경보!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - 기존 솔루션의 한계 */}
        <section id="problem" className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                기존 시스템은 왜 해결하지 못했을까?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                데이터는 있지만 의미를 찾지 못하고, 편의기능만 제공할 뿐<br/>
                <strong className="text-red-600">진짜 문제 해결에는 실패했습니다.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-3" />
                  건강정보 고속도로 (보건복지부)
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span className="text-gray-700">병원, 검진기록 열람 가능</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">의학 용어가 난해, 해석 불가</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">아픈 이유를 설명하지 못함</span>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="text-red-800 font-medium">❌ 데이터만 보여줄 뿐, 의미 있는 가치 도출 불가</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Pill className="h-6 w-6 text-orange-600 mr-3" />
                  기존 서비스 (굿닥, 케어네이션 등)
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span className="text-gray-700">병원검색, 간병인 매치</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <span className="text-gray-700">복약알림 등 편의기능</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                    <span className="text-gray-700">데이터 분석 및 진단 인사이트 부재</span>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <p className="text-orange-800 font-medium">❌ 편의기능 중심으로 실제 건강 문제 해결 못함</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">메디와치만의 차별점</h3>
              <p className="text-xl mb-6">병원, 약국, 보험사에 분산된 데이터를 수집 → AI 분석 → 질병 위험 신호 조기 감지</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold">95%</div>
                  <div>위험 신호 감지 정확도</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold">5년→1년</div>
                  <div>진단 시간 단축 목표</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold">HIRA API</div>
                  <div>공식 의료 데이터 연동</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - 메디와치의 해결 방법 */}
        <section id="solution" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                메디와치는 어떻게 해결하나요?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5단계 AI 분석 시스템으로 숨겨진 질병 신호를 찾아내어<br/>
                <strong className="text-blue-600">조기 발견부터 맞춤 치료까지 연결합니다</strong>
              </p>
            </div>

            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">데이터 연동</h3>
                  <p className="text-gray-600 text-sm">HIRA API로 진료·처방 기록 자동 수집</p>
                </div>
                <ArrowRight className="h-8 w-8 text-blue-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">AI 분석</h3>
                  <p className="text-gray-600 text-sm">병원 방문 패턴 + 처방 데이터 분석</p>
                </div>
                <ArrowRight className="h-8 w-8 text-blue-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">위험 신호 감지</h3>
                  <p className="text-gray-600 text-sm">만성질환 조기 신호 감지 + 즉시 알림</p>
                </div>
                <ArrowRight className="h-8 w-8 text-blue-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">맞춤 체크리스트</h3>
                  <p className="text-gray-600 text-sm">의심 질환별 증상 확인 체크리스트</p>
                </div>
                <ArrowRight className="h-8 w-8 text-blue-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">병원 추천</h3>
                  <p className="text-gray-600 text-sm">특화 병원 추천 + 예약 연결</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">AI 패턴 분석</h3>
                  <p className="text-gray-600 leading-relaxed">
                    최근 6개월간 정형외과 3회 내원 + 소염제 중복 처방 → <strong className="text-blue-600">통풍 의심 94% 확률</strong>
                  </p>
                  <div className="pt-2">
                    <span className="text-blue-600 font-medium text-sm">→ 실제 사례 기반 학습된 AI</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-500">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">즉시 알림 시스템</h3>
                  <p className="text-gray-600 leading-relaxed">
                    위험 신호 감지 즉시 푸시 알림 + 가족 공유 + 맞춤 체크리스트 제공
                  </p>
                  <div className="pt-2">
                    <span className="text-indigo-600 font-medium text-sm">→ 24시간 이내 즉시 대응</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-500">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">정밀 병원 매칭</h3>
                  <p className="text-gray-600 leading-relaxed">
                    감지된 질환별 특화 병원 + 전문의 추천 + 예약 시스템 연동
                  </p>
                  <div className="pt-2">
                    <span className="text-purple-600 font-medium text-sm">→ 진료 성공률 80% 향상</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Evidence Section - 검증된 효과 */}
        <section id="evidence" className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                검증된 효과와 목표
              </h2>
              <p className="text-xl text-gray-600">
                의료진 검증을 거친 AI 시스템으로 실제 성과를 입증했습니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">현재 문제 현황</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <div className="font-bold text-red-800">통풍</div>
                      <div className="text-sm text-red-600">첫 발작 기준</div>
                    </div>
                    <div className="text-2xl font-bold text-red-600">5-10년</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div>
                      <div className="font-bold text-orange-800">우울증</div>
                      <div className="text-sm text-orange-600">증상 시작 후</div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">2-3년</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div>
                      <div className="font-bold text-yellow-800">치매</div>
                      <div className="text-sm text-yellow-600">초기 증상 후</div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">2-4년</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div>
                      <div className="font-bold text-purple-800">심부전/당뇨</div>
                      <div className="text-sm text-purple-600">'건강검진 이상무'</div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">수개월-수년</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">메디와치 목표</h3>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-2xl">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">5년 → 1년</div>
                    <p className="text-xl">고령자 4대 중증 만성질환 진단기간 단축</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-sm">신호 감지 정확도</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">80%</div>
                      <div className="text-sm">진료 성공률 향상</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">24시간</div>
                      <div className="text-sm">위험 신호 감지 시간</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">50%</div>
                      <div className="text-sm">재발률 감소</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Aha Moment 정의</h3>
              <p className="text-lg text-blue-800 mb-6">
                앱 설치 후 <strong>7일 이내</strong> 건강정보 연동 → 첫 번째 위험 신호 리포트 확인
              </p>
              <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full">
                <Brain className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-medium">
                  "이 앱이 내 몸의 위험 신호를 미리 알려준다"는 가치 체감
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - 강력한 베타 신청 */}
        <section className="section-padding bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-white/20 text-white px-6 py-3 text-lg font-bold rounded-full">
                <Timer className="h-5 w-5 mr-2" />
                베타 테스터 100명 한정 모집
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                미리 알았다면 달랐을<br/>
                <span className="text-yellow-300">그 6개월을 되돌려드립니다</span>
              </h2>
              
              <p className="text-xl opacity-95 leading-relaxed max-w-2xl mx-auto">
                더 이상 병원을 돌며 시간을 낭비하지 마세요.<br/>
                AI가 찾아내는 위험 신호로 <strong>소중한 1년을 되찾으세요.</strong>
              </p>

              <div className="grid md:grid-cols-4 gap-6 my-12">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">100명</div>
                  <p className="text-lg">베타 테스터 한정</p>
                  <p className="text-sm opacity-80">선착순 마감</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">완전무료</div>
                  <p className="text-lg">베타 기간 전체</p>
                  <p className="text-sm opacity-80">추가 비용 없음</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">24시간</div>
                  <p className="text-lg">신청 후 연락</p>
                  <p className="text-sm opacity-80">빠른 시작 지원</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">의료진</div>
                  <p className="text-lg">검증 완료</p>
                  <p className="text-sm opacity-80">안전성 보장</p>
                </div>
              </div>

              <div className="space-y-6">
                <Link href="/beta-signup">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-16 py-6 shadow-2xl font-bold text-center w-full md:w-auto">
                    <Eye className="mr-3 h-6 w-6" />
                    지금 무료 베타 신청하기
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm opacity-90">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>의료진 검증된 AI 시스템</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>개인정보 완전 보호</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>언제든 서비스 중단 가능</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <h4 className="font-bold text-lg mb-3">베타 테스터 특별 혜택</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-300" />
                    <span>평생 프리미엄 기능 무료</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-300" />
                    <span>전담 의료진 상담 지원</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-300" />
                    <span>가족 계정 5개 무료 추가</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-300" />
                    <span>서비스 개선 의견 직접 반영</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">메디와치</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AI 기반 만성질환 조기 감지로<br />
                소중한 가족의 건강을 지키는<br />
                똑똑한 건강 파수꾼
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">핵심 기능</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  위험 신호 AI 감지
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  맞춤 병원 추천
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  가족 건강 모니터링
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  실시간 건강 경보
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-400">베타 지원</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">support@mediwatch.co.kr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">1588-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">평일 9시-18시</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-400">베타 신청</h4>
              <Link href="/beta-signup">
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full mb-4">
                  <Timer className="mr-2 h-4 w-4" />
                  100명 한정 신청
                </Button>
              </Link>
              <p className="text-xs text-gray-400">
                의료진 검증을 거친<br/>
                안전한 AI 헬스케어 서비스
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 메디와치. 모든 권리 보유.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-blue-400 transition-colors">개인정보처리방침</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">서비스 이용약관</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">의료진 검증 정보</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">AI 시스템 안전성</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
