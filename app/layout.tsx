import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '맡흠 - 간병인을 위한 의료 마이데이터 통합 관리 서비스',
  description: '복잡한 의료 정보부터 마음의 위로까지, 간병인의 모든 하루를 따뜻하게 돌봅니다. 건강정보 자동 수집, 복약 관리, 가족 공유, 마음 돌봄 서비스.',
  keywords: ['간병', '건강관리', '의료정보', '복약관리', 'HIRA', '마이데이터', '간병인', '헬스케어'],
  authors: [{ name: '맡흠팀' }],
  openGraph: {
    title: '맡흠 - 간병인을 위한 의료 마이데이터 통합 관리 서비스',
    description: '간병, 혼자 하지 마세요. 복잡한 의료 정보부터 마음의 위로까지 함께합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '맡흠 - 간병인을 위한 마음 돌봄 서비스',
    description: '복잡한 건강관리, 이제 맡흠과 함께 천천히 해나가요.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
