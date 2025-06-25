"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Heart,
  LayoutDashboard,
  FileText,
  Pill,
  Users,
  Shield,
  MessageCircle,
  Settings,
  Phone,
  TrendingUp,
} from "lucide-react"

const navigationItems = [
  {
    title: "대시보드",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "건강 상태 한눈에 보기"
  },
  {
    title: "건강 마이데이터",
    href: "/health-data",
    icon: FileText,
    description: "진료·검진 기록 통합 관리"
  },
  {
    title: "내 약 지갑",
    href: "/medication",
    icon: Pill,
    description: "복약 관리 및 알림"
  },
  {
    title: "가족 공유",
    href: "/family",
    icon: Users,
    description: "건강 정보 가족 공유"
  },
  {
    title: "맞춤 추천",
    href: "/recommendation",
    icon: TrendingUp,
    description: "병원·검진·보험 추천"
  },
  {
    title: "보험금 관리",
    href: "/insurance",
    icon: Shield,
    description: "실손보험금 조회·신청"
  },
  {
    title: "간병인 케어",
    href: "/care",
    icon: MessageCircle,
    description: "마음 돌봄 및 상담"
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 min-h-screen bg-white border-r border-warmGray-200", className)}>
      <div className="space-y-4 py-4">
        {/* 로고 섹션 */}
        <div className="px-6 py-2">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-peach-400 rounded-full flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-warmGray-900">맡흠</h2>
              <p className="text-xs text-warmGray-500">간병인을 위한 서비스</p>
            </div>
          </Link>
        </div>

        {/* 네비게이션 메뉴 */}
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all hover:bg-warmGray-100",
                    isActive 
                      ? "bg-coral-50 text-coral-700 border-r-2 border-coral-500" 
                      : "text-warmGray-700 hover:text-warmGray-900"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3 h-5 w-5",
                    isActive ? "text-coral-600" : "text-warmGray-500"
                  )} />
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-warmGray-500 hidden lg:block">
                      {item.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* 하단 메뉴 */}
        <div className="px-3 py-2 border-t border-warmGray-200 mt-auto">
          <div className="space-y-1">
            <Link
              href="/settings"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-warmGray-700 transition-all hover:bg-warmGray-100"
            >
              <Settings className="mr-3 h-4 w-4 text-warmGray-500" />
              설정
            </Link>
            <Link
              href="/support"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-warmGray-700 transition-all hover:bg-warmGray-100"
            >
              <Phone className="mr-3 h-4 w-4 text-warmGray-500" />
              고객지원
            </Link>
          </div>
        </div>

        {/* 응급 연락 버튼 */}
        <div className="px-3">
          <button className="w-full bg-gradient-to-r from-coral-500 to-peach-500 text-white rounded-lg px-4 py-3 text-sm font-medium hover:from-coral-600 hover:to-peach-600 transition-all shadow-md">
            <Phone className="inline-block h-4 w-4 mr-2" />
            응급 상황 신고
          </button>
        </div>
      </div>
    </div>
  )
} 