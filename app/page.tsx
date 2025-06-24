import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  FileText,
  BarChart3,
  Clock,
  Users,
  MessageCircle,
  Shield,
  Star,
  ChevronDown,
  Smartphone,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function HealthcareLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">헬스계의 토스</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            기능소개
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
            후기
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-blue-600 transition-colors">
            FAQ
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    건강관리, 더 이상
                    <br />
                    <span className="text-blue-600">혼자 하지 마세요</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                    진료·복약 정보를 자동으로 모아 요약하고,
                    <br />
                    복약 알림과 건강 리포트를 한 번에 관리하세요.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold animate-pulse"
                  >
                    지금 사전등록하기
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50 px-8 py-4"
                  >
                    서비스 둘러보기
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>첫 100명 한정 베타 초대</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl shadow-2xl flex items-center justify-center">
                    <Smartphone className="h-32 w-32 text-blue-600" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Empathy Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                  <p className="text-lg text-gray-700 italic">"매번 병원에서 뭘 말했는지 기억이 안 나요."</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                  <p className="text-lg text-gray-700 italic">"약 먹었는지 확인하려고 하루에도 몇 번씩 전화해요."</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  우리는 이런 간병인의 일상에서 출발했습니다.
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-900">건강정보를 자동으로 수집하고</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="font-semibold text-gray-900">쉽게 이해할 수 있도록 요약하고</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="font-semibold text-gray-900">실천을 도와주는 복약 알림까지</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">건강관리의 모든 것을 한 곳에서</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                복잡한 건강정보를 쉽게 관리하고, 가족과 함께 건강을 지켜보세요.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">진료·복약 자동 수집</h3>
                  <p className="text-gray-600">
                    HIRA API로 병원 기록을 한 번에 불러옵니다. 더 이상 종이 처방전을 잃어버릴 걱정 없어요.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">건강 리포트 요약</h3>
                  <p className="text-gray-600">
                    질병·복약 내역을 쉽게 요약하여 PDF로 정리. 의사선생님께 보여드리기도 편해요.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">복약 알림</h3>
                  <p className="text-gray-600">
                    보호자와 함께 알림 받고 놓치지 않게 복용. 복약 기록도 자동으로 저장됩니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">공유 기능</h3>
                  <p className="text-gray-600">
                    형제자매, 간병인과 리포트를 쉽게 공유. 모두가 함께 건강을 챙길 수 있어요.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">정서적 위로</h3>
                  <p className="text-gray-600">
                    "오늘의 다정한 문장"으로 마음을 보듬어드립니다. 건강관리도 마음부터 시작이에요.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">안전한 보안</h3>
                  <p className="text-gray-600">
                    모든 건강정보는 암호화되어 안전하게 보관. 개인정보보호를 최우선으로 합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problem & Solution Highlight */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">간병도, 건강관리도 결국 사람의 몫이었습니다</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                공공 앱은 데이터만 보여줍니다.
                <br />
                우리는 복잡한 정보를 이해하고 <strong>실제로 실천할 수 있도록 돕습니다.</strong>
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold mt-8"
              >
                지금 시작하기
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials & Social Proof */}
        <section id="testimonials" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">실제 사용자들의 이야기</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "진짜 감동했어요. 이제 엄마 약 먹은 시간도 기억하지 않아도 되니까요."
                  </p>
                  <div className="text-sm text-gray-500">– 채OO 님, 53세, 간병 중</div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "병원에서 받은 처방전을 일일이 정리할 필요가 없어서 정말 편해요."
                  </p>
                  <div className="text-sm text-gray-500">– 김OO 님, 47세, 부모님 건강관리</div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"형제들과 아버지 건강상태를 공유할 수 있어서 마음이 놓여요."</p>
                  <div className="text-sm text-gray-500">– 이OO 님, 41세, 가족 건강관리</div>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
                <p className="text-gray-600">복약 누락률 감소</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                <p className="text-gray-600">사용자 만족도</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
                <p className="text-gray-600">3일 이상 지속 사용률</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                📣 S헬스케어 창업캠프 우수팀 선정
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                📰 디지털 헬스 전문 매체 "HealthIT" 인터뷰 예정
              </Badge>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-green-50 to-blue-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">사전 등록하고 베타 테스트 초대 받기</h2>
              <p className="text-xl text-gray-600">첫 100명 한정으로 베타 서비스를 무료로 체험해보세요.</p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  지금 사전등록하기
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>첫 100명 한정 베타 초대</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>등록 후 24시간 내 우선 알림 발송</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">자주 묻는 질문</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  건강정보는 어디서 수집되나요?
                  <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  HIRA(건강보험심사평가원) API를 통해 인증 후 자동 수집됩니다. 본인의 동의 하에 공식 경로로만 정보를
                  가져오므로 안전합니다.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  개인정보는 안전한가요?
                  <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  모든 정보는 암호화되며, 본인의 명시적 동의 없이는 사용되지 않습니다. 개인정보보호법을 준수하여 최고
                  수준의 보안을 제공합니다.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  이용 요금이 있나요?
                  <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  베타 기간 동안은 완전 무료입니다. 이후 일부 유료 기능이 추가될 수 있지만, 기본 기능은 계속 무료로
                  제공될 예정입니다.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  가족과 함께 사용할 수 있나요?
                  <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  네, 가족 구성원을 초대하여 건강정보를 공유하고 함께 관리할 수 있습니다. 각자의 권한을 설정하여 필요한
                  정보만 공유 가능합니다.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-semibold">헬스계의 토스</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                이용약관
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                고객지원
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2024 헬스계의 토스. 모든 권리 보유.
          </div>
        </div>
      </footer>
    </div>
  )
}
