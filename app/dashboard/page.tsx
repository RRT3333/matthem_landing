"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Smile,
  Calendar,
  Pill,
  Users,
  Bell,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  Activity,
  TrendingUp,
  MessageCircle,
  Phone,
  Settings,
  LogOut,
} from "lucide-react"

// Mock 데이터 - 실제로는 API에서 가져올 데이터
const greetingMessages = [
  "세상의 짐을 홀로 들고 있었다면, 오늘부터는 우리와 나눠 들어요",
  "간병도 사랑이지만, 내 마음도 소중해요",
  "당신이 있어서 누군가가 안전합니다",
  "완벽하지 않아도 괜찮아요. 함께 천천히 해나가요",
  "오늘도 고생 많으셨어요. 잠시 쉬어가셔도 괜찮아요",
]

const mockUser = {
  name: "민정님",
  careTarget: "어머님",
  joinDate: "2024-01-15"
}

const mockHealthData = {
  medicationCompliance: 94,
  upcomingAppointments: 2,
  healthScore: 85,
  lastCheckup: "2024-01-20"
}

const mockTodos = [
  { id: 1, task: "혈압약 복용", time: "오전 8:00", completed: true, type: "medication" },
  { id: 2, task: "내과 병원 방문", time: "오후 2:00", completed: false, type: "appointment" },
  { id: 3, task: "혈당 측정", time: "오후 6:00", completed: false, type: "checkup" },
  { id: 4, task: "저녁 약 복용", time: "오후 7:00", completed: false, type: "medication" },
]

export default function Dashboard() {
  const [currentGreeting, setCurrentGreeting] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // 랜덤 인사말 설정
    const randomIndex = Math.floor(Math.random() * greetingMessages.length)
    setCurrentGreeting(greetingMessages[randomIndex])

    // 시간 업데이트
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "좋은 아침이에요"
    if (hour < 18) return "좋은 오후에요"
    return "좋은 저녁이에요"
  }

  const completedTodos = mockTodos.filter(todo => todo.completed).length
  const totalTodos = mockTodos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-peach-50 to-warmGray-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-warmGray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-peach-400 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-warmGray-800">맡흠</h1>
                <p className="text-sm text-warmGray-500">대시보드</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-warmGray-600" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-coral-500 rounded-full text-xs"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5 text-warmGray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5 text-warmGray-600" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* 개인화된 인사말 */}
        <section className="mb-12">
          <div className="warm-card p-8 mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center">
                <Smile className="h-8 w-8 text-coral-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-warmGray-900">
                  {getTimeBasedGreeting()}, {mockUser.name}!
                </h2>
                <p className="text-warmGray-600">{mockUser.careTarget}의 건강을 돌보시느라 고생 많으세요</p>
              </div>
            </div>
            <div className="bg-coral-50 rounded-2xl p-6 border-l-4 border-coral-400">
              <p className="comfort-message text-center">
                "{currentGreeting}"
              </p>
            </div>
          </div>
        </section>

        {/* 건강 상태 요약 카드 */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-warmGray-900 mb-6">{mockUser.careTarget} 건강 상태 요약</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="health-stat-card bg-gradient-to-br from-coral-100 to-coral-50 border-coral-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-coral-800">
                  <span className="text-sm font-medium">복약 준수율</span>
                  <Pill className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-coral-700 mb-2">{mockHealthData.medicationCompliance}%</div>
                <p className="text-sm text-coral-600">이번 달 평균</p>
              </CardContent>
            </Card>

            <Card className="health-stat-card bg-gradient-to-br from-peach-100 to-peach-50 border-peach-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-peach-800">
                  <span className="text-sm font-medium">예정된 진료</span>
                  <Calendar className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-peach-700 mb-2">{mockHealthData.upcomingAppointments}건</div>
                <p className="text-sm text-peach-600">이번 주 예정</p>
              </CardContent>
            </Card>

            <Card className="health-stat-card bg-gradient-to-br from-trustBlue-100 to-trustBlue-50 border-trustBlue-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-trustBlue-800">
                  <span className="text-sm font-medium">건강 점수</span>
                  <Activity className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-trustBlue-700 mb-2">{mockHealthData.healthScore}점</div>
                <p className="text-sm text-trustBlue-600">전월 대비 +3점</p>
              </CardContent>
            </Card>

            <Card className="health-stat-card bg-gradient-to-br from-warmGray-100 to-warmGray-50 border-warmGray-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-warmGray-800">
                  <span className="text-sm font-medium">마지막 검진</span>
                  <CheckCircle2 className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-warmGray-700 mb-2">4일전</div>
                <p className="text-sm text-warmGray-600">{mockHealthData.lastCheckup}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 오늘 할 일 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-warmGray-900">오늘 할 일</h3>
            <Badge variant="secondary" className="bg-coral-100 text-coral-700">
              {completedTodos}/{totalTodos} 완료
            </Badge>
          </div>
          
          <div className="warm-card p-6">
            <div className="space-y-4">
              {mockTodos.map((todo) => (
                <div key={todo.id} className="flex items-center justify-between p-4 rounded-xl bg-warmGray-50 hover:bg-warmGray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      todo.completed 
                        ? 'bg-coral-500 border-coral-500' 
                        : 'border-warmGray-300'
                    }`}>
                      {todo.completed && <CheckCircle2 className="h-4 w-4 text-white" />}
                    </div>
                    <div>
                      <p className={`font-medium ${todo.completed ? 'text-warmGray-500 line-through' : 'text-warmGray-800'}`}>
                        {todo.task}
                      </p>
                      <p className="text-sm text-warmGray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {todo.time}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={`text-xs ${
                      todo.type === 'medication' ? 'border-coral-300 text-coral-600' :
                      todo.type === 'appointment' ? 'border-peach-300 text-peach-600' :
                      'border-trustBlue-300 text-trustBlue-600'
                    }`}>
                      {todo.type === 'medication' ? '복약' : 
                       todo.type === 'appointment' ? '진료' : '검진'}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-warmGray-200">
              <div className="flex items-center justify-center space-x-4">
                <Button className="primary-button">
                  <Pill className="h-4 w-4 mr-2" />
                  복약 기록 추가
                </Button>
                <Button variant="outline" className="secondary-button">
                  <Calendar className="h-4 w-4 mr-2" />
                  일정 추가
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 빠른 액션 */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-warmGray-900 mb-6">빠른 액션</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-white hover:bg-coral-50 border-warmGray-200">
              <Users className="h-6 w-6 text-coral-600" />
              <span className="text-sm font-medium text-warmGray-700">가족 공유</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-white hover:bg-peach-50 border-warmGray-200">
              <MessageCircle className="h-6 w-6 text-peach-600" />
              <span className="text-sm font-medium text-warmGray-700">상담 신청</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-white hover:bg-trustBlue-50 border-warmGray-200">
              <Phone className="h-6 w-6 text-trustBlue-600" />
              <span className="text-sm font-medium text-warmGray-700">응급 연락</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-white hover:bg-warmGray-50 border-warmGray-200">
              <TrendingUp className="h-6 w-6 text-warmGray-600" />
              <span className="text-sm font-medium text-warmGray-700">건강 리포트</span>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
} 