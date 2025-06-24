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
} from "lucide-react"
import Link from "next/link"

export default function MatheumLanding() {
  const comfortMessages = [
    "세상의 짐을 홀로 들고 있었다면, 오늘부터는 우리와 나눠 들어요",
    "간병도 사랑이지만, 내 마음도 소중해요",
    "당신이 있어서 누군가가 안전합니다",
    "완벽하지 않아도 괜찮아요. 함께 천천히 해나가요"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-peach-50 to-warmGray-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-warmGray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-peach-400 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-warmGray-800">맡흠</h1>
            <span className="text-sm text-warmGray-500 hidden sm:block">간병인을 위한 마음 돌봄 서비스</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-warmGray-700 hover:text-coral-600 transition-colors">
              서비스 소개
            </Link>
            <Link href="#story" className="text-warmGray-700 hover:text-coral-600 transition-colors">
              우리 이야기
            </Link>
            <Link href="#contact" className="text-warmGray-700 hover:text-coral-600 transition-colors">
              문의하기
            </Link>
                         <Link href="/dashboard">
               <Button className="primary-button">
                 베타 신청하기
               </Button>
             </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section - 감정적 공감 중심 */}
        <section className="section-padding min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-coral-100 text-coral-700 px-4 py-2 rounded-full">
                  <Sparkles className="h-4 w-4 mr-2" />
                  베타 서비스 출시
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-warmGray-900 leading-tight">
                  간병, <br />
                  <span className="text-coral-600">혼자 하지 마세요</span>
                </h1>
                <p className="text-xl text-warmGray-600 leading-relaxed max-w-lg">
                  복잡한 의료 정보부터 마음의 위로까지, <br />
                  간병인의 모든 하루를 따뜻하게 돌봅니다.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-coral-500" />
                  <span className="text-warmGray-700">건강정보 자동 수집 & 쉬운 요약</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-coral-500" />
                  <span className="text-warmGray-700">복약 알림과 일정 관리</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-coral-500" />
                  <span className="text-warmGray-700">가족과 함께하는 건강관리</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-coral-500" />
                  <span className="text-warmGray-700">마음을 위로하는 일상 케어</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="primary-button text-lg px-8 py-4 w-full">
                    베타 테스트 신청하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="secondary-button text-lg px-8 py-4 w-full">
                    서비스 둘러보기
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-4 text-sm text-warmGray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>첫 100명 한정 무료</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>개인정보 완전 보호</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="warm-card p-8 max-w-sm mx-auto animate-gentle-pulse">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smile className="h-8 w-8 text-coral-600" />
                      </div>
                      <h3 className="font-semibold text-warmGray-800 mb-2">안녕하세요 민정님</h3>
                      <p className="comfort-message text-center">
                        "{comfortMessages[0]}"
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-warmGray-50 rounded-lg">
                        <span className="text-sm text-warmGray-700">오늘 복약 완료</span>
                        <CheckCircle2 className="h-5 w-5 text-coral-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-coral-50 rounded-lg">
                        <span className="text-sm text-warmGray-700">병원 예약 내일</span>
                        <Calendar className="h-5 w-5 text-coral-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-coral-400 text-white px-3 py-1 rounded-full text-sm font-semibold animate-warm-glow">
                  NEW
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Empathy Section - 간병인의 현실 공감 */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-6">
                이런 마음, 혹시 경험해보셨나요?
              </h2>
              <p className="text-xl text-warmGray-600">
                간병을 하며 느끼는 외로움과 부담감, 혼자가 아닙니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="warm-card p-6 border-l-4 border-coral-400">
                <div className="mb-4">
                  <MessageCircle className="h-8 w-8 text-coral-500 mb-3" />
                  <p className="text-warmGray-700 italic leading-relaxed">
                    "매번 병원에서 뭐라고 했는지 기억이 안 나요. 복잡한 의료용어는 더더욱..."
                  </p>
                </div>
                <div className="text-sm text-warmGray-500">- 간병 중인 김OO님</div>
              </div>

              <div className="warm-card p-6 border-l-4 border-peach-400">
                <div className="mb-4">
                  <Clock className="h-8 w-8 text-peach-500 mb-3" />
                  <p className="text-warmGray-700 italic leading-relaxed">
                    "약 먹었는지 확인하려고 하루에도 몇 번씩 전화해요. 놓칠까봐 불안해서..."
                  </p>
                </div>
                <div className="text-sm text-warmGray-500">- 부모님을 돌보는 박OO님</div>
              </div>

              <div className="warm-card p-6 border-l-4 border-trustBlue-400">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-trustBlue-500 mb-3" />
                  <p className="text-warmGray-700 italic leading-relaxed">
                    "형제들과 상황을 공유하고 싶은데, 매번 설명하기가 힘들어요."
                  </p>
                </div>
                <div className="text-sm text-warmGray-500">- 가족 건강관리 중인 이OO님</div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-3 bg-coral-50 px-6 py-4 rounded-full">
                <Heart className="h-6 w-6 text-coral-600" />
                <span className="text-coral-800 font-medium">
                  맡흠은 간병인의 일상과 함께합니다
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section id="features" className="section-padding bg-gradient-to-br from-coral-50 to-peach-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-warmGray-900 mb-6">
                따뜻한 마음으로 만든 실용적 도구들
              </h2>
              <p className="text-xl text-warmGray-600 max-w-3xl mx-auto">
                복잡한 건강정보는 쉽게, 마음의 부담은 가볍게. <br />
                간병인의 하루하루를 함께 돌봅니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="warm-card p-8 group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center group-hover:bg-coral-200 transition-colors">
                    <FileText className="h-8 w-8 text-coral-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warmGray-900">의료 마이데이터 통합</h3>
                  <p className="text-warmGray-600 leading-relaxed">
                    HIRA API로 진료·복약 기록을 자동 수집하고, 어려운 의료용어는 쉬운 말로 번역해드려요.
                  </p>
                  <div className="pt-2">
                    <span className="text-coral-600 font-medium text-sm">→ 더 이상 처방전을 잃어버릴 걱정 없어요</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="warm-card p-8 group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-peach-100 rounded-full flex items-center justify-center group-hover:bg-peach-200 transition-colors">
                    <Pill className="h-8 w-8 text-peach-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warmGray-900">내 약 지갑</h3>
                  <p className="text-warmGray-600 leading-relaxed">
                    복약 시간 알림부터 부작용 모니터링까지. 약 관리의 모든 것을 한 곳에서.
                  </p>
                  <div className="pt-2">
                    <span className="text-peach-600 font-medium text-sm">→ 보호자님과 함께 복약 체크</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="warm-card p-8 group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-trustBlue-100 rounded-full flex items-center justify-center group-hover:bg-trustBlue-200 transition-colors">
                    <Users className="h-8 w-8 text-trustBlue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warmGray-900">가족 공유</h3>
                  <p className="text-warmGray-600 leading-relaxed">
                    건강 리포트를 QR코드로 간편하게 공유. 형제자매들과 함께 건강을 지켜보세요.
                  </p>
                  <div className="pt-2">
                    <span className="text-trustBlue-600 font-medium text-sm">→ 모두가 함께 부모님을 돌봐요</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="warm-card p-8 group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center group-hover:bg-coral-200 transition-colors">
                    <Smile className="h-8 w-8 text-coral-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warmGray-900">마음 돌봄</h3>
                  <p className="text-warmGray-600 leading-relaxed">
                    "오늘의 다정한 문장"으로 위로받고, 스트레스 체크로 내 마음도 챙기세요.
                  </p>
                  <div className="pt-2">
                    <span className="text-coral-600 font-medium text-sm">→ 간병인의 마음도 소중해요</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="warm-card p-8 group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-peach-100 rounded-full flex items-center justify-center group-hover:bg-peach-200 transition-colors">
                    <Shield className="h-8 w-8 text-peach-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warmGray-900">맞춤 추천</h3>
                  <p className="text-warmGray-600 leading-relaxed">
                    건강상태 기반 병원·검진·보험 추천. 필요한 것만 골라서 추천해드려요.
                  </p>
                  <div className="pt-2">
                    <span className="text-peach-600 font-medium text-sm">→ 똑똑한 AI가 맞춤 정보 제공</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="warm-card p-8 group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-trustBlue-100 rounded-full flex items-center justify-center group-hover:bg-trustBlue-200 transition-colors">
                    <Phone className="h-8 w-8 text-trustBlue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warmGray-900">간병인 커뮤니티</h3>
                  <p className="text-warmGray-600 leading-relaxed">
                    비슷한 상황의 간병인들과 소통하고, 전문 상담사와 연결될 수 있어요.
                  </p>
                  <div className="pt-2">
                    <span className="text-trustBlue-600 font-medium text-sm">→ 혼자가 아니라는 느낌을 드려요</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comfort Message Section */}
        <section className="section-padding bg-gradient-to-r from-coral-400 to-peach-400 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                당신이 있어서 누군가가 안전합니다
              </h2>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                간병도 사랑이지만, 내 마음도 소중해요. <br />
                복잡한 건강관리, 이제 맡흠과 함께 천천히 해나가요.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {comfortMessages.slice(1, 3).map((message, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <p className="italic text-lg leading-relaxed">"{message}"</p>
                  </div>
                ))}
              </div>
                             <Link href="/dashboard">
                 <Button size="lg" variant="secondary" className="bg-white text-coral-600 hover:bg-warmGray-50 px-12 py-4 text-xl font-semibold mt-8">
                   베타 테스트 신청하기
                 </Button>
               </Link>
            </div>
          </div>
        </section>

        {/* Early Access CTA */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-coral-100 text-coral-700 px-6 py-3 text-lg font-semibold rounded-full">
                <Sparkles className="h-5 w-5 mr-2" />
                베타 테스트 모집중
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-warmGray-900">
                함께 만들어가는 따뜻한 서비스
              </h2>
              <p className="text-xl text-warmGray-600 leading-relaxed">
                첫 100명의 간병인분들과 함께 더 나은 서비스를 만들어가고 싶어요. <br />
                소중한 의견을 나눠주시면, 더 따뜻하고 실용적인 맡흠으로 발전시킬게요.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-coral-600 mb-2">100명</div>
                  <p className="text-warmGray-600">베타 테스터 한정</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-peach-600 mb-2">무료</div>
                  <p className="text-warmGray-600">베타 기간 완전 무료</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-trustBlue-600 mb-2">24시간</div>
                  <p className="text-warmGray-600">신청 후 연락드려요</p>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/dashboard">
                  <Button size="lg" className="primary-button text-xl px-12 py-6 shadow-2xl">
                    지금 베타 테스트 신청하기
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <p className="text-sm text-warmGray-500">
                  개인정보는 안전하게 보호되며, 베타 기간 이후 삭제됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-warmGray-900 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-peach-400 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">맡흠</h3>
              </div>
              <p className="text-warmGray-300 leading-relaxed">
                간병인의 마음을 이해하고, <br />
                실용적인 도움을 드리는 <br />
                따뜻한 건강관리 서비스
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">서비스 문의</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-coral-400" />
                  <span className="text-warmGray-300">contact@matheum.co.kr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-coral-400" />
                  <span className="text-warmGray-300">1588-0000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-warmGray-300 hover:text-coral-400 transition-colors">
                  건강 마이데이터
                </Link>
                <Link href="#" className="block text-warmGray-300 hover:text-coral-400 transition-colors">
                  복약 관리
                </Link>
                <Link href="#" className="block text-warmGray-300 hover:text-coral-400 transition-colors">
                  가족 공유
                </Link>
                <Link href="#" className="block text-warmGray-300 hover:text-coral-400 transition-colors">
                  간병인 케어
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-warmGray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-warmGray-400 text-sm">
              © 2024 맡흠. 모든 권리 보유.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-warmGray-400 hover:text-coral-400 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="text-warmGray-400 hover:text-coral-400 transition-colors">
                이용약관
              </Link>
              <Link href="#" className="text-warmGray-400 hover:text-coral-400 transition-colors">
                고객지원
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
