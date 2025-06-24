"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Users,
  Clock,
  Shield,
  Sparkles,
  Send,
} from "lucide-react"

export default function BetaSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    careTarget: "",
    careRelation: "",
    careExperience: "",
    interests: [] as string[],
    additionalInfo: ""
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const interestOptions = [
    { id: "medication", label: "복약 관리", icon: "💊" },
    { id: "health-data", label: "건강정보 통합", icon: "📋" },
    { id: "family-share", label: "가족 공유", icon: "👨‍👩‍👧‍👦" },
    { id: "care-support", label: "마음 돌봄", icon: "💚" },
    { id: "insurance", label: "보험금 관리", icon: "🛡️" },
    { id: "consultation", label: "전문가 상담", icon: "💬" }
  ]

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 실제로는 API 호출
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-coral-50 via-peach-50 to-warmGray-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b border-warmGray-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-peach-400 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-warmGray-800">맡흠</h1>
            </Link>
          </div>
        </header>

        {/* Success Content */}
        <main className="max-w-2xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <div className="w-24 h-24 bg-coral-100 rounded-full flex items-center justify-center mx-auto animate-gentle-pulse">
              <CheckCircle2 className="h-12 w-12 text-coral-600" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-warmGray-900">
                신청이 완료되었습니다!
              </h1>
              <p className="text-xl text-warmGray-600 leading-relaxed">
                {formData.name}님의 소중한 신청을 받았습니다. <br />
                24시간 내에 연락드릴게요.
              </p>
            </div>

            <div className="bg-coral-50 rounded-2xl p-8 border-l-4 border-coral-400">
              <p className="comfort-message text-center mb-4">
                "간병의 여정에서 더 이상 혼자가 아니에요. 맡흠이 함께할게요."
              </p>
              <div className="text-sm text-coral-700 space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>이메일로 베타 초대장을 보내드릴게요</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>궁금한 점이 있으시면 언제든 연락주세요</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-warmGray-800">다음 단계</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-coral-600 font-bold">1</span>
                  </div>
                  <p className="text-warmGray-700">베타 초대 이메일 발송</p>
                  <p className="text-xs text-warmGray-500 mt-1">24시간 내</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-peach-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-peach-600 font-bold">2</span>
                  </div>
                  <p className="text-warmGray-700">서비스 체험 시작</p>
                  <p className="text-xs text-warmGray-500 mt-1">완전 무료</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-trustBlue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-trustBlue-600 font-bold">3</span>
                  </div>
                  <p className="text-warmGray-700">피드백 공유</p>
                  <p className="text-xs text-warmGray-500 mt-1">함께 발전</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="secondary-button">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  메인으로 돌아가기
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="primary-button">
                  서비스 미리보기
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-peach-50 to-warmGray-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-warmGray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-peach-400 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-warmGray-800">맡흠</h1>
            </Link>
            
            <Badge variant="secondary" className="bg-coral-100 text-coral-700">
              <Sparkles className="h-3 w-3 mr-1" />
              베타 테스트 신청
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* 인트로 섹션 */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-gentle-pulse">
            <Heart className="h-8 w-8 text-coral-600" />
          </div>
          <h1 className="text-3xl font-bold text-warmGray-900 mb-4">
            베타 테스트에 참여해주세요
          </h1>
          <p className="text-lg text-warmGray-600 leading-relaxed mb-8">
            간병인의 마음을 이해하는 따뜻한 서비스를 함께 만들어가요. <br />
            첫 100명 한정으로 완전 무료로 체험하실 수 있어요.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2 text-coral-600">
              <Clock className="h-4 w-4" />
              <span>24시간 내 연락</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-peach-600">
              <Shield className="h-4 w-4" />
              <span>개인정보 보호</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-trustBlue-600">
              <Users className="h-4 w-4" />
              <span>100명 한정 무료</span>
            </div>
          </div>
        </div>

        {/* 신청 폼 */}
        <Card className="warm-card">
          <CardHeader>
            <CardTitle className="text-xl text-warmGray-900">신청 정보</CardTitle>
            <p className="text-sm text-warmGray-600">
              더 나은 서비스를 위해 몇 가지 정보를 알려주세요.
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 기본 정보 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-warmGray-800 border-b border-warmGray-200 pb-2">
                  기본 정보
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-warmGray-700">
                      <User className="inline h-4 w-4 mr-1" />
                      성함 *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="홍길동"
                      required
                      className="border-warmGray-300 focus:border-coral-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-warmGray-700">
                      <Mail className="inline h-4 w-4 mr-1" />
                      이메일 *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="example@email.com"
                      required
                      className="border-warmGray-300 focus:border-coral-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-warmGray-700">
                    <Phone className="inline h-4 w-4 mr-1" />
                    연락처 *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="010-0000-0000"
                    required
                    className="border-warmGray-300 focus:border-coral-400"
                  />
                </div>
              </div>

              {/* 간병 정보 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-warmGray-800 border-b border-warmGray-200 pb-2">
                  간병 정보
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="careTarget" className="text-warmGray-700">
                      돌봄 대상자
                    </Label>
                    <Input
                      id="careTarget"
                      value={formData.careTarget}
                      onChange={(e) => setFormData(prev => ({ ...prev, careTarget: e.target.value }))}
                      placeholder="어머님, 아버님 등"
                      className="border-warmGray-300 focus:border-coral-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="careRelation" className="text-warmGray-700">
                      관계
                    </Label>
                    <Input
                      id="careRelation"
                      value={formData.careRelation}
                      onChange={(e) => setFormData(prev => ({ ...prev, careRelation: e.target.value }))}
                      placeholder="딸, 아들, 배우자 등"
                      className="border-warmGray-300 focus:border-coral-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="careExperience" className="text-warmGray-700">
                    간병 경험
                  </Label>
                  <Input
                    id="careExperience"
                    value={formData.careExperience}
                    onChange={(e) => setFormData(prev => ({ ...prev, careExperience: e.target.value }))}
                    placeholder="6개월, 2년 등"
                    className="border-warmGray-300 focus:border-coral-400"
                  />
                </div>
              </div>

              {/* 관심 기능 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-warmGray-800 border-b border-warmGray-200 pb-2">
                  관심있는 기능 (중복 선택 가능)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleInterestToggle(option.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        formData.interests.includes(option.id)
                          ? 'border-coral-400 bg-coral-50 text-coral-700'
                          : 'border-warmGray-200 hover:border-warmGray-300 text-warmGray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{option.icon}</span>
                        <span className="font-medium">{option.label}</span>
                        {formData.interests.includes(option.id) && (
                          <CheckCircle2 className="h-4 w-4 text-coral-600 ml-auto" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 추가 정보 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-warmGray-800 border-b border-warmGray-200 pb-2">
                  추가 정보
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-warmGray-700">
                    맡흠에게 바라는 점이나 어려움 (선택사항)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    placeholder="간병하면서 가장 어려운 점이나 맡흠 서비스에 바라는 점을 자유롭게 적어주세요."
                    rows={4}
                    className="border-warmGray-300 focus:border-coral-400 resize-none"
                  />
                </div>
              </div>

              {/* 개인정보 동의 */}
              <div className="bg-warmGray-50 rounded-lg p-4">
                <p className="text-sm text-warmGray-600 leading-relaxed">
                  <Shield className="inline h-4 w-4 mr-1 text-coral-600" />
                  개인정보는 베타 테스트 목적으로만 사용되며, 서비스 종료 시 안전하게 삭제됩니다. 
                  언제든지 철회하실 수 있어요.
                </p>
              </div>

              {/* 제출 버튼 */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                className="w-full primary-button text-lg py-6"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    신청 중...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    베타 테스트 신청하기
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 하단 안내 */}
        <div className="text-center mt-8 text-sm text-warmGray-500">
          <p>문의사항이 있으시면 언제든 연락주세요</p>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <span>📧 contact@matheum.co.kr</span>
            <span>📞 1588-0000</span>
          </div>
        </div>
      </main>
    </div>
  )
} 